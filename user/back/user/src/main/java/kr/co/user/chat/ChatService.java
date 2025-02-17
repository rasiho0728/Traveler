package kr.co.user.chat;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatService {
    @Autowired
    private ChatRepository chatRepository;

    public List<Chat> getChatlogs(String username) {
        return chatRepository.getChatLogs(username);
    }
}
