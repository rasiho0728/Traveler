package kr.co.user.chat;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/chat")
public class ChatController {
    private Path uploadPath = Paths.get("./files/logs").toAbsolutePath().normalize();

    public ChatController() {
        try {
            Files.createDirectories(uploadPath);
        } catch (Exception e) {
            throw new RuntimeException("Failed to create upload directory", e);
        }
    }

    @Autowired
    private ChatService chatService;

    @GetMapping("/{username}")
    public List<Chat> getChatLogByMembernum(@PathVariable("username") String username) {
        return chatService.getChatlogs(username);
    }

    @PostMapping("/{username}")
    public String addChating(@PathVariable("username") String username, @RequestParam("chat") String chat) {
        String logFile = "Log_" + username + "_" + String.valueOf(LocalDate.now()).replaceAll("-", "") + ".log";
        String saveMsg = username + "||user||" + chat;
        
        try {
            // 파일 객체 생성
            File file = new File(uploadPath + "/" + logFile);

            // 파일이 존재하지 않으면 새로 생성
            if (!file.exists()) {
                file.createNewFile();
            }

            // FileWriter와 BufferedWriter로 파일에 내용 작성
            FileWriter fw = new FileWriter(file);
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(saveMsg); // 내용 쓰기
            bw.close(); // BufferedWriter 닫기
            System.out.println("파일이 성공적으로 생성되었습니다.");
        } catch (IOException e) {
            e.printStackTrace();
        }

        return chat;
    }

}
