package kr.co.user.chat;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/chat")
public class ChatController {
    private Path uploadPath = Paths.get("./files/logs").toAbsolutePath().normalize();
    
    public ChatController(){
        try {
            Files.createDirectories(uploadPath);
        } catch (Exception e) {
            throw new RuntimeException("Failed to create upload directory", e);
        }
    }
}
