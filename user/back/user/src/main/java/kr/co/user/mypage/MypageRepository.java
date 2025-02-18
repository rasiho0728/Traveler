package kr.co.user.mypage;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import kr.co.user.chat.Chat;
import kr.co.user.member.MemberVO;

public interface MypageRepository extends JpaRepository<MemberVO, Long>{
    // 사용자 정보 조회
    @Query(value = "SELECT * FROM MemberVO WHERE username = :username", nativeQuery = true)
    MemberVO findUserByUsername(@Param("username") String username);
    
    // 챗봇과의 최근 대화 5개 조회 (type = 1)
    @Query("SELECT c FROM MemberVO m JOIN m.chatlog c WHERE m.username = :username AND c.type = 1 ORDER BY c.cdate DESC")
    List<Chat> chatbotList(@Param("username") String username);

    // 관리자(직원)과의 최근 대화 5개 조회 (type = 0)
    @Query("SELECT c FROM MemberVO m JOIN m.chatlog c WHERE m.username = :username AND c.type = 0 ORDER BY c.cdate DESC")
    List<Chat> adminChatList(@Param("username") String username);
}
