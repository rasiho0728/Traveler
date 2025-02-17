package kr.co.user.hotel;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
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
@Table(name = "ROOM")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NUM")
    private Long num;

    @Column(name = "HOTELNUM")
    private Long hotelNum;

    @Column(name = "NAME", length = 150)
    private String name;

    @Column(name = "PRICE")
    private Integer price;

    @Column(name = "MAXPERSON")
    private Integer maxPerson;

    @Column(name = "NUMROOMS")
    private Integer numRooms;

    @Column(name = "NUMPERROOMS")
    private Integer numPerRooms;

    @Lob
    @Column(name = "CONTENT")
    private String content;

    @Column(name = "THUMBNAIL", length = 200)
    private String thumbnail;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL)
    private List<RoomImage> images;

}
