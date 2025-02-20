package kr.co.user.bus;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import kr.co.user.member.MemberVO;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
//2025-02-18수정 최의진
@Data
@Setter
@Getter
@Entity
@Table(name="bus")
@SequenceGenerator(name = "bus_seq_gen", sequenceName = "bus_seq", initialValue = 1, allocationSize = 1)
public class Bus {

    @Id //프라이머리 key
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "bus_seq")
    private Long num;

    private String buscode;
    private Date schedule;
    private String departure;
    private String destination;

    @Column(name = "departureoftime", columnDefinition = "CHAR(5)")
    private String departureoftime;

    @Column(name = "destinationoftime", columnDefinition = "CHAR(5)")
    private String destinationoftime;

    @Column(name = "sitnum", columnDefinition = "CHAR(2)")
    private String sitnum;

    @ManyToOne
    @JoinColumn(name = "membernum",nullable = false)
    @JsonBackReference
    private MemberVO member;
    
 

}
