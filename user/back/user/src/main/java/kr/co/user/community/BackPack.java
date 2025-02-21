package kr.co.user.community;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import kr.co.user.member.MemberVO;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity // initialValue: 1부터 시작 // allocationSize: 1씩 증가
@Table(name = "BACKPACK")
@SequenceGenerator(name = "backpack_seq_gen", sequenceName = "backpack_seq", initialValue = 1, allocationSize = 1)
public class BackPack {
    @Id // PK
    @GeneratedValue(generator = "backpack_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long num;

    @ManyToOne // N:1 (BackPack : MemberVO)
    @JoinColumn(name = "MEMBERNUM", nullable = false) // FK(외래키)
    @JsonBackReference // 무한 루프 방지
    private MemberVO member; // 회원 정보

    @Column(name = "ROOMNUM", columnDefinition = "number(10)", nullable = false)
    private Long roomNum; // 방 번호

    @Column(name = "TITLE", columnDefinition = "varchar2(50)", nullable = false)
    private String title; // 제목

    @Lob // 대용량 데이터 저장
    @Column(name = "CONTENT", columnDefinition = "clob", nullable = false)
    private String content; // 내용

    @Temporal(TemporalType.TIMESTAMP) // 날짜, 시간 같이 저장
    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP") // 자동으로 현재 시간 입력
    private Date cdate; // 작성일

    @Column(name = "HIT", columnDefinition = "number default 0", nullable = false)
    private Long hit; // 조회수(기본값 0)

    @Column(name = "HEART", columnDefinition = "number default 0", nullable = false)
    private Long heart; // 좋아요 수(기본값 0)

    @ElementCollection // 별도의 테이블 생성
    @CollectionTable(name = "BACKPACKIMAGE", joinColumns = @JoinColumn(name = "BNUM")) // BACKPACKIMAGE 테이블 생성 ->
                                                                                       // BackPack 엔티티와 연결
    @Column(name = "IMGNAME")
    private List<String> imgNames = new ArrayList<>(); // 여러개의 이미지 list형태로 저장

    @ElementCollection // 별도의 테이블 생성
    @CollectionTable(name = "TAG", joinColumns = @JoinColumn(name = "BACKPACKNUM")) // TAG 테이블 생성 -> BackPack 엔티티와 연결
    @Column(name = "TAG") // 태그
    private List<String> tags = new ArrayList<>();

    // 댓글 목록 (1:N 관계, 게시글 삭제 시 연관된 댓글도 삭제됨)
    @OneToMany(mappedBy = "backpack", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore // JSON 응답에서 댓글 목록을 숨김 (무한 루프 방지)
    private List<Bcomm> bcommlist = new ArrayList<>(); // 댓글 목록

}
