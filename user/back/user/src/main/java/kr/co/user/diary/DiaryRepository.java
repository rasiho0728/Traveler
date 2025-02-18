package kr.co.user.diary;

import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
    // 게시글 번호로 정렬된 전체 게시글 조회
    List<Diary> findAllByOrderByNumDesc();

    
}