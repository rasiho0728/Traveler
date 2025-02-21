package kr.co.user.community;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import kr.co.user.member.MemberRepository;
import kr.co.user.member.MemberVO;

@Service
public class BackPackService { 
    @Autowired
    private BackPackRepository backpackRepository;

    @Autowired
    private MemberRepository memberRepository; // 회원정보 조회

    public List<BackPack> getAllBackPackList() {
        return backpackRepository.findAllByOrderByNumDesc(); // 전체 게시글 목록 조회(최신순)
    }

        public Page<BackPack> getBackPackListWithPagination(String title, int page, int size) {
        // startRow와 endRow 계산
        int startRow = (page - 1) * size + 1; // 페이지의 첫 번째 데이터 위치
        int endRow = startRow + size - 1; // 페이지의 마지막 데이터 위치
        System.out.println("시작과 끝=====>" + startRow + "/" + endRow);
        // 데이터베이스에서 검색된 리스트 가져오기 (해당 페이지의 데이터만 조회)
        List<BackPack> entity = backpackRepository.findByTitleContainingOrderByNumDesc(title, startRow, endRow);
        System.out.println("리스트 사이즈 : " + entity.size());
        // 전체 검색 결과 개수 가져오기 (페이지네이션을 위해 필요)
        int totalElements = backpackRepository.countByTitleContaining(title);

        // PageImpl을 사용하여 Page 객체로 반환
        return new PageImpl<>(entity, PageRequest.of(page - 1, size), totalElements);
    }

    public BackPack createBackPack(BackPackVO vo) { // 새로운 게시글 생성
        MemberVO member;
        if (vo.getMember() != null) {
             // 회원 ID가 있으면 해당 회원을 조회
            member = memberRepository.findById(vo.getMember())
                    .orElseThrow(() -> new RuntimeException("해당 회원을 찾을 수 없습니다."));
        } else {
            // 회원 ID가 없으면 기본 멤버(1번 ID) 사용
            member = memberRepository.findById(1L) // 기본 멤버 (예: 1번 ID)
                    .orElseThrow(() -> new RuntimeException("기본 회원을 찾을 수 없습니다."));
        }
        // BackPack 엔티티 생성, 데이터 설정
        BackPack backpack = new BackPack();
        backpack.setTitle(vo.getTitle());
        backpack.setContent(vo.getContent());
        backpack.setHit(0L);
        backpack.setHeart(0L);
        backpack.setCdate(new Date());
        backpack.setRoomNum(vo.getRoomNum());
        backpack.setMember(member);
        backpack.setImgNames(vo.getImgnames());
        backpack.setTags(vo.getTags());
        
        return backpackRepository.save(backpack); // 저장 후 반환
    }
    // 게시글 수정
    public BackPack updateBackPack(BackPack vo) {
        BackPack backpack = getBackPackByNum(vo.getNum()); // 기존 게시글 조회(X 예외)
        backpack.setTitle(vo.getTitle()); // 제목 수정
        backpack.setContent(vo.getContent()); // 내용 수정
        return backpackRepository.save(backpack); // 수정된 데이터 저장
    }

    // 특정 게시글 상세 조회
    public BackPack getBackPackByNum(Long num) { 
        BackPack backpack = backpackRepository.findById(num) // 기존 게시글 조회(X 예외)
                .orElseThrow(() -> new RuntimeException("상세보기에 실패했습니다."));
        backpack.setHit(backpack.getHit() + 1); // 조회수 증가
        return backpackRepository.save(backpack); // 업데이트된 데이터 저장 후 반환
    }

    // 게시글 삭제(게시글 번호(num)로 조회 후 삭제)
    public void delete(Long num) {
        BackPack backpack = backpackRepository.findById(num) // 기존 게시글 조회(X 예외)
                .orElseThrow(() -> new RuntimeException("삭제 실패했습니다."));
        backpackRepository.delete(backpack); 
    }

}
