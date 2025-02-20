package kr.co.user.community;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

// JpaRepository를 상속받아 CRUD 기능 제공
public interface BackPackRepository extends JpaRepository<BackPack, Long> {
    List<BackPack> findAllByOrderByNumDesc(); // 게시글 목록을 최신순(번호 내림차순)으로 조회하는 메서드

    // 위에 findAllByOrderByNumDesc() 동일한 기능
    // @Query(value = "SELECT * FROM BACKPACK ORDER BY NUM DESC", nativeQuery =
    // true)
    // List<BackPack> getList();

}
