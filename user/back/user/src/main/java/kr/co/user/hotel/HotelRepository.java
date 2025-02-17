package kr.co.user.hotel;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

// 2025-02-15 황보도연 추가 
public interface HotelRepository extends JpaRepository<Hotel, Long> {
    
    List<Hotel> findByLocation(String location); 
}