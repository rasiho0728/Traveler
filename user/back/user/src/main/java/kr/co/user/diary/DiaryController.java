package kr.co.user.diary;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/diary")
public class DiaryController {
    @Autowired
    private DairyService dairyService;

    @GetMapping("list")
    public List<Diary> getAllDiary() {
        return dairyService.getAllDiary();
    }

    

}
