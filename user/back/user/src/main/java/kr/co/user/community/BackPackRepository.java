package kr.co.user.community;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

// JpaRepository를 상속받아 CRUD 기능 제공
public interface BackPackRepository extends JpaRepository<BackPack, Long> {
    List<BackPack> findAllByOrderByNumDesc(); // 게시글 목록을 최신순(번호 내림차순)으로 조회하는 메서드

    // 위에 findAllByOrderByNumDesc() 동일한 기능
    // @Query(value = "SELECT * FROM BACKPACK ORDER BY NUM DESC", nativeQuery =
    // true)
    // List<BackPack> getList();

    @Query(value = "SELECT * FROM(SELECT b.* , ROW_NUMBER() OVER(ORDER BY b.num DESC) as row_num " + // num 기준으로 내림차순
                                                                                                     // 정렬하며 row_num 생성
    // title에 특정 문자열이 포함된 데이터 검색
            " FROM BACKPACK b WHERE b.title LIKE %:title%) WHERE row_num  BETWEEN :startRow AND :endRow", nativeQuery = true)
    List<BackPack> findByTitleContainingOrderByNumDesc(
            @Param("title") String title,
            @Param("startRow") int startRow,
            @Param("endRow") int endRow);

    // 특정 단어(title)를 포함하는 데이터를 검색하여 그 개수를 반환하는 메서드
    @Query(value = "SELECT COUNT(*) FROM backpack b WHERE b.title LIKE %:title%", nativeQuery = true)
    int countByTitleContaining(@Param("title") String title);

}
