package kr.co.user.diary;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import kr.co.user.community.BackPack;
import kr.co.user.member.Member;
import kr.co.user.member.MemberRepository;
import kr.co.user.member.MemberVO;

@Service
public class DairyService {
    
    @Autowired
    private DiaryRepository diaryRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private DiaryPageRepository diarypageRepository;

    private final ObjectMapper objectMapper = new ObjectMapper(); // ObjectMapper 인스턴스

    //업로드
    public void createDiary(Map<String, Object> map) {
        Diary diary = new Diary();
        diary.setTitle((String) map.get("title"));
        diary.setThumbnail((String) map.get("thumbnail"));
        diary.setIsshare((Integer) map.get("isshare"));
        diary.setHit((Integer) map.get("hit"));
        diary.setHeart((Integer) map.get("heart"));
        
        // 날짜 변환 (String → Date)
        diary.setDdate(convertToDate(map.get("ddate")));

         // LinkedHashMap을 MemberVO로 변환
         Map<String, Object> memberMap = (Map<String, Object>) map.get("member");
         MemberVO member = objectMapper.convertValue(memberMap, MemberVO.class);
         
         if (member != null && member.getNum() != null) {
             diary.setMember(member);
         } else {
             throw new RuntimeException("Member 정보가 유효하지 않습니다.");
         }

        // 다이어리 저장
        diaryRepository.save(diary);
    
        // 다이어리 페이지 리스트 처리
        List<Map<String, Object>> diaryPageList = (List<Map<String, Object>>) map.get("diaryPage");
    
        for (Map<String, Object> pageData : diaryPageList) {
            Diarypage diaryPage = new Diarypage();
            diaryPage.setDiary(diary);
            diaryPage.setPage((Integer) pageData.get("page"));
            diaryPage.setPtitle((String) pageData.get("ptitle"));
            diaryPage.setContent((String) pageData.get("content"));
            diaryPage.setLocation((String) pageData.get("location"));
    
            // 감정 값 처리 (null 체크 및 형 변환)
            diaryPage.setHappy(convertToFloat(pageData.get("happy")));
            diaryPage.setUpset(convertToFloat(pageData.get("upset")));
            diaryPage.setEmbressed(convertToFloat(pageData.get("embressed")));
            diaryPage.setSad(convertToFloat(pageData.get("sad")));
            diaryPage.setNeutrality(convertToFloat(pageData.get("neutrality")));
    
            diarypageRepository.save(diaryPage);
        }
    }
    
    // Float 변환 메서드 (null 체크 추가)
    private Float convertToFloat(Object value) {
        if (value instanceof Number) {
            return ((Number) value).floatValue();
        }
        return 0.0f; // 기본값 설정
    }
    

    // 📌 String을 Date로 변환하는 메서드 추가
    private Date convertToDate(Object value) {
        if (value instanceof Date) {
            return (Date) value; // 이미 Date라면 그대로 반환
        } else if (value instanceof String) {
            try {
                SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
                return formatter.parse((String) value);
            } catch (ParseException e) {
                throw new RuntimeException("Invalid date format: " + value);
            }
        }
        return null;
    }

    //삭제
    public void deleteDiary(Long num) {
        // 1️⃣ 다이어리 존재 여부 확인
        Diary diary = diaryRepository.findById(num)
                .orElseThrow(() -> new RuntimeException("Diary not found with ID: " + num));
        // 2️⃣ 다이어리 삭제
        diaryRepository.delete(diary);
    }
    

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
