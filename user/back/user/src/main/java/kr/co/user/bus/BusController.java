package kr.co.user.bus;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
//2025-02-16수정
@RestController
@RequestMapping("/busreservation")
public class BusController {
    
    @Autowired
    private BusService busService;
    
    //버스 예매
    @PostMapping
    public ResponseEntity<Bus> createBus(@RequestBody BusVO vo){
        System.out.println("테스트-------------------------------");
        try {
            Bus createBus = busService.createBus(vo);
            return ResponseEntity.ok().body(createBus);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
        
    }

    //버스 정보
    @GetMapping("/detail")
    public Bus getBusByNum(@RequestParam("num") Long num) {
        return busService.getBusByNum(num);
    }

    //버스 목록 조회(페이징 + 검색 가능)
    // @GetMapping
    
}
 