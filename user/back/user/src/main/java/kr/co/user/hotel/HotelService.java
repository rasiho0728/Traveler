package kr.co.user.hotel;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// 2025-02-16 황보도연 추가
@Service
@Transactional
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    // 호텔 목록 조회
    public List<Hotel> getHotelList() {
        return hotelRepository.findAll();
    }

    // 특정 호텔 정보 조회
    public Hotel getHotelById(Long id) {
        return hotelRepository.findById(id).orElse(null);
    }

}
