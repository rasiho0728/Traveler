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
        tour.setNum(2L);
        tour.setName((String) data.get("name"));
        tour.setRating((Integer) data.get("rating"));
        tour.setContent((String) data.get("content"));
        tour.setDays((Integer) data.get("days"));
        tour.setLocation((String) data.get("location"));
        tour.setThumbnail((String) data.get("thumbnail"));
        tour.setHit((Integer) data.get("hit"));
        tour.setTheme((String) data.get("theme"));
        tour.setVideoLink((String) data.get("videoLink"));
        List<TourImage> tourImage = new ArrayList<TourImage>();
        List<Map<String, Object>> imgList = (List<Map<String, Object>>) data.get("images");
        Long count = 1L;
        for (Map<String, Object> o : imgList) {
            TourImage i = new TourImage();
            i.setImgName((String) o.get("img_name"));
            i.setTour(tour);
            i.setTourInfoNum(count);
            count++;
            tourImage.add(i);
        }
        tour.setImages(tourImage);

        List<TourSchedule> tourSchedules = new ArrayList<TourSchedule>();
        List<Map<String, Object>> scheduleList = (List<Map<String, Object>>) data.get("schedules");
        count = 1L;
        for (Map<String, Object> o : scheduleList) {
            TourSchedule i = new TourSchedule();
            i.setNum(0L);
            i.setTour(tour);
            i.setDay((Integer) o.get("day"));
            i.setContent((String) o.get("content"));
            i.setPlace((String) o.get("place"));
            count++;
            tourSchedules.add(i);
        }
        tour.setSchedules(tourSchedules);

        tour.setRecommendedLogs(new ArrayList<TourRecommendedLog>());
        tour.setTDate(new Date());
        
        // 1️⃣ 투어 저장
        Tour savedTour = tourRepository.save(tour);
        
        // // 2️⃣ 투어 스케줄 저장
        // for (TourImage image : tour.getImages()) {
        //     image.setTour(savedTour); // 저장된 투어 ID 할당
        //     tourImageRepository.save(image);
        // }
        
        // // 3️⃣ 스케줄 리스트 저장
        // for (TourSchedule schedule : tour.getSchedules()) {
        //     schedule.setTour(savedTour); // 저장된 투어 ID 할당
        //     tourScheduleRepository.save(schedule);

        // }
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
        return tourScheduleRepository.findByTourNum(tourId);
    }

    // ✅ 특정 투어의 이미지 조회
    @Transactional(readOnly = true)
    public List<TourImage> getTourImages(Long tourId) {
        return tourImageRepository.findByTourNum(tourId);
    }

    // ✅ 투어 삭제 (연관된 스케줄 & 이미지도 함께 삭제)
    @Transactional
    public void deleteTour(Long tourId) {
        Optional<Tour> tourOptional = tourRepository.findById(tourId);
        if (tourOptional.isPresent()) {
            Tour tour = tourOptional.get();

            // 1️⃣ 스케줄 삭제
            tourScheduleRepository.deleteAllByTourNum(tourId);

            // 2️⃣ 이미지 삭제
            tourImageRepository.deleteAllByTourNum(tourId);

            // 3️⃣ 투어 삭제
            tourRepository.delete(tour);
        } else {
            throw new RuntimeException("Tour not found");
        }
    }
}
