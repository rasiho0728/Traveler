package kr.co.user.hotel;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

// 2025-02-15 황보도연 추가 
public interface HotelRepository extends JpaRepository<Hotel, Long> {

        Page<Hotel> findByNameContainingOrderByNumDesc(String name, Pageable pageable);

        @Query("SELECT h FROM Hotel h ORDER BY h.num DESC")
        List<Hotel> findAllByOrderByNumDesc();

        // List<Hotel> findByLocation(String location);

        // 검색 및 페이징 처리
        @Query(value = "SELECT * FROM (SELECT h.*, ROW_NUMBER() OVER (ORDER BY h.num DESC) as row_num " +
                        "FROM Hotel h WHERE h.name LIKE %:name%) WHERE row_num BETWEEN :startRow AND :endRow", nativeQuery = true)
        List<Hotel> findByNameContainingOrderByNumDesc(@Param("name") String name,
                        @Param("startRow") int startRow,
                        @Param("endRow") int endRow);

        // @Query(value = """
        // SELECT NUM, NAME, RATING, CONTENT, LOCATION, THUMBNAIL, HIT, HDATE
        // FROM (
        // SELECT h.*, ROWNUM AS row_num
        // FROM (SELECT * FROM HOTEL
        // WHERE NAME LIKE %:name%
        // ORDER BY NUM DESC) h
        // )
        // WHERE row_num BETWEEN :startRow AND :endRow
        // ORDER BY row_num
        // """, nativeQuery = true)
        // List<Hotel> findByNameContainingOrderByNumDesc(@Param("name") String name,
        // @Param("startRow") int startRow,
        // @Param("endRow") int endRow);

}