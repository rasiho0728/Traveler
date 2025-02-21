package kr.co.admin.manager;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Lob;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Embeddable
public class Notification {
    @Column(name = "TITLE", length = 60,nullable = false)
    private String title;

    @Column(name = "CONTENT", nullable = false)
    @Lob
    private String content;

    @Column(name = "NDATE", columnDefinition = "date default sysdate", nullable = false)
    private Date ndate;
}
