package kr.co.user.hotel;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// 2025-02-16 황보도연 추가
@Service
@Transactional
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    // 호텔 목록 조회 (리스트)
    public List<Hotel> getHotelList() {
        return hotelRepository.findAll();
    }

    public Hotel getHotelByNum(Long num) {
        Hotel hotel = hotelRepository.findById(num)
                .orElseThrow(() -> new RuntimeException("상세보기 실패했습니다."));
        hotel.setHit(hotel.getHit() + 1);
        hotelRepository.save(hotel);
        return hotel;
    }

    public Page<Hotel> getHotelsWithPagination(String searchQuery, int page, int size) {
        int startRow = (page - 1) * size + 1;
        int endRow = startRow + size - 1;

        List<Hotel> entity = hotelRepository.findByNameOrLocationContainingOrderByNumDesc(searchQuery, startRow,
                endRow);

        int totalElements = hotelRepository.countByNameOrLocationContaining(searchQuery);
        return new PageImpl<>(entity, PageRequest.of(page - 1, size), totalElements);
    }
}
