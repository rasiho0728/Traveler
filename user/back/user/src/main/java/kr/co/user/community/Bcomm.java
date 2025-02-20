package kr.co.user.community;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import kr.co.user.member.MemberVO;
import lombok.Data;

@Data
@Entity
@SequenceGenerator(name = "bcomm_seq_gen", sequenceName = "bcomm_seq", initialValue = 1, allocationSize = 1)
public class Bcomm {
    @Id // PK
    @GeneratedValue(generator = "bcomm_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long num;
    
    @ManyToOne // N:1 (댓글 : 회원) 
    @JoinColumn(name = "MEMBERNUM", nullable = false) // MEMBERNUM: FK
    private MemberVO member;

    @ManyToOne // N:1 (댓글 : 게시글) 
    @JoinColumn(name = "BACKPACKNUM", nullable = false) // BACKPACKNUM: FK
    private BackPack backpack;

    @ManyToOne // 부모 댓글 (PARENTNUM)과 연결 (N:1 관계) -> 대댓글 기능
    @JoinColumn(name = "PARENTNUM") // PARENTNUM: FK
    private Bcomm parentComment;

    @Column(name = "CONTENT", nullable = false)
    private String content; // 댓글 내용

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "BDATE", columnDefinition = "DATE DEFAULT CURRENT_TIMESTAMP")
    private Date bdate; // 댓글 작성 날짜
}
