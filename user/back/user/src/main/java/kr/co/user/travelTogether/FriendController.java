package kr.co.user.travelTogether;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.co.user.member.MemberRepository;
import kr.co.user.member.MemberVO;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/travelTogether")
@RequiredArgsConstructor
public class FriendController {
    @Autowired
    private FriendService friendService;

    @Autowired
    private MemberRepository memberRepository;

    // 친구요청 보내기 메서드
    @PostMapping("/send-request")
    public ResponseEntity<String> sendFriendRequest(
            @RequestParam("userID") String userID,
            @RequestParam("email") String email) { // @RequestParam의 값을 명확하게 지정

        friendService.sendFriendRequest(userID, email);
        return ResponseEntity.ok("친구 요청이 전송되었습니다.");
    }

    @GetMapping("/search")
    public ResponseEntity<Map<String,String>> searchUserByEmail(@RequestParam("email") String email) {
        return memberRepository.findByEmail(email)
                .map(member -> ResponseEntity.ok(Collections.singletonMap("name", member.getName())))
                .orElse(ResponseEntity.notFound().build());
    }
}
