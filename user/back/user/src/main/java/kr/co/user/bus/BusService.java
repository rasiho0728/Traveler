package kr.co.user.bus;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import kr.co.user.member.Member;
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
        businformation.setDepartureoftime(vo.getDepartureoftime());
        businformation.setDestinationoftime(vo.getDestinationoftime());
        businformation.setSitnum(vo.getSitnum());
        MemberVO member = memberRepository.findById(vo.getMember()).get(); // member 받아오기
        businformation.setMember(member);
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
    // @Value("${external.api.url}")
    // private String externalApiUrl;
    
    // @Value("${external.api.key}")
    // private String apiKey;
    
    // @Value("${external.api.pageNo}")
    // private String pageNo;
    
    // @Value("${external.api.numOfRows}")
    // private String numOfRows;
    
    // @Value("${external.api.depTerminalId}")
    // private String depTerminalId;
    
    // @Value("${external.api.arrTerminalId}")
    // private String arrTerminalId;
    
    // @Value("${external.api.depPlandTime}")
    // private String depPlandTime;
    
    // @Value("${external.api.busGradeId}")
    // private String busGradeId;
    
    
    // private final RestTemplate restTemplate = new RestTemplate();
    
    // // 외부 API에서 데이터를 가져오는 메서드
    // public List<Bus> fetchExternalBusData() throws Exception {
    //     // 외부 API의 실제 URL과 서비스 키 및 파라미터를 사용해야 합니다.
    //     String url = externalApiUrl + "?serviceKey=YOUR_SERVICE_KEY&depTerminalId=NAEK010&arrTerminalId=NAEK700&depPlandTime=20250219&busGradeId=1";
    
    //     try {
    //         // API 호출
    //         ResponseEntity<BusResponse> response = restTemplate.exchange(url, HttpMethod.GET, null, BusResponse.class);
    
    //         // 외부 API에서 받은 데이터 (BusData 리스트)
    //         List<BusData> busDataList = response.getBody().getData(); // 외부 API에서 받은 데이터 처리
    
    //         // BusData에서 Bus 객체로 변환
    //         List<Bus> buses = new ArrayList<>();
    //         for (BusData busData : busDataList) {
    //             Bus bus = new Bus();
    //             bus.setArrPlandTime(new Date());
    //             bus.setDepPlandTime(new Date());

                
    //             // 변환된 Bus 객체를 리스트에 추가
    //             buses.add(bus);
    //         }
    
    //         // 받아온 데이터를 DB에 저장하는 로직
    //         busRepository.saveAll(buses); // DB에 저장
    
    //         return buses;  // DB에 저장된 Bus 리스트 반환
    //     } catch (RestClientException e) {
    //         throw new Exception("Failed to fetch data from external API", e);
    //     }
    // }
}
    