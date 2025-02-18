package kr.co.user.hotel;

import java.math.BigDecimal;
import java.util.Date;

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

// 2025-02-16 황보도연 추가
@Entity
@Table(name = "HOTELRESERVATION")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class HotelReservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long num;

    // @ManyToOne
    // @JoinColumn(name = "memberNum")
    // private Member member;

    @ManyToOne
    @JoinColumn(name = "roomNum")
    private Room room;

    @Column(nullable = false)
    private int numGuests;

    @Column(nullable = false)
    private Date checkInDate;

    @Column(nullable = false)
    private Date checkOutDate;

    @Column(length = 50)
    private String memberEmail;

    @Column(precision = 7)
    private BigDecimal totalPrice;

    @Column(length = 1)
    private String status;
}
