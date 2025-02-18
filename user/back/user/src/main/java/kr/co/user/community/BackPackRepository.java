package kr.co.user.community;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;

public interface BackPackRepository extends JpaRepository<BackPack, Long> {
    List<BackPack> findAllByOrderByNumDesc();

    // @Query(value = "SELECT * FROM BACKPACK ORDER BY NUM DESC", nativeQuery = true)
    // List<BackPack> getList();
}
