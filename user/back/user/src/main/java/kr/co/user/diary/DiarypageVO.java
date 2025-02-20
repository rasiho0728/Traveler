package kr.co.user.diary;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class DiarypageVO {
    private Long num;
    private String content;
    private Float embressed;
    private Float happy;
    private String location;
    private Float neutrality;
    private Integer page;
    private String ptitle;
    private Float sad;
    private Float upset;
    private Long diarynum;
}
