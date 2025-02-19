package kr.co.user.diary;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DairyService {
    
    @Autowired
    private DiaryRepository diaryRepository;

    // 리스트
    public List<Diary> getAllDiary() {
        return diaryRepository.findAllByOrderByNumDesc();
    }
    
    // 디테일
    public Diary getPromoteByNum(Long num) { 
        Diary diary = diaryRepository.findById(num)
                .orElseThrow(() -> new RuntimeException("상세보기에 실패했습니다."));
        diary.setHit(diary.getHit() + 1);
        diaryRepository.save(diary);
        return diary;
    }
}
