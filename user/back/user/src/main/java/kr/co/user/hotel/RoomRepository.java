package kr.co.user.hotel;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {

    // List<Room> findByLocation(String location);
}
