package kr.co.user.bus;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class BusData {
    private String arrPlaceNm;
    private String arrPlandTime;
    private String depPlaceNm;
    private String depPlandTime;
    private String gradeNm;
    
}
