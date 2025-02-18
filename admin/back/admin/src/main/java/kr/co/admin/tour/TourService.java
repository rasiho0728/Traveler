package kr.co.admin.tour;

import kr.co.admin.tour.Tour;
import kr.co.admin.tour.TourRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TourService {

    private final TourRepository tourRepository;

    public TourService(TourRepository tourRepository) {
        this.tourRepository = tourRepository;
    }

    // ✅ 투어 저장 메서드
    public void saveTour(Tour tour) {
        tourRepository.save(tour);
    }

    // ✅ 모든 투어 조회
    public List<Tour> getAllTours() {
        return tourRepository.findAll();
    }
}
