package kr.co.user.member;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
//2025-02-15 전준영 생성
public interface MemberRepository extends JpaRepository<MemberVO, Long> {
    
    // 아이디로 회원 조회
    Optional<MemberVO> findByUsername(String username);

    // 이메일로 회원 조회
    Optional<MemberVO> findByEmail(String email);

    // 아이디가 존재하는지 확인
    boolean existsByUsername(String username);

    // 이메일이 존재하는지 확인
    boolean existsByEmail(String email);

    // 이메일 인증 코드로 회원 조회
    // Optional<MemberVO> findByEmailVerificationCode(String code);

    // 인증 코드 저장
    // @Transactional
    // @Modifying
    // @Query("UPDATE MemberVO m SET m.emailVerificationCode = :code WHERE m.email = :email")
    // void updateEmailVerificationCode(String email, String code);

    // 인증 성공 시, emailVerified = true로 업데이트하고 인증 코드는 삭제
    // @Transactional
    // @Modifying
    // @Query("UPDATE MemberVO m SET m.emailVerified = :verified, m.emailVerificationCode = NULL WHERE m.email = :email")
    // void updateEmailVerification(String email, boolean verified);

    // 제휴회사 회원 조회 (사업자 번호로 조회)
    Optional<MemberVO> findByCode(String code);
}
