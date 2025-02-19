package kr.co.user.hotel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelReservationRepository extends JpaRepository<HotelReservation, Long> {

}
