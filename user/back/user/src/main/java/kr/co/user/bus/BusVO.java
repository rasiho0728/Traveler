package kr.co.user.bus;



import java.util.Date;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

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
    
}
