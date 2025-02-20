package kr.co.user.diary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DiaryPageRepository extends JpaRepository<Diarypage, Long>{
    List<Diarypage> findByDiaryNum(Long num);  // 특정 다이어리의 모든 페이지 조회

}
