import React from "react";
import { ProgressBar } from "react-bootstrap";

const ReviewTask: React.FC = () => {
  const avatars = {
    Avatar10: require("../../assets/images/xs/avatar10.jpg"),
    Avatar11: require("../../assets/images/xs/avatar11.jpg"),
    Avatar3: require("../../assets/images/xs/avatar3.jpg"),
    Avatar4: require("../../assets/images/xs/avatar4.jpg"),
    Avatar9: require("../../assets/images/xs/avatar9.jpg"),
    Avatar6: require("../../assets/images/xs/avatar6.jpg"),
  };

  const reviews = [
    { id: 1, name: "Lucinda Massey", role: "Ui/UX Designer", comment: "좋은 추억 남기고 왔습니다", avatar: avatars.Avatar6 },
    { id: 2, name: "Ryan Nolan", role: "Website Designer", comment: "이 여행을 추천합니다", avatar: avatars.Avatar4 },
    { id: 3, name: "Oliver Black", role: "App Developer", comment: "생각보다 별로던데요?", avatar: avatars.Avatar9 },
    { id: 4, name: "Adam Walker", role: "Quality Checker", comment: "사진찍기 좋은장소입니다", avatar: avatars.Avatar10 },
    { id: 5, name: "Brian Skinner", role: "Quality Checker", comment: "굿", avatar: avatars.Avatar4 },
    { id: 6, name: "Dan Short", role: "App Developer", comment: "별로", avatar: avatars.Avatar11 },
    { id: 7, name: "Jack Glover", role: "Ui/UX Designer", comment: "친구에게 추천했어요", avatar: avatars.Avatar3 },
  ];

  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card-header py-3 border-bottom pb-2" style={{height: "50px"}}>
        <h6 className="mb-0 fw-bold">리뷰 관리</h6>
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

export default ReviewTask;
