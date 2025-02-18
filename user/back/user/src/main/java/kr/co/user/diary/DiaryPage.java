package kr.co.user.diary;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
@Entity
@Table(name = "diaryPage")
@SequenceGenerator(name = "diarypage_seq_gen", sequenceName = "diarypage_seq", initialValue = 1, allocationSize = 1)
public class DiaryPage {
    @Id
    @GeneratedValue(generator = "diarypage_seq_gen", strategy = GenerationType.SEQUENCE)
    private Integer page;

    @Column(name = "PTITLE", columnDefinition = "varchar2(150)", nullable = false)
    private String ptitle;

    @Column(name = "CONTENT", columnDefinition = "varchar2(300)", nullable = false)
    private String content;

    @Column(name = "LOCATION", columnDefinition = "varchar2(150)", nullable = false)
    private String location;

    @Column(name = "HAPPY", columnDefinition = "FLOAT(5,2)", nullable = false)
    private Float happy;

    @Column(name = "UPSET", columnDefinition = "FLOAT(5,2)", nullable = false)
    private Float upset;

    @Column(name = "EMBRESSED", columnDefinition = "FLOAT(5,2)", nullable = false)
    private Float embressed;

    @Column(name = "SAD", columnDefinition = "FLOAT(5,2)", nullable = false)
    private Float sad;

    @Column(name = "NEUTRALITY", columnDefinition = "FLOAT(5,2)", nullable = false)
    private Float neutrality;

    @ManyToOne
    @JoinColumn(name = "diarynum", referencedColumnName = "num")
    private Diary diary;
}
