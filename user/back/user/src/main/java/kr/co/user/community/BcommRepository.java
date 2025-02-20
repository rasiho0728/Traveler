package kr.co.user.community;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BcommRepository extends JpaRepository<Bcomm, Long> {
    // 특정 게시글의 모든 댓글 및 대댓글 조회(최신)
    List<Bcomm> findByBackpackNumOrderByBdateDesc(Long backpackNum);

    // 특정 게시글의 댓글 개수 가져오기
    // PARENTNUM이 NULL이면 일반 댓글, 값이 있으면 대댓글
    @Query("SELECT COUNT(b) FROM Bcomm b WHERE b.backpack.num = :backpackNum")
    long countByBackpackNum(Long backpackNum); 
}
