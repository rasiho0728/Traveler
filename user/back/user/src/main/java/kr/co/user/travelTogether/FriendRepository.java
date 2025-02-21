package kr.co.user.travelTogether;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import kr.co.user.member.MemberVO;

public interface FriendRepository extends JpaRepository<Friend, Long> {
    // 친구 목록 조회
    @Query(value = "SELECT * FROM Friend WHERE userID =:userID AND acceptOrRefuse = 'accepted'", nativeQuery = true)
    List<Friend> findFriendsByUserID(@Param("userID") String userID);

    // 친구신청
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO FRIEND (userID, friendID, acceptOrRefuse, fDate) " +
            "SELECT :userID, m.username, 'pending', SYSDATE " +
            "FROM MEMBER m WHERE m.EMAIL = :email", nativeQuery = true)
    void sendFriendRequestByEmail(@Param("userID") String userID, 
                                    @Param("email") String email);
}