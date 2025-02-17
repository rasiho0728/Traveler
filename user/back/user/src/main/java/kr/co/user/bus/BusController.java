package kr.co.user.bus;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
//2025-02-16수정
@RestController
@RequestMapping("/api/bus")
public class BusController {
    
    @Autowired
    private BusService busService;
    
    //버스 예매
    @PostMapping
    public ResponseEntity<?> createBus(BusVO vo) throws IOException {
        Bus createBus = busService.createBus(vo);
        return ResponseEntity.ok().body(createBus);
    }

    //버스 정보
    @GetMapping("/detail")
    public Bus getBusByNum(@RequestParam("num") Long num) {
        return busService.getBusByNum(num);
    }

    //버스 목록 조회(페이징 + 검색 가능)
    // @GetMapping
    // public 
}
 