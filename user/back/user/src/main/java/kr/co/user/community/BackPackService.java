package kr.co.user.community;

import java.util.Date;
import java.util.List;
// import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
// import org.springframework.transaction.annotation.Transactional;

import kr.co.user.member.MemberRepository;
import kr.co.user.member.MemberVO;

@Service
public class BackPackService {
    @Autowired
    private BackPackRepository backpackRepository;

    @Autowired
    private MemberRepository memberRepository;

    public List<BackPack> getAllBackPackList() {
        return backpackRepository.findAllByOrderByNumDesc();
    }

    public BackPack createBackPack(BackPackVO vo) {
        MemberVO member;
        if (vo.getMember() != null) {
            member = memberRepository.findById(vo.getMember())
                    .orElseThrow(() -> new RuntimeException("Member not found"));
        } else {
            member = memberRepository.findById(1L) // 기본 멤버 (예: 1번 ID)
                    .orElseThrow(() -> new RuntimeException("Default Member not found"));
        }
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
        
        return backpackRepository.save(backpack);
    }

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
