package kr.co.admin.chat;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import kr.co.admin.member.Member;


public interface ChatRepository extends JpaRepository<Member, Long> {
    @Query("SELECT m.chatlog FROM Member m where m.userName = :username")
    List<Chat> getChatLogs(@Param("username") String username);

    Optional<Member> findByUserName(String userName);
}
