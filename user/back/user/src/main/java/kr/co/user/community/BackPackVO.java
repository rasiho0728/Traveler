package kr.co.user.community;

import java.util.Date;
import java.util.List;
import kr.co.user.member.MemberVO;
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
    private MemberVO member;  
    private List<String> imgNames;  
    private List<MultipartFile> images;
}
