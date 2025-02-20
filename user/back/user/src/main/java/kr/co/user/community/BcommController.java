package kr.co.user.community;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/bcomm")
public class BcommController {
    @Autowired
    private BcommService bcommService;

    @PostMapping("/vo")
    public ResponseEntity<?> createBcommFromVO(@RequestBody BcommVO vo){
        try {
            return ResponseEntity.ok(bcommService.createBcomm(vo));
        } catch (Exception e) {
           System.out.println("댓글 생성 중 오류가 발생했습니다." + vo);
           return ResponseEntity.badRequest().body("댓글을 생성하는 데 실패했습니다.");
        }
    }

    @PostMapping
    public Bcomm createBcomm(@RequestBody Bcomm entity) {
        return bcommService.createBcomm(entity);
    }

    @GetMapping("/list/{backpackNum}")
    public ResponseEntity<?> getAllBcommByBackpackNum(@PathVariable("backpackNum") Long backpackNum) {
        try {
            return ResponseEntity.ok(bcommService.getAllBcommBybackpackNum(backpackNum));
        } catch (Exception e) {
            System.out.println("댓글 조회 중 오류 발생했습니다: " + backpackNum);
            return ResponseEntity.badRequest().body("댓글을 가져오는 데 실패했습니다.");
        }
    }

    @GetMapping("/count/{backpackNum}")
    public ResponseEntity<?> getCommentCount(@PathVariable("backpackNum") Long backpackNum) {
        try {
            long count = bcommService.getCommentCount(backpackNum);
            return ResponseEntity.ok(count);
        } catch (Exception e) {
            System.out.println("backpackNum에 대한 댓글 수를 가져오는 중 오류가 발생했습니다: " + backpackNum);
            e.printStackTrace();
            return ResponseEntity.badRequest().body("잘못된 요청이거나 backpackNum을 찾을 수 없습니다.");
        }
    }

    @DeleteMapping("/delete/{num}")
    public ResponseEntity<?> deleteBcomm(@PathVariable("num") Long num) {
        bcommService.delete(num);
        return ResponseEntity.ok().body(num + "번째 데이터 삭제 완료");
    }
}
