package kr.co.user.community;

import java.util.Date;
import java.util.List;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class BcommVO {
    private Long num; // PK
    private Long memberNum; // 작성자 (회원 ID)
    private Long backpackNum; // 댓글이 속한 게시글 ID
    private Long parentNum; // 부모 댓글 ID (NULL이면 일반 댓글, 값이 있으면 대댓글)
    private String content; // 댓글 내용
    private Date bdate; // 댓글 작성 날짜
    private List<BcommVO> replies; // 대댓글 목록 (프론트엔드에서 계층 구조로 보여주기 위해 사용)
}
