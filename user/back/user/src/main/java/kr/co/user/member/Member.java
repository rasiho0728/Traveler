package kr.co.user.member;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import kr.co.user.security.Role;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity
@SequenceGenerator(name = "member_seq_gen", sequenceName = "member_seq", initialValue = 1, allocationSize = 1)
public class Member {
    @Id
    @OneToMany
    @JoinColumn(name = "mambernum")
    @GeneratedValue(generator = "member_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long num;

    @Column(name = "USERNAME", columnDefinition = "varchar2(15)", nullable = false, unique = true)
    private String userName;

    @Column(name = "PWD", columnDefinition = "varchar2(150)", nullable = false)
    private String pwd;

    @Column(name = "NAME", columnDefinition = "varchar2(50)", nullable = false)
    private String name;

    @Column(name = "CODE", columnDefinition = "varchar2(10)", nullable = false)
    private String code;

    @Column(name = "PHONE", columnDefinition = "varchar2(13)", nullable = false)
    private String phone;

    @Column(name = "EMAIL", columnDefinition = "varchar2(50)", nullable = false, unique = true)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(name = "ROLE", columnDefinition = "varchar2(15) CHECK(ROLE IN ('ADMIN','USER','COALITION'))")
    private Role role;

    @Column(name = "SOCIALUSER", columnDefinition = "number(1)", nullable = false)
    private Long socialuser;

    @Column(name = "COMPANY", columnDefinition = "number(1)", nullable = false)
    private Long company;

    @Column(name = "MDATE", columnDefinition = "date default sysdate", nullable = false)
    private Date mdate; 
}
