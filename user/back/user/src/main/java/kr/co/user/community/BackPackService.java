package kr.co.user.community;

import java.util.List;
// import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.user.member.MemberRepository;
import kr.co.user.member.MemberVO;

@Service
public class BackPackService {
    @Autowired
    private BackPackRepository backpackRepository;

    @Autowired
    // private MemberRepository memberRepository;

    public List<BackPack> getAllBackPackList(){
        return backpackRepository.findAllByOrderByNumDesc();
    }    

    public BackPack createBackPack(BackPackVO vo){


        BackPack backpack = new BackPack();
        backpack.setTitle(vo.getTitle());
        backpack.setContent(vo.getContent());
        backpack.setHit(0L);
        backpack.setHeart(0L); 

        if (vo.getMember() != null) {
            backpack.setMember(vo.getMember());
        }
        return backpackRepository.save(backpack);
    }


    // public BackPack createBackPack(BackPackVO vo) {
    //     // 1. MemberVO에서 Member 엔티티를 가져오기 위해 MemberNum을 기반으로 Member 조회
    //     MemberVO member = memberRepository.findById(vo.getMember().getNum())
    //             .orElseThrow(() -> new RuntimeException("Member not found"));
    //     // 2. BackPack 객체 생성
    //     BackPack backpack = new BackPack();
    //     backpack.setTitle(vo.getTitle());
    //     backpack.setContent(vo.getContent());
    //     backpack.setHit(0L);
    //     backpack.setHeart(0L);
    //     // 3. 조회된 Member 객체를 BackPack에 설정
    //     backpack.setMember(member);
    //     // 4. BackPack 저장
    //     return backpackRepository.save(backpack);
    // }

    
    // public BackPack createBackPack(BackPackVO vo) {
    //     // 만약 member가 null일 경우, 기본값 설정 (ex) 기본 member 객체 생성)
    //     if (vo.getMember() == null) {
    //         MemberVO defaultMember = new MemberVO(); // 기본 member 객체 생성
    //         vo.setMember(defaultMember); // 기본값 설정
    //     }
    //     BackPack backpack = new BackPack();
    //     backpack.setTitle(vo.getTitle());
    //     backpack.setContent(vo.getContent());
    //     backpack.setHit(0L);
    //     backpack.setHeart(0L);
    //     backpack.setMember(vo.getMember());
    //     return backpackRepository.save(backpack);
    // }

    public BackPack updateBackPack(BackPack vo) {
        BackPack backpack = getBackPackByNum(vo.getNum());
        backpack.setTitle(vo.getTitle());
        backpack.setContent(vo.getContent());
        return backpackRepository.save(backpack);
    }
    
    public BackPack getBackPackByNum(Long num) {
        BackPack backpack = backpackRepository.findById(num)
        .orElseThrow(() -> new RuntimeException("상세보기에 실패했습니다."));
        backpack.setHit(backpack.getHit() + 1);
        return backpackRepository.save(backpack);
    }
    
    public void delete(Long num) {
        BackPack backpack = backpackRepository.findById(num)
                .orElseThrow(() -> new RuntimeException("삭제 실패했습니다."));
                backpackRepository.delete(backpack);
    }

}
