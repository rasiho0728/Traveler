package kr.co.user.bus;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//2025-02-16수정 최의진
public interface BusRepository extends JpaRepository<Bus, Long>{
    
    //이름(함수명)으로 규칙 지정
    List<Bus> findAllByOrderByNumDesc();

   
}
