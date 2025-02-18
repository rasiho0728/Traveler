package kr.co.user.mypage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.user.chat.Chat;
import kr.co.user.member.MemberVO;

@RestController
@RequestMapping("/api/mypage")
public class MypageController {
    @Autowired
    private MypageService mypageService;

    // 사용자 정보 조회 API
    @GetMapping("/{username}")
    public MemberVO getUserInfo(@PathVariable("username") String username) {
        return mypageService.getUser(username);
    }

    // 사용자 수정
    @PutMapping("/{username}")
    public String updateUserInfo(@PathVariable("username") String username, @RequestBody MemberVO updatedUser) {
        mypageService.updateUserInfo(
            username, 
            updatedUser.getName(), 
            updatedUser.getPhone(), 
            updatedUser.getEmail(), 
            updatedUser.getIntro()
        );
        return "회원정보 수정 성공";
    }

    // 챗봇과 대화한 기록 조회 API
    @GetMapping("/chatbotList/{username}")
    public List<Chat> getRecentChatbotChats(@PathVariable("username") String username) {
        return mypageService.getRecentChatbotChats(username);
    }

    // 관리자와 대화한 기록 조회 API
    @GetMapping("/adminChatList/{username}")
    public List<Chat> getRecentAdminChats(@PathVariable("username") String username) {
        return mypageService.getRecentAdminChats(username);
    }
}
