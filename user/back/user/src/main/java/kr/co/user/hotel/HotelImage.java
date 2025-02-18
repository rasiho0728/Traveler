package kr.co.user.hotel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
// 2025-02-15 황보도연 추가 
@Entity
@Table(name = "HOTELIMAGE")
public class HotelImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "HOTELNUM") 
    private Long hotelNum;

    @Column(name = "IMGNAME", length = 200)
    private String imgName;

    @ManyToOne 
    @JoinColumn(name = "num") 
    private Hotel hotel;

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }


}