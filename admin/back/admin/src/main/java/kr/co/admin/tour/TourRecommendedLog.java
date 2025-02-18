package kr.co.admin.tour;

import jakarta.persistence.*;
import kr.co.admin.member.Member;
import kr.co.admin.member.MemberVO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "TOURRECOMMENDEDLOG")
@Getter
@Setter
@NoArgsConstructor
public class TourRecommendedLog {

    @Id
    @Column(name = "NUM") // 기존 NUM을 PK로 사용
    private Long num;

    @ManyToOne
    @JoinColumn(name = "TOURNUM", nullable = false)
    private Tour tour;

    @ManyToOne
    @JoinColumn(name = "MEMBERNUM", nullable = false)
    private MemberVO member;

    @Column(name = "THEME", length = 100)
    private String theme;

    @Column(name = "FEEDBACK")
    private Integer feedback;

    @Column(name = "REPLY", length = 300)
    private String reply;

    @Column(name = "RDATE")
    @Temporal(TemporalType.DATE)
    private Date rDate;
}
