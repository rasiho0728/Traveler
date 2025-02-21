package kr.co.user.travelTogether;

import java.util.Date;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class FriendVO {
    private Long num;
    private String userID;
    private String friendID;
    private String acceptOrRefuse;
    private Date fate;
}
