package kr.co.user.mypage;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import kr.co.user.chat.Chat;
import kr.co.user.diary.Diary;
import kr.co.user.member.MemberVO;

public interface MypageRepository extends JpaRepository<MemberVO, Long>{
    // 사용자 정보 조회
    @Query(value = "SELECT * FROM MemberVO WHERE username = :username", nativeQuery = true)
    MemberVO findUserByUsername(@Param("username") String username);
    
    // 챗봇과의 최근 대화 5개 조회 (type = 1)
    @Query(value = "SELECT c FROM MemberVO m JOIN m.chatlog c WHERE m.username = :username AND c.type = 1 ORDER BY c.cdate DESC")
    List<Chat> chatbotList(@Param("username") String username);

    // 관리자(직원)과의 최근 대화 5개 조회 (type = 0)
    @Query(value = "SELECT c FROM MemberVO m JOIN m.chatlog c WHERE m.username = :username AND c.type = 0 ORDER BY c.cdate DESC")
    List<Chat> adminChatList(@Param("username") String username);

    // 예약한 내역을 5가지 보여주기
    @Query(value = "SELECT h.content " +
            "FROM HOTELRESERVATION hr " +
            "JOIN ROOM r ON hr.roomNum = r.num " +
            "JOIN HOTEL h ON r.hotelNum = h.num " +
            "WHERE hr.member_email = :email " +
            "ORDER BY hr.check_in_date DESC " +
            "LIMIT 5", nativeQuery = true)
    List<String> findLatestHotelContentsByEmail(@Param("email") String email);

    // 사용자가 올린 여행 블로그 글 (최신순 3개)
    @Query(value = "SELECT b.title FROM BackPack b WHERE b.member.username = :username ORDER BY b.cdate DESC", nativeQuery = true)
    List<String> findRecentBackPack(@Param("username") String username);

    // 사용자가 최근 작성한 일기 4개
    @Query(value = "SELECT d FROM Diary d WHERE d.username = :username ORDER BY d.createdAt DESC", nativeQuery = true)
    List<Diary> findRecentDiaries(@Param("username") String username);

    // 사용자가 최근 본 플레이리스트 5개
    // @Query("SELECT p FROM Playlist p WHERE p.username = :username ORDER BY p.viewDate DESC")
    // List<Playlist> findRecentPlaylists(@Param("username") String username);

    
}
