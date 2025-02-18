package kr.co.user.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    // 의존성 주입
    @Autowired
    public MemberService(MemberRepository memberRepository, BCryptPasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // 회원 가입 서비스
    @Transactional
    public MemberVO registerMember(MemberVO memberVO) {
        // 아이디 중복 체크
        if (memberRepository.existsByUsername(memberVO.getUsername())) {
            throw new IllegalArgumentException("이미 존재하는 아이디입니다.");
        }

        // 이메일 중복 체크
        if (memberRepository.existsByEmail(memberVO.getEmail())) {
            throw new IllegalArgumentException("이미 존재하는 이메일입니다.");
        }

        // 비밀번호 암호화
        memberVO.setPwd(passwordEncoder.encode(memberVO.getPwd()));

        // 기본 역할 설정 (제휴회사 여부에 따른 역할 부여)
        if (memberVO.getIsPartner()) {
            memberVO.setRole("ROLE_PARTNER");
        } else {
            memberVO.setRole("ROLE_USER");
        }

        // 기본 이메일 인증 상태 설정
        memberVO.setEmailVerified(false);

        // 회원 저장
        return memberRepository.save(memberVO);
    }

    // 이메일 인증 코드 발송
    @Transactional
    public void sendVerificationCode(String email) {
        // 이메일로 회원을 찾기
        Optional<MemberVO> member = memberRepository.findByEmail(email);

        // 회원이 없으면 예외 처리
        if (member.isEmpty()) {
            throw new IllegalArgumentException("해당 이메일로 가입된 회원이 없습니다.");
        }

        // 인증 코드 생성 및 저장
        String verificationCode = generateVerificationCode();
        memberRepository.updateEmailVerificationCode(email, verificationCode);

        // 이메일 발송 로직은 실제 이메일 전송 서비스와 연동하여 구현해야 합니다.
    }

    // 인증 코드 생성 (6자리 랜덤 코드 예시)
    private String generateVerificationCode() {
        return String.valueOf((int)(Math.random() * 1000000));  // 6자리 랜덤 숫자 생성
    }

    // 이메일 인증 처리
    @Transactional
    public void verifyEmail(String email, String code) {
        // 이메일로 회원을 찾기
        Optional<MemberVO> member = memberRepository.findByEmail(email);

        // 회원이 없으면 예외 처리
        if (member.isEmpty()) {
            throw new IllegalArgumentException("해당 이메일로 가입된 회원이 없습니다.");
        }

        // 인증 코드 비교
        MemberVO memberVO = member.get();
        if (!memberVO.getEmailVerificationCode().equals(code)) {
            throw new IllegalArgumentException("잘못된 인증 코드입니다.");
        }

        // 이메일 인증 성공 처리
        memberRepository.updateEmailVerification(email, true);
    }

    // 제휴회사 회원 조회 (사업자 번호로 조회)
    public MemberVO getPartnerByBusinessNumber(String businessNumber) {
        // 사업자 번호로 제휴회사 조회
        Optional<MemberVO> member = memberRepository.findByBusinessNumber(businessNumber);

        // 제휴회사가 없으면 예외 처리
        if (member.isEmpty()) {
            throw new IllegalArgumentException("해당 사업자 번호로 가입된 제휴회사가 없습니다.");
        }

        return member.get();
    }
}
