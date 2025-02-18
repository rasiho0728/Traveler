package kr.co.user.community;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/backpack")
public class BackPackController {

    @Autowired
    private BackPackService backpapackService;

    // private final Path uploadDir = Paths.get

    @GetMapping("/list")
    public List<BackPack> getAllBackPackList() {
        return backpapackService.getAllBackPackList();
    }

    @GetMapping("/detail")
    public BackPack getBackPackByNum(Long num){
        return backpapackService.getBackPackByNum(num);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteBackPack(Long num){
        backpapackService.delete(num);
        return ResponseEntity.ok().body(num + "번재 데이터 삭제 완료");
    }
}
