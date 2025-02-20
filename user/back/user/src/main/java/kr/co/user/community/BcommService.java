package kr.co.user.community;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.user.member.MemberRepository;
import kr.co.user.member.MemberVO;

@Service
public class BcommService {
    @Autowired
    private BcommRepository bcommRepository; // 댓글

    @Autowired
    private MemberRepository memberRepository; // 회원정보 조회

    @Autowired
    private BackPackRepository backpackRepository; // 게시글 조회

    // 특정 게시글에 달린 모든 댓글 조회(최신순 정렬) -> backpackNum(게시글 ID)
    public List<Bcomm> getAllBcommBybackpackNum(Long backpackNum) {
        return bcommRepository.findByBackpackNumOrderByBdateDesc(backpackNum);
    }

    public Bcomm createBcomm(BcommVO vo) {
        Bcomm bcomm = new Bcomm(); // 새로운 댓글 객체 생성
        // 댓글을 작성한 회원 정보 조회(없는 회원이면 오류 발생)
        MemberVO member = memberRepository.findById(vo.getMemberNum())
                .orElseThrow(() -> new RuntimeException("해당 회원을 찾을 수 없습니다."));
        bcomm.setMember(member);
        
        // 댓글이 달린 게시글 정보 조회(없는 게시글이면 오류 발생)
        BackPack backpack = backpackRepository.findById(vo.getBackpackNum())
                .orElseThrow(() -> new RuntimeException("해당 게시글을 찾을 수 없습니다."));
        bcomm.setBackpack(backpack);
        // 부모 댓글이 존재하는 경우(대댓글일 경우) 부모 댓글 설정
        if (vo.getParentNum() != null) {
            Bcomm parentComment = bcommRepository.findById(vo.getParentNum())
                 .orElseThrow(() -> new RuntimeException("부모 댓글을 찾을 수 없습니다."));
            bcomm.setParentComment(parentComment);
        } else {
            bcomm.setParentComment(null); // 일반 댓글인 경우 부모 없음(대댓글 없음)
        }
        bcomm.setContent(vo.getContent()); // 댓글 내용 저장
        bcomm.setBdate(new Date()); // 현재 날짜 및 시간 저장

        return bcommRepository.save(bcomm); // 댓글 저장 후 반환
    }


    // public Bcomm createBcomm(BcommVO vo) {
    //     System.out.println("📌 [DEBUG] 받은 데이터: " + vo);
    
    //     Bcomm bcomm = new Bcomm(); // 새로운 댓글 객체 생성
    
    //     // 🔹 회원 정보 조회
    //     System.out.println("🔍 [DEBUG] memberNum: " + vo.getMemberNum());
    //     MemberVO member = memberRepository.findById(vo.getMemberNum())
    //             .orElseThrow(() -> {
    //                 System.out.println("❌ [ERROR] 해당 회원을 찾을 수 없습니다. memberNum: " + vo.getMemberNum());
    //                 return new RuntimeException("해당 회원을 찾을 수 없습니다.");
    //             });
    //     System.out.println("✅ [DEBUG] 회원 조회 성공: " + member.getNum());
    //     bcomm.setMember(member);
    
    //     // 🔹 게시글 정보 조회
    //     System.out.println("🔍 [DEBUG] backpackNum: " + vo.getBackpackNum());
    //     BackPack backpack = backpackRepository.findById(vo.getBackpackNum())
    //             .orElseThrow(() -> {
    //                 System.out.println("❌ [ERROR] 해당 게시글을 찾을 수 없습니다. backpackNum: " + vo.getBackpackNum());
    //                 return new RuntimeException("해당 게시글을 찾을 수 없습니다.");
    //             });
    //     System.out.println("✅ [DEBUG] 게시글 조회 성공: " + backpack.getNum());
    //     bcomm.setBackpack(backpack);
    
    //     // 🔹 부모 댓글이 존재하는 경우(대댓글일 경우) 부모 댓글 설정
    //     if (vo.getParentNum() != null) {
    //         System.out.println("🔍 [DEBUG] parentNum: " + vo.getParentNum());
    //         Bcomm parentComment = bcommRepository.findById(vo.getParentNum())
    //                 .orElseThrow(() -> {
    //                     System.out.println("❌ [ERROR] 부모 댓글을 찾을 수 없습니다. parentNum: " + vo.getParentNum());
    //                     return new RuntimeException("부모 댓글을 찾을 수 없습니다.");
    //                 });
    //         System.out.println("✅ [DEBUG] 부모 댓글 조회 성공: " + parentComment.getNum());
    //         bcomm.setParentComment(parentComment);
    //     } else {
    //         System.out.println("ℹ️ [INFO] 일반 댓글 (부모 댓글 없음)");
    //         bcomm.setParentComment(null); // 일반 댓글인 경우 부모 없음(대댓글 없음)
    //     }
    
    //     // 🔹 기타 필드 설정
    //     System.out.println("📝 [DEBUG] 댓글 내용: " + vo.getContent());
    //     bcomm.setContent(vo.getContent());
    
    //     System.out.println("📆 [DEBUG] 현재 시간 저장");
    //     bcomm.setBdate(new Date()); // 현재 날짜 및 시간 저장
    
    //     System.out.println("🚀 [DEBUG] 댓글 저장 중...");
    //     Bcomm savedBcomm = bcommRepository.save(bcomm);
    //     System.out.println("✅ [DEBUG] 댓글 저장 완료! ID: " + savedBcomm.getNum());
    
    //     return savedBcomm; // 댓글 저장 후 반환
    // }
    


    // 댓글 작성(엔티티 데이터 사용) -> 관리자, 내부 로직에서 사용
    // Bcomm: 엔티티를 그대로 받아와서 댓글을 저장하는 메서드
    public Bcomm createBcomm(Bcomm entity) {
        entity.setBdate(new Date()); // 현재 날짜 및 시간 저장
        return bcommRepository.save(entity); // 댓글 저장 후 반환
    }

    // 특정 게시글의 댓글 개수 조회
    // backpackNum: 해당하는 게시글에 몇 개의 댓글이 있는지 반환
    public long getCommentCount(Long backpackNum) {
        return bcommRepository.countByBackpackNum(backpackNum);
    }

    // 특정 댓글 삭제(댓글ID(num)로 조회 후 삭제)
    public void delete(Long num) {
        // 삭제할 댓글 조회(존재하지 않으면 오류 발생)
        Bcomm bcomm = bcommRepository.findById(num)
                .orElseThrow(() -> new RuntimeException("삭제 실패했습니다."));
        bcommRepository.delete(bcomm); // 댓글 삭제
    }

}
