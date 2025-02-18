package kr.co.user.diary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiaryRepository extends JpaRepository<Diary, Long> {
    List<Diary> findByMambernum(Integer mambernum);//특정 회원의 다이어리 목록 조회

    
}