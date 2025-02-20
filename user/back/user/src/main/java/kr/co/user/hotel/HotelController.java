package kr.co.user.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

// 2025-02-15 황보도연 추가 
@RestController
@RequestMapping("/api/hotels")
public class HotelController {

    @Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private HotelService hotelService;

    // 특정 호텔을 조회하는 메서드 (디테일)
    @GetMapping("/{num}")
    public Hotel getHotelById(@PathVariable("num") Long num) {
        return hotelRepository.findById(num).orElse(null);
    }

    @GetMapping
    public Page<Hotel> getHotels(
            @RequestParam(name = "searchQuery", defaultValue = "") String searchQuery,
            @RequestParam(name = "page", defaultValue = "1") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        return hotelService.getHotelsWithPagination(searchQuery, page, size);
    }
}
