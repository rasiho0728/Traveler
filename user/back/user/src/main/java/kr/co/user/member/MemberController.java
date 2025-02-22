package kr.co.user.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//2025-02-15 전준영 생성
@RestController
@RequestMapping("/api/member")
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    // 회원 가입
    @PostMapping("/register")
    public ResponseEntity<MemberVO> registerMember(@RequestBody MemberVO memberVO) {
        MemberVO savedMember = memberService.registerMember(memberVO);
        return ResponseEntity.ok(savedMember);
    }

    // 이메일 인증 코드 발송
    @PostMapping("/sendcode")
    public ResponseEntity<Void> sendVerificationCode(@RequestParam String email) {
        memberService.sendVerificationCode(email);
        return ResponseEntity.ok().build();
    }

    // 이메일 인증 처리
    @PostMapping("/verifyemail")
    public ResponseEntity<Void> verifyEmail(@RequestParam String email, @RequestParam String code) {
        memberService.verifyEmail(email, code);
        return ResponseEntity.ok().build();
    }

    // 제휴회사 조회
    @GetMapping("/partner/{businessNumber}")
    public ResponseEntity<MemberVO> getPartnerByBusinessNumber(@PathVariable String businessNumber) {
        MemberVO partner = memberService.getPartnerByBusinessNumber(businessNumber);
        return ResponseEntity.ok(partner);
    }
}
