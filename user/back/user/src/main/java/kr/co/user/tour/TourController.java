package kr.co.user.tour;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/tours")
@RequiredArgsConstructor
public class TourController {

    private final TourService tourService;

    // ✅ 투어 등록 (이미지 & 스케줄 포함)
    @PostMapping(value = "/upload", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> uploadTour(@RequestBody Tour tour) {
        System.out.println("Received Tour Object: " + tour);
        tourService.saveTourWithDetails(tour);
        return ResponseEntity.ok("Tour uploaded successfully!");
    }

    // ✅ 특정 투어 조회 (상세 보기)
    @GetMapping("/{tourId}")
    public ResponseEntity<Tour> getTourDetail(@PathVariable("tourId") Long tourId) {
        Tour tour = tourService.getTourDetail(tourId);
        return ResponseEntity.ok(tour);
    }

    // ✅ 모든 투어 조회
    @GetMapping
    public ResponseEntity<List<Tour>> getAllTours() {
        List<Tour> tours = tourService.getAllTours();
        return ResponseEntity.ok(tours);
    }

    // ✅ 특정 투어의 스케줄 조회
    @GetMapping("/{tourId}/schedules")
    public ResponseEntity<List<TourSchedule>> getTourSchedules(@PathVariable("tourId") Long tourId) {
        List<TourSchedule> schedules = tourService.getTourSchedules(tourId);
        return ResponseEntity.ok(schedules);
    }

    // ✅ 특정 투어의 이미지 조회
    @GetMapping("/{tourId}/images")
    public ResponseEntity<List<TourImage>> getTourImages(@PathVariable("tourId") Long tourId) {
        List<TourImage> images = tourService.getTourImages(tourId);
        return ResponseEntity.ok(images);
    }

    // ✅ 투어 삭제 (스케줄 & 이미지 포함)
    @DeleteMapping("/{tourId}")
    public ResponseEntity<String> deleteTour(@PathVariable Long tourId) {
        tourService.deleteTour(tourId);
        return ResponseEntity.ok("Tour deleted successfully!");
    }
}
