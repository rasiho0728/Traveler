package kr.co.user.diary;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/diary")
@RequiredArgsConstructor
public class DiaryController {
    @Autowired
    private DairyService dairyService;

    //리스트 조회
    @GetMapping("/list")
    public List<Diary> getAllDiary() {
        return dairyService.getAllDiary();
    }

    // 다이어리 업로드
    @PostMapping("/create")
    public ResponseEntity<String> createDiary(@RequestBody Map<String, Object> diaryData) {
        try {
            dairyService.createDiary(diaryData);
            return ResponseEntity.ok("다이어리가 성공적으로 저장되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body("다이어리 저장 중 오류 발생: " + e.getMessage());
        }
    }

    //다이어리 삭제
    @DeleteMapping("/delete/{num}")
    public ResponseEntity<String> deleteDiary(@PathVariable("num") Long num) {
            dairyService.deleteDiary(num);
            return ResponseEntity.ok("다이어리가 성공적으로 삭제되었습니다.");
    }

    // 다이어리 조회
    @GetMapping("/detail/{num}")
    public ResponseEntity<Diary> getDiaryPages(@PathVariable("num") Long num) {
        Diary diary = dairyService.getDiaryPages(num);
        return ResponseEntity.ok(diary);
    }

    
     //특정 다이어리의 페이지 목록 조회
     @GetMapping("/{num}/pages")
     public ResponseEntity<List<Diarypage>> getDiaryPagesDetail(@PathVariable("num") Long num) {
         List<Diarypage> diaryPages = dairyService.getDiaryPagesDetail(num);
         return ResponseEntity.ok(diaryPages);
     }
    

     // 최신 9개 다이어리 가져오기
    @GetMapping("/latest")
    public ResponseEntity<List<Diary>> getLatestDiaries() {
        List<Diary> latestDiaries = dairyService.getLatestDiaries();
        return ResponseEntity.ok(latestDiaries);
    }
}
