package kr.co.user.diary;

import java.lang.reflect.Member;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryPageRepository extends JpaRepository<Diarypage, Long>{
    // List<DiaryPage> findByDiarynum(Long diarynum);  // 특정 다이어리의 모든 페이지 조회
    
}
