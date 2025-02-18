package kr.co.user.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// 2025-02-15 황보도연 추가 
@RestController
@RequestMapping("/api/hotels")
public class HotelController {

    @Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private HotelImageRepository hotelImageRepository;

    // 모든 호텔을 조회하는 메서드
    @GetMapping
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    // ID로 특정 호텔을 조회하는 메서드
    @GetMapping("{num}")
    public Hotel getHotelById(@PathVariable("num") Long num) {
        // System.out.println("-----------------------------------");
        return hotelRepository.findById(num).orElse(null);
    }

    // 위치(location)에 해당하는 호텔들을 조회하는 메서드
    // @GetMapping("/location/{location}")
    // public List<Hotel> getHotelsByLocation(@PathVariable String location) {
    // return hotelRepository.findByLocation(location);
    // }

    // 특정 호텔 번호에 해당하는 호텔 이미지를 조회하는 메서드
    @GetMapping("/{hotelNum}/images")
    public List<HotelImage> getHotelImages(@PathVariable Long hotelNum) {
        // 주어진 호텔 번호에 해당하는 이미지를 조회하여 반환
        return hotelImageRepository.findByHotelNum(hotelNum);
    }

    // 게시글 페이징 처리된 목록 조회
    @GetMapping("/search")
    public Page<Hotel> getHotels(
            @RequestParam(name = "name", defaultValue = "") String name,
            @RequestParam(name = "page", defaultValue = "1") int page, // 기본값 0, 페이지 번호
            @RequestParam(name = "size", defaultValue = "5") int size // 기본값 5, 페이지 크기
    ) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return hotelRepository.findByNameContainingOrderByNumDesc(name, pageable);
    }

}
