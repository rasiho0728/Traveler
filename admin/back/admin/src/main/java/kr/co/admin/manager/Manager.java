package kr.co.admin.manager;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import kr.co.admin.security.Role;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity
@SequenceGenerator(name = "manager_seq_gen", sequenceName = "manager_seq", allocationSize = 1, initialValue = 1)
public class Manager {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "manager_seq_gen")
    private Long num;

    @Column(name = "SABUN", length = 9, nullable = false)
    private Long sabun;

    @Column(name = "PWD", length = 150, nullable = false)
    private String pwd;

    @Column(name = "NAME", length = 50, nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "ROLE", columnDefinition = "varchar2(15) CHECK(ROLE IN ('ADMIN', 'EMPLOYEE', 'MANAGER', 'CEO'))", nullable = false)
    private Role role;

    @Column(name = "MDATE", columnDefinition = "date default sysdate", nullable = false)
    private Date mdate;

    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(
        name = "NOTIFICATION",
        joinColumns = @JoinColumn(name="MANAGERNUM")
    )
    private List<Notification> notifications;

    @OneToOne(mappedBy = "manager", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Loginlog loginlog;
}
