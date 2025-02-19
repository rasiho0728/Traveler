package kr.co.user.bus;

import java.util.Date;
import kr.co.user.member.MemberVO;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
//2025-02-18수정
@Data
@Getter
@Setter
public class BusVO {
    private Long num;
    private String buscode;
    private Date schedule;
    private String departure;
    private String destination;
    private String departureoftime;
    private String destinationoftime;
    private String sitnum;
    private Long member;
    
}
