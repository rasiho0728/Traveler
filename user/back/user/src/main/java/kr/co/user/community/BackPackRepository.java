package kr.co.user.community;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BackPackRepository extends JpaRepository<BackPack, Long> {
    List<BackPack> findAllByOrderByNumDesc();

    // @Query(value = "SELECT * FROM BACKPACK ORDER BY NUM DESC", nativeQuery = true)
    // List<BackPack> getList();

    @Query("SELECT b FROM BackPack b WHERE b.member.num = :memberNum")
    List<BackPack> findBackPackByMemberNum(@Param("memberNum") Long memberNum);

}
