package kr.co.user.community;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import kr.co.user.member.MemberVO;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity
@SequenceGenerator(name = "backpack_seq_gen", sequenceName = "backpack_seq", initialValue = 1, allocationSize = 1)
public class BackPack {
    @Id
    @GeneratedValue(generator = "backpack_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long num;

    @ManyToOne
    @JoinColumn(name = "MEMBERNUM", nullable = false)
    private MemberVO member;

    @Column(name = "ROOMNUM", columnDefinition = "number(10)", nullable = false)
    private Long roomNum;

    @Column(name = "TITLE", columnDefinition = "varchar2(50)", nullable = false)
    private String title;

    @Lob
    @Column(name = "CONTENT", columnDefinition = "clob", nullable = false)
    private String content;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date cdate;

    @Column(name = "HIT", columnDefinition = "number(7) default 0", nullable = false)
    private Long hit;

    @Column(name = "HEART", columnDefinition = "number(7) default 0", nullable = false)
    private Long heart;
}
