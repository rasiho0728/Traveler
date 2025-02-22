package kr.co.user.hotel;

import java.util.Date;
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
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
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
@Table(name = "HOTEL")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NUM")
    private Long num;

    @Column(name = "NAME", length = 150)
    private String name;

    @Column(name = "RATING")
    private Integer rating;

    @Lob
    @Column(name = "CONTENT")
    private String content;

    @Column(name = "LOCATION", length = 150)
    private String location;

    @Column(name = "THUMBNAIL", length = 200)
    private String thumbnail;

    @Column(name = "HIT")
    private Integer hit;

    @Temporal(TemporalType.DATE)
    @Column(name = "HDATE")
    private Date hdate;

    // @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL)
    // private List<HotelImage> images;
}
