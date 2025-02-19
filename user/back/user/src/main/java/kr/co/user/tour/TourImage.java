package kr.co.user.tour;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "TOURIMAGE")
@Getter
@Setter
@NoArgsConstructor
public class TourImage {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TOURINFONUM") // 기존 TOURINFONUM을 PK로 사용
    private Long tourInfoNum;

    @Column(name = "IMGNAME", length = 200)
    private String imgName;

    @ManyToOne
    @JoinColumn(name = "TOURNUM", nullable = false)
    @JsonBackReference
    private Tour tour;
}
