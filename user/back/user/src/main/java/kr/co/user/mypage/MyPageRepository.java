package kr.co.user.mypage;

import java.lang.reflect.Member;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MyPageRepository extends JpaRepository<Member,Long> {
    Optional<Member> findByUserName(String userName); // userName으로 각 조회
    
    @Query(value = "SELECT name, phone, email, mdate FROM MEMBER WHERE USERNAME=:userName", nativeQuery = true)
    List<Member> findByMyUserName(@Param("userName") String userName);

    @Query(value = "UPDATE MEMBER SET name=:name, phone=:phone, email=:email WHERE USERNAME=:userName", nativeQuery = true)
    List<Member> updateMyPage(@Param("userName") String userName,
            @Param("name") String name, @Param("phone") String phone, @Param("email") String email);
}
