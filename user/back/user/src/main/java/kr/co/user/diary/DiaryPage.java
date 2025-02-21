package kr.co.user.diary;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
@Entity(name = "diarypage")
// @Table
@SequenceGenerator(name = "diarypage_seq_gen", sequenceName = "diarypage_seq", initialValue = 1, allocationSize = 1)
public class Diarypage {
    @Id
    @GeneratedValue(generator = "diarypage_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long num;

    @Column(name = "PAGE", columnDefinition = "number(2)")
    private Integer page;

    @Column(name = "PTITLE", columnDefinition = "varchar2(150)")
    private String ptitle;

    @Column(name = "CONTENT", columnDefinition = "varchar2(300)")
    private String content;

    @Column(name = "LOCATION", columnDefinition = "varchar2(150)")
    private String location;

    @Column(name = "HAPPY", columnDefinition = "NUMBER(5,2)")
    private Float happy;

    @Column(name = "UPSET", columnDefinition = "NUMBER(5,2)")
    private Float upset;

    @Column(name = "EMBRESSED", columnDefinition = "NUMBER(5,2)")
    private Float embressed;

    @Column(name = "SAD", columnDefinition = "NUMBER(5,2)")
    private Float sad;

    @Column(name = "NEUTRALITY", columnDefinition = "NUMBER(5,2)")
    private Float neutrality;

    @ManyToOne
    @JoinColumn(name = "diarynum", referencedColumnName = "num")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonBackReference // 자식(Diarypage)에서 부모(Diary) 참조 제거 (무한 루프 방지)
    private Diary diary;
}
