package kr.co.user.mypage;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import kr.co.user.chat.Chat;
import kr.co.user.member.MemberVO;

public interface MypageRepository extends JpaRepository<MemberVO, Long>{
    
    // 채팅내역 최신글 5가지 가져오기
    @Query("SELECT c FROM MemberVO m JOIN m.chatlog c WHERE m.username = :username AND c.type = 1 ORDER BY c.cdate DESC")
    List<Chat> chatbotList(@Param("username") String username);
}
