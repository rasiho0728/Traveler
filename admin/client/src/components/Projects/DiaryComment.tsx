import React from "react";
import { ProgressBar } from "react-bootstrap";

const DiaryComment: React.FC = () => {
  const avatars = {
    Avatar10: require("../../assets/images/xs/avatar10.jpg"),
    Avatar11: require("../../assets/images/xs/avatar11.jpg"),
    Avatar3: require("../../assets/images/xs/avatar3.jpg"),
    Avatar4: require("../../assets/images/xs/avatar4.jpg"),
    Avatar9: require("../../assets/images/xs/avatar9.jpg"),
    Avatar6: require("../../assets/images/xs/avatar6.jpg"),
  };

  const reviews = [
    { id: 1, name: "Lucinda Massey", role: "Ui/UX Designer", comment: "와, 글 너무 잘 쓰셨네요! 읽으면서 공감 많이 됐어요 😊", avatar: avatars.Avatar6 },
    { id: 2, name: "Ryan Nolan", role: "Website Designer", comment: "덕분에 많은 도움이 됐습니다 🙌", avatar: avatars.Avatar4 },
    { id: 3, name: "Oliver Black", role: "App Developer", comment: "사진이 너무 예쁘네요! 혹시 촬영 팁 공유해주실 수 있나요?", avatar: avatars.Avatar9 },
    { id: 4, name: "Adam Walker", role: "Quality Checker", comment: "저도 비슷한 경험이 있었는데, 정말 공감돼요! 글 감사합니다.", avatar: avatars.Avatar10 },
    { id: 5, name: "Brian Skinner", role: "Quality Checker", comment: "이 글 보고 나니까 꼭 한번 시도해보고 싶어졌어요! 감사합니다 🙏", avatar: avatars.Avatar4 },
    { id: 6, name: "Dan Short", role: "App Developer", comment: "이거 완전 꿀팁이네요! 친구들에게도 공유해야겠어요 😍", avatar: avatars.Avatar11 },
    { id: 7, name: "Jack Glover", role: "Ui/UX Designer", comment: "정말 유용한 정보예요! 정리까지 깔끔해서 이해하기 쉬웠어요 👍", avatar: avatars.Avatar3 },
  ];

  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card-header py-3 border-bottom pb-2" style={{height: "50px"}}>
        <h6 className="mb-0 fw-bold">댓글 관리</h6>
      </div>
      <div className="card-body">
        <div className="flex-grow-1 mem-list">
          {reviews.map((review) => (
            <div key={review.id} className="py-2 d-flex align-items-center border-bottom">
              <div className="d-flex ms-2 align-items-center flex-fill">
                <img src={review.avatar} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                <div className="d-flex flex-column ps-2">
                  <h6 className="fw-bold mb-0">{review.name}</h6>
                  <span className="small text-muted">{review.role}</span>
                  {review.comment && <p>{review.comment}</p>}
                </div>
              </div>
              <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiaryComment;
