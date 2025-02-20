package kr.co.user.diary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
    // 게시글 번호로 정렬된 전체 게시글 조회
    List<Diary> findAllByOrderByNumDesc();
    
    //최신 공유 9개 다이어리 리스트
    @Query(nativeQuery = true, value = "SELECT num, title, ddate, heart, thumbnail, hit, isshare, membernum " +
        "FROM ( SELECT a.num, a.title, a.ddate, a.heart, a.thumbnail, a.hit, a.isshare, a.membernum, ROWNUM rnum " +
        "FROM diary a WHERE a.isshare = 1 ORDER BY a.num DESC ) " +
        "WHERE rnum <= 9")
    List<Diary> shareDiaryList();

    //나의 다이어리 리스트
    @Query(nativeQuery = true, value = "SELECT num, title, ddate, heart, thumbnail, hit, isshare, membernum " +
        "FROM ( SELECT a.num, a.title, a.ddate, a.heart, a.thumbnail, a.hit, a.isshare, a.membernum, ROWNUM rnum " +
        "FROM diary a WHERE a.membernum = :membernum ORDER BY a.num DESC ) " +
        "WHERE rnum <= 8")
    List<Object[]> myDiaryList(@Param("membernum") Long membernum);


}