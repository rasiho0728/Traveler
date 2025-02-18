package kr.co.user.mypage;

import java.lang.reflect.Member;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyPageRepository extends JpaRepository<Member,Long> {
    Optional<Member> findByUserName(String userName); // userName으로 각 조회
    
}
