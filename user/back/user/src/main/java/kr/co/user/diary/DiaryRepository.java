package kr.co.user.diary;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.user.member.Member;

import java.util.List;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
    // List<Diary> findByMambernum(Integer mambernum);//특정 회원의 다이어리 목록 조회

    
}