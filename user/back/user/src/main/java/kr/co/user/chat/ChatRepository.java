package kr.co.user.chat;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import kr.co.user.member.Member;

public interface ChatRepository extends JpaRepository<Member, Long> {
    @Query("SELECT m.chatlog FROM Member m where m.userName = :username")
    List<Chat> getChatLogs(@Param("username") String username);
}
