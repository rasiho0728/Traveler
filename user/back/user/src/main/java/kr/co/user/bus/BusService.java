package kr.co.user.bus;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import org.springframework.stereotype.Service;



import kr.co.user.member.MemberRepository;
import kr.co.user.member.MemberVO;

//2025-02-16수정 최의진
@Service
public class BusService {
    @Autowired
    private BusRepository busRepository;
    @Autowired
    private MemberRepository memberRepository;

    // 버스 내역 리스트
    public List<Bus> getallBusinformation() {
        return busRepository.findAllByOrderByNumDesc();
    }

    // 버스 정보 추가
    public Bus createBus(BusVO vo) {
        Bus businformation = new Bus();
        businformation.setBuscode(vo.getBuscode());
        businformation.setSchedule(new Date());
        businformation.setDeparture(vo.getDeparture());
        businformation.setDestination(vo.getDestination());
        businformation.setDepartureoftime(new Date());
        businformation.setDestinationoftime(new Date());
        businformation.setSitnum(vo.getSitnum());
        MemberVO member = memberRepository.findById(vo.getMember()).get(); // member 받아오기
        businformation.setMember(member);
        // businformation.setSelectedFDate(new Date());
        // businformation.setDepartureTime(new Date());
        // businformation.setArrivalTime(new Date());
        return busRepository.save(businformation);
    }

    public Page<Bus> getBusListWithPagination(String departure, int page, int size) {
        int startRow = (page - 1) * size + 1;
        int endRow = startRow + size - 1;
        System.out.println("startRow" + startRow + ":Page" + page);
        List<Bus> bus = busRepository.findByContentContainingOrderByNumDesc(departure, startRow, endRow);
        int totalElements = busRepository.countByContentContaining(departure);
        return new PageImpl<>(bus, PageRequest.of(page - 1, size), totalElements);
    }

   // 버스 디테일 정보
    public Bus getBusByNum(Long num) {
        Bus bus = busRepository.findById(num)
                .orElseThrow(() -> new RuntimeException("상세보기 실패"));
        busRepository.save(bus);
        return bus;
    }
   
}
    