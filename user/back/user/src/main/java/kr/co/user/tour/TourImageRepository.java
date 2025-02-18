package kr.co.user.tour;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TourImageRepository extends JpaRepository<TourImage, Long> {
    List<TourImage> findByTourNum(Long tourNum);
    void deleteAllByTourNum(Long tourNum);
}
