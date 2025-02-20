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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/backpack") // API의 기본 URL 설정
public class BackPackController { // BackPackService로 비즈니스 로직 실행

    @Autowired
    private BackPackService backpapackService;

    private final Path uploadDir = Paths.get("/files/logs") // 디렉토리 생성 -> 업로드된 파일 저장
            .toAbsolutePath().normalize();

    // 생성자(업로드된 디렉토리 생성)
    public BackPackController() {
        try {
            Files.createDirectories(uploadDir);
        } catch (IOException e) {
            throw new RuntimeException("Failed to create upload directory", e);
        }
    }

    @PostMapping // 게시글 작성, 이미지 업로드 - 서버에 이미지 파일 저장, 데이터베이스에 게시글 저장
    public BackPack createBackPack(@ModelAttribute BackPackVO vo) throws IOException {
        List<String> imageNames = new ArrayList<>();
        System.out.println("Logs==========>" + uploadDir);
        // 업로드된 이미지 처리
        if (vo.getImages() != null) {
            for (MultipartFile multipartFile : vo.getImages()) {
                if (!multipartFile.isEmpty()) {
                    String originalFileName = multipartFile.getOriginalFilename();
                    System.out.println(originalFileName);
                    try {
                        // 파일 저장 경로 
                        Path destinationFile = uploadDir.resolve(originalFileName).normalize();
                        Files.copy(multipartFile.getInputStream(), destinationFile);
                    } catch (FileAlreadyExistsException e) {
                        System.out.println("파일이 이미 존재 합니다.");
                    } finally {
                        imageNames.add(originalFileName); // 업로드된 파일 이름 리스트에 추가
                    }
                }
            }
        } else {
            imageNames.add(""); // 이미지가 없으면 빈문자열
        }
        vo.setImgnames(imageNames); // 이미지 파일명 성정 후 게시글 생성
        return backpapackService.createBackPack(vo);
    }

    // 전체 게시글 조회
    @GetMapping("/list")
    public List<BackPack> getAllBackPackList() {
        return backpapackService.getAllBackPackList();
    }

    // 특정 게시글 상세 조회
    @GetMapping("/detail/{num}")
    public BackPack getBackPackByNum(@PathVariable("num") Long num) {
        return backpapackService.getBackPackByNum(num); // 게시글 번호로 조회
    }

    // 게시글 삭제
    @DeleteMapping("/delete/{num}")
    public ResponseEntity<?> deleteBackPack(@PathVariable("num") Long num) {
        backpapackService.delete(num);
        return ResponseEntity.ok().body(num + "번재 데이터 삭제 완료");
    }
}
