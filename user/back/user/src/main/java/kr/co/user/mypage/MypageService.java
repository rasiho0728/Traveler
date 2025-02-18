package kr.co.user.mypage;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import kr.co.user.chat.Chat;

@Service
public class MypageService{
    @Autowired
    private MypageRepository mypageRepository;

    public List<Chat> getChatbotAnswer(String username) {
        List<Chat> chatLogs = mypageRepository.chatbotList(username);
        return chatLogs.size() > 5 ? chatLogs.subList(0, 5) : chatLogs;
    }
}