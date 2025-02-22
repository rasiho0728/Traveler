package kr.co.user.community;

import java.util.Date;
import java.util.List;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import org.springframework.web.multipart.MultipartFile;

 @Data
 @Setter
 @Getter
public class BackPackVO {
    private Long num;
    private String title;
    private String content;
    private Date cdate;
    private Long hit;
    private Long heart;  
    private Long member;
    private Long roomNum;  
    private List<String> imgnames;  
    private List<MultipartFile> images;
    private List<String> tags;
}
