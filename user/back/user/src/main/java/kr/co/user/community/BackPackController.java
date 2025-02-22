package kr.co.user.community;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/backpack")
public class BackPackController {

    @Autowired
    private BackPackService backpapackService;

    private final Path uploadDir = Paths.get("/files/logs")
            .toAbsolutePath().normalize();

    public BackPackController() {
        try {
            Files.createDirectories(uploadDir);
        } catch (IOException e) {
            throw new RuntimeException("Failed to create upload directory", e);
        }
    }

    @PostMapping
    public BackPack createBackPack(@ModelAttribute BackPackVO vo) throws IOException {
        List<String> imageNames = new ArrayList<>();
        System.out.println("Logs==========>" + uploadDir);
        if (vo.getImages() != null) {
            for (MultipartFile multipartFile : vo.getImages()) {
                if (!multipartFile.isEmpty()) {
                    String originalFileName = multipartFile.getOriginalFilename();
                    System.out.println(originalFileName);
                    try {
                        Path destinationFile = uploadDir.resolve(originalFileName).normalize();
                        Files.copy(multipartFile.getInputStream(), destinationFile);
                    } catch (FileAlreadyExistsException e) {
                        System.out.println("파일이 이미 존재 합니다.");
                    } finally {
                        imageNames.add(originalFileName);
                    }
                }
            }
        } else {
            imageNames.add("");
        }
        vo.setImgnames(imageNames);
        return backpapackService.createBackPack(vo);
    }

    @GetMapping("/list")
    public List<BackPack> getAllBackPackList() {
        return backpapackService.getAllBackPackList();
    }

    @GetMapping("/detail")
    public BackPack getBackPackByNum(Long num) {
        return backpapackService.getBackPackByNum(num);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteBackPack(Long num) {
        backpapackService.delete(num);
        return ResponseEntity.ok().body(num + "번재 데이터 삭제 완료");
    }
}
