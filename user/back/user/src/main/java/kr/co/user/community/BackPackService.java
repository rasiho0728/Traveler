package kr.co.user.community;

import java.util.List;
// import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BackPackService {
    @Autowired
    private BackPackRepository backpackRepository;

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

    // public Optional<BackPack> getBackPackByNum(Long num) {
    //     return backPackRepository.findById(num);
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
