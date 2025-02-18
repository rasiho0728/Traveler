package kr.co.user.diary;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import kr.co.user.member.Member;
import kr.co.user.member.MemberVO;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
@Entity(name = "diary")
// @Table
@SequenceGenerator(name = "diary_seq_gen", sequenceName = "diary_seq", initialValue = 1, allocationSize = 1)
public class Diary {
    @Id
    @GeneratedValue(generator = "diary_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long num;

    @Column(name = "TITLE", columnDefinition = "varchar2(150)")
    private String title;

    @Column(name = "THUMBNAIL", columnDefinition = "varchar2(200)")
    private String thumbnail;

    @Column(name = "ISSHARE", columnDefinition = "number(1)")
    private Integer isshare;

    @Column(name = "HIT", columnDefinition = "number(7)")
    private Integer hit;

    @Column(name = "HEART", columnDefinition = "number(7)")
    private Integer heart;

    @Column(name = "DDATE", columnDefinition = "date default sysdate")
    private Date ddate;

    @OneToMany(mappedBy = "diary", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Diarypage> diaryPage;

    @ManyToOne
    @JoinColumn(name = "mambernum", referencedColumnName = "num")
    private MemberVO membernum;
}
