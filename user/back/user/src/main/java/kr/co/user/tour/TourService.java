package kr.co.user.tour;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TourService {

    private final TourRepository tourRepository;
    private final TourScheduleRepository tourScheduleRepository;
    private final TourImageRepository tourImageRepository;

    // ✅ 투어 등록 (이미지 & 스케줄 포함)
    @Transactional
public void saveTourWithDetails(Map<String, Object> data) {
    Tour tour = new Tour();
    tour.setName((String) data.get("name"));

    // ✅ 변환 시 안전한 처리 (Double → Integer 변환 방어 코드 추가)
    tour.setRating(data.get("rating") instanceof Number ? ((Number) data.get("rating")).doubleValue() : 0.0);
    tour.setDays(data.get("days") instanceof Integer ? (Integer) data.get("days") : ((Number) data.get("days")).intValue());
    tour.setHit(data.get("hit") instanceof Integer ? (Integer) data.get("hit") : ((Number) data.get("hit")).intValue());

    tour.setContent((String) data.get("content"));
    tour.setLocation((String) data.get("location"));
    tour.setThumbnail((String) data.get("thumbnail"));
    tour.setTheme((String) data.get("theme"));
    tour.setVideoLink((String) data.get("videoLink"));
    tour.setTDate(new Date());

    // ✅ 부모 엔티티 저장
    Tour savedTour = tourRepository.saveAndFlush(tour);

    if (savedTour.getNum() == null) {
        throw new RuntimeException("Tour 저장 실패: ID가 생성되지 않음");
    }

    // ✅ 이미지 저장
    List<TourImage> tourImages = new ArrayList<>();
    List<Map<String, Object>> imgList = (List<Map<String, Object>>) data.get("images");
    if (imgList != null) {
        for (Map<String, Object> o : imgList) {
            TourImage image = new TourImage();
            image.setImgName((String) o.get("img_name"));
            image.setTour(savedTour);
            tourImages.add(image);
        }
        tourImageRepository.saveAll(tourImages);
    }

    // ✅ 스케줄 저장
    List<TourSchedule> tourSchedules = new ArrayList<>();
    List<Map<String, Object>> scheduleList = (List<Map<String, Object>>) data.get("schedules");
    if (scheduleList != null) {
        for (Map<String, Object> o : scheduleList) {
            TourSchedule schedule = new TourSchedule();
            schedule.setTour(savedTour);
            schedule.setDay(o.get("day") instanceof Integer ? (Integer) o.get("day") : ((Number) o.get("day")).intValue());
            schedule.setContent((String) o.get("content"));
            schedule.setPlace((String) o.get("place"));
            tourSchedules.add(schedule);
        }
        tourScheduleRepository.saveAll(tourSchedules);
    }
}


    // ✅ 특정 투어 조회 (스케줄 & 이미지 포함)
    @Transactional(readOnly = true)
    public Tour getTourDetail(Long tourId) {
        return tourRepository.findById(tourId)
                .orElseThrow(() -> new RuntimeException("Tour not found"));
    }

    // ✅ 모든 투어 조회
    @Transactional(readOnly = true)
    public List<Tour> getAllTours() {
        return tourRepository.findAll();
    }

    // ✅ 특정 투어의 스케줄 조회
    @Transactional(readOnly = true)
    public List<TourSchedule> getTourSchedules(Long tourId) {
        return tourScheduleRepository.findByTour_Num(tourId);
    }

    // ✅ 특정 투어의 이미지 조회
    @Transactional(readOnly = true)
    public List<TourImage> getTourImages(Long tourId) {
        return tourImageRepository.findByTour_Num(tourId);
    }

    // ✅ 투어 삭제 (연관된 스케줄 & 이미지도 함께 삭제)
    @Transactional
    public void deleteTour(Long tourId) {
        Optional<Tour> tourOptional = tourRepository.findById(tourId);
        if (tourOptional.isPresent()) {
            // ✅ 1️⃣ 연관된 스케줄 & 이미지 삭제 최적화
            tourScheduleRepository.deleteAllByTour_Num(tourId);
            tourImageRepository.deleteAllByTour_Num(tourId);

            // ✅ 2️⃣ 투어 삭제
            tourRepository.delete(tourOptional.get());
        } else {
            throw new RuntimeException("Tour not found");
        }
    }

    @Transactional
    public Tour updateTour(Long tourId, Map<String, Object> data) {
    // ✅ 기존 투어 조회
    Tour tour = tourRepository.findById(tourId)
            .orElseThrow(() -> new RuntimeException("Tour not found"));

    // ✅ 값이 있을 경우에만 업데이트
    if (data.containsKey("name")) tour.setName((String) data.get("name"));
    if (data.containsKey("rating")) tour.setRating((Double) data.get("rating"));
    if (data.containsKey("content")) tour.setContent((String) data.get("content"));
    if (data.containsKey("days")) tour.setDays((Integer) data.get("days"));
    if (data.containsKey("location")) tour.setLocation((String) data.get("location"));
    if (data.containsKey("thumbnail")) tour.setThumbnail((String) data.get("thumbnail"));
    if (data.containsKey("hit")) tour.setHit((Integer) data.get("hit"));
    if (data.containsKey("theme")) tour.setTheme((String) data.get("theme"));
    if (data.containsKey("videoLink")) tour.setVideoLink((String) data.get("videoLink"));

    // ✅ 업데이트된 투어 저장
    return tourRepository.save(tour);
}

}
