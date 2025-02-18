package kr.co.user.mypage;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.user.member.MemberVO;

public interface MyPageRepository extends JpaRepository<MemberVO,Long> {
    Optional<MemberVO> findByUsername(String username); // userName으로 각 조회
    
}
