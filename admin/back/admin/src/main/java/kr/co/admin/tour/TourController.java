package kr.co.admin.tour;

import kr.co.admin.tour.Tour;
import kr.co.admin.tour.TourService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tours")
public class TourController {

    private final TourService tourService;

    public TourController(TourService tourService) {
        this.tourService = tourService;
    }

    // ✅ 투어 등록 API
    @PostMapping("/upload")
    public String uploadTour(@RequestBody Tour tour) {
        tourService.saveTour(tour);
        return "Tour uploaded successfully!";
    }

    // ✅ 모든 투어 목록 조회 API
    @GetMapping
    public List<Tour> getAllTours() {
        List<Tour> tours = tourService.getAllTours();
        System.out.println("조회된 투어 리스트: " + tours); // 🔍 디버깅 출력
        return tours;
    }
}
