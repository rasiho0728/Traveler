package kr.co.user.mypage;

<<<<<<< HEAD
import java.lang.reflect.Member;
import java.util.List;
=======
>>>>>>> 0e540cf679480c48c18ab9c4aecce15466bc7a9f
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import kr.co.user.member.MemberVO;

public interface MyPageRepository extends JpaRepository<MemberVO,Long> {
    Optional<MemberVO> findByUsername(String username); // userName으로 각 조회
    
    @Query(value = "SELECT name, phone, email, mdate FROM MEMBER WHERE USERNAME=:userName", nativeQuery = true)
    List<Member> findByMyUserName(@Param("userName") String userName);

    @Query(value = "UPDATE MEMBER SET name=:name, phone=:phone, email=:email WHERE USERNAME=:userName", nativeQuery = true)
    List<Member> updateMyPage(@Param("userName") String userName,
            @Param("name") String name, @Param("phone") String phone, @Param("email") String email);
}
