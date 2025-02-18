package kr.co.user.bus;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//2025-02-16수정 최의진
@Service
public class BusService {
    @Autowired
    private BusRepository busRepository;
    
    //버스 내역 리스트
    public List<Bus> getallBusinformation() {
        return busRepository.findAllByOrderByNumDesc();
    }
    //버스 정보 추가
    public Bus createBus(BusVO vo) {
        Bus businformation = new Bus();
        businformation.setBuscode(vo.getBuscode());
        businformation.setSchedule(new Date());
        businformation.setDeparture(vo.getDeparture());
        businformation.setDestination(vo.getDestination());
        businformation.setDepartureoftime(vo.getDepartureoftime());
        businformation.setDestinationoftime(vo.getDestinationoftime());
        businformation.setSitnum(vo.getSitnum());
        return busRepository.save(businformation);
    }

    //버스 디테일 정보
    public Bus getBusByNum(Long num) {
        Bus bus = busRepository.findById(num)
        .orElseThrow(()-> new RuntimeException("상세보기 실패"));
        busRepository.save(bus);
        return bus;
    }
}
