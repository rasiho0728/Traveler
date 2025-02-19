package kr.co.user.bus;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

//2025-02-16수정
@RestController
@RequestMapping("/api/busreservation")
@RequiredArgsConstructor
public class BusController {

    @Autowired
    private BusService busService;

    // 외부 API에서 버스 예약 정보 가져오기
    // @GetMapping("/fetch-external")
    // public ResponseEntity<List<Bus>> fetchExternalBusData() {
    //     try {
    //         List<Bus> buses = busService.fetchExternalBusData();
    //         return ResponseEntity.ok(buses);
    //     } catch (Exception e) {
    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
    //                 .body(null);
    //     }
    // }

    // 버스 예매
    @PostMapping
    public ResponseEntity<Bus> createBus(@RequestBody BusVO vo) {
        System.out.println("테스트-------------------------------" + vo);
        try {
            Bus createBus = busService.createBus(vo);
            return ResponseEntity.ok().body(createBus);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }

    }

    // 버스 목록
    @GetMapping
    public Page<Bus> getallBus(
            @RequestParam(name = "departure", defaultValue = "") String departure,
            @RequestParam(name = "page", defaultValue = "1") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        return busService.getBusListWithPagination(departure, page, size);
    }

    // 버스 정보
    @GetMapping("/detail")
    public Bus getBusByNum(@RequestParam("num") Long num) {
        return busService.getBusByNum(num);
    }

    // 버스 목록 조회(페이징 + 검색 가능)
    // @GetMapping

}
