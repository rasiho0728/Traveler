package kr.co.user.diary;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
@Entity
@Table(name ="diary")
@SequenceGenerator(name = "diary_seq_gen", sequenceName = "diary_seq", initialValue = 1, allocationSize = 1)
public class Diary {
    @Id
    @GeneratedValue(generator = "diary_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long num;

    @Column(name = "TITLE", columnDefinition = "varchar2(150)", nullable = false)
    private String title;

    @Column(name = "THUMBNAIL", columnDefinition = "varchar2(200)", nullable = false)
    private String thumbnail;

    @Column(name = "SHARE", columnDefinition = "number(1)", nullable = false)
    private Integer share;

    @Column(name = "HIT", columnDefinition = "number(7)", nullable = false)
    private Integer hit;

    @Column(name = "HEART", columnDefinition = "number(7)", nullable = false)
    private Integer heart;

    @Column(name = "DDATE", columnDefinition = "date default sysdate", nullable = false)
    private Date ddate;

    @OneToMany(orphanRemoval = true) // Diary 삭제시 연관된 댓글도 함께 삭제
    @JoinColumn(name = "diarynum")
    private List<DiaryPage> diaryPage;
    
    private Integer mambernum;

}
