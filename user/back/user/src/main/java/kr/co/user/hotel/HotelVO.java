package kr.co.user.hotel;

import java.util.Date;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
public class HotelVO {
    private Long num;
    private String name;
    private Integer rating;
    private String location;
    private String thumbnail;
    private Integer hit;
    private Date hdate;
    private List<MultipartFile> images; // 업로드하는 파일 처리
    private List<String> imgNames; // DB에서 자뎌온 이미지 파일 이름 관리
}
