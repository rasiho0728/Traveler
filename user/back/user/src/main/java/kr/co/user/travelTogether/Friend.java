package kr.co.user.travelTogether;

import java.util.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity
@Table(name = "FRIEND")
public class Friend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long num;

    @Column(name = "userID", columnDefinition = "varchar2(50)")
    private String userID;

    @Column(name = "friendID", columnDefinition = "varchar2(50)")
    private String friendID;

    @Column(name = "Acceptorrefuse", columnDefinition = "varchar2(50)")
    private String acceptOrRefuse;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "Fdate", nullable = false, updatable = false)
    private Date fate;
}
