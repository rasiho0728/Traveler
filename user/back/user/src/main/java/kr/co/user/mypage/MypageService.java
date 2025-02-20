package kr.co.user.mypage;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.user.chat.Chat;
import kr.co.user.member.MemberVO;

@Service
public class MypageService{
    @Autowired
    private MypageRepository mypageRepository;

    // 사용자 정보 조회
    public MemberVO getUser(String username) {
        return mypageRepository.findUserByUsername(username);
    }

    // 사용자 정보 수정
    @Transactional
    public void updateUserInfo(String username, String name, String phone, String email, String intro) {
        MemberVO member = mypageRepository.findUserByUsername(username);
        if (member != null) {
            member.setName(name);
            member.setPhone(phone);
            member.setEmail(email);
            member.setIntro(intro);
            mypageRepository.save(member);
        } else {
            throw new RuntimeException("존재하는 회원이 아님");
        }
    }

    // 챗봇과의 최신 5개 대화 가져오기
    public List<Chat> getRecentChatbotChats(String username) {
        List<Chat> chatLogs = mypageRepository.chatbotList(username);
        return chatLogs.size() > 5 ? chatLogs.subList(0, 5) : chatLogs;
    }

    // 관리자(직원)과의 최신 5개 대화 가져오기
    public List<Chat> getRecentAdminChats(String username) {
        List<Chat> chatLogs = mypageRepository.adminChatList(username);
        return chatLogs.size() > 5 ? chatLogs.subList(0, 5) : chatLogs;
    }

    public List<String> getRecentBackPack(String username) {
        List<String> titles = mypageRepository.findRecentBackPack(username);
        return titles.size() > 3 ? titles.subList(0, 3) : titles;
    }
    
}