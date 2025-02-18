package kr.co.admin.tour;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;

@Entity
@Table(name = "TOURSCHEDULE")
@Getter
@Setter
@NoArgsConstructor
public class TourSchedule {

    @EmbeddedId
    private TourScheduleId id;

    @Column(name = "PLACE", length = 150)
    private String place;

    @Column(name = "CONTENT", columnDefinition = "CLOB")
    private String content;

    @ManyToOne
    @MapsId("tourNum")  // 복합키 매핑
    @JoinColumn(name = "TOURNUM", nullable = false)
    private Tour tour;
}

// 복합키 클래스
@Embeddable
@Getter
@Setter
@NoArgsConstructor
class TourScheduleId implements Serializable {

    @Column(name = "TOURNUM")
    private Long tourNum;

    @Column(name = "DAY")
    private Integer day;
}
