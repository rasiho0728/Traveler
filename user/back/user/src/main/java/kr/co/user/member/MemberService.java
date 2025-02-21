package kr.co.user.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.concurrent.TimeUnit;
//2025-02-15 전준영 생성
@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final StringRedisTemplate redisTemplate; // Redis 사용

    @Autowired
    public MemberService(MemberRepository memberRepository, BCryptPasswordEncoder passwordEncoder, StringRedisTemplate redisTemplate) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.redisTemplate = redisTemplate;
    }

    // 회원 가입 서비스
    @Transactional
    public MemberVO registerMember(MemberVO memberVO) {
        if (memberRepository.existsByUsername(memberVO.getUsername())) {
            throw new IllegalArgumentException("이미 존재하는 아이디입니다.");
        }

        if (memberRepository.existsByEmail(memberVO.getEmail())) {
            throw new IllegalArgumentException("이미 존재하는 이메일입니다.");
        }

        if (memberVO.getPwd() == null || memberVO.getPwd().length() < 6) {
            throw new IllegalArgumentException("비밀번호는 최소 6자 이상이어야 합니다.");
        }

        memberVO.setPwd(passwordEncoder.encode(memberVO.getPwd()));
        memberVO.setRole(memberVO.getCompany() ? "COALITION" : "USER");

        return memberRepository.save(memberVO);
    }

    // 이메일 인증 코드 발송 (Redis 저장)
    @Transactional
    public void sendVerificationCode(String email) {
        memberRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("해당 이메일로 가입된 회원이 없습니다."));

        String verificationCode = generateVerificationCode();

        // 🔥 Redis에 저장 (만료 시간: 5분)
        redisTemplate.opsForValue().set("EMAIL_VERIFICATION:" + email, verificationCode, 5, TimeUnit.MINUTES);

        // 실제 이메일 발송 로직 필요 (현재는 콘솔 출력)
        System.out.println("발송된 인증 코드: " + verificationCode);
    }

    // 인증 코드 생성 (6자리 랜덤 숫자)
    private String generateVerificationCode() {
        return String.format("%06d", (int) (Math.random() * 1000000)); // 6자리 랜덤 숫자 생성
    }

    // 이메일 인증 처리 (Redis 검증 후 삭제)
    @Transactional
    public void verifyEmail(String email, String code) {
        String redisKey = "EMAIL_VERIFICATION:" + email;
        String storedCode = redisTemplate.opsForValue().get(redisKey);

        if (storedCode == null) {
            throw new IllegalArgumentException("인증 코드가 만료되었거나 존재하지 않습니다.");
        }

        if (!storedCode.equals(code)) {
            throw new IllegalArgumentException("잘못된 인증 코드입니다.");
        }

        // 인증 완료 후 Redis에서 삭제
        redisTemplate.delete(redisKey);
    }

    // 제휴회사 회원 조회 (사업자 번호로 조회)
    public MemberVO getPartnerByBusinessNumber(String businessNumber) {
        return memberRepository.findByCode(businessNumber)
                .orElseThrow(() -> new IllegalArgumentException("해당 사업자 번호로 가입된 제휴회사가 없습니다."));
    }
}
