package kr.co.user.hotel;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// 2025-02-15 황보도연 추가 
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ROOMIMAGE")
public class RoomImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ROOMNUM") 
    private Long roomNum;

    @Column(name = "IMGNAME", length = 200)
    private String imgName;

    @ManyToOne 
    @JoinColumn(name = "ROOMNUM",insertable=false, updatable=false) 
    @JoinColumn(name = "num") 
    private Room room;

}
