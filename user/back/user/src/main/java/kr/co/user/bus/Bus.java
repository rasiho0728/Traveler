package kr.co.user.bus;


import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
@Entity
@SequenceGenerator(name="busreservation_seq_gen",sequenceName = "busreservation_seq_gen",initialValue = 1 , allocationSize = 1)
public class Bus {
    
    @Id //프라이머리 key
    @GeneratedValue(strategy =GenerationType.SEQUENCE,generator = "busreservation_seq_gen")
    private Long num;

    private String buscode;
    private Date date;
    private String departure;
    private String destination;

    @Column(name="departure_of_time", columnDefinition = "CHAR(5)")
    private String departure_of_time;

    @Column(name="destination_of_time", columnDefinition = "CHAR(5)")
    private String destination_of_time;

    @Column(name="sitnum", columnDefinition = "CHAR(2)")
    private String sitnum;
    
}
