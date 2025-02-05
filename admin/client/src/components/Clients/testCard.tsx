import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";

const TestCard: React.FC<{ teamImage: any, logo: any, logoBg: any, title: any, sl: any, onClickEdit?: any, onClickDelete?: any, onClickAdd?: any }> = (props) => {
  const { teamImage, logo, logoBg, title, sl, onClickEdit, onClickDelete, onClickAdd } = props;

  
  const [tourperiod, setTourperiod] = useState("");

  const images = [
    "/imgs/img1.jpg",
    "/imgs/img2.jpg",
    "/imgs/img3.jpg",
    "/imgs/img4.jpg",
    "/imgs/img5.jpg",
    "/imgs/img6.jpg",
  ];

  const period =[
    "1개월",
    "3개월",
    "1주일",
    "2주일",
    "2박3일",
    "3박4일",
  ]
    
  const randomIndex = Math.floor(Math.random() * images.length);

  
  // 랜덤 값 하나를 선택하여 상태 업데이트
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * period.length);
    setTourperiod(period[randomIndex]);
  }, []);
  

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mt-5">
          <div className="lesson_name">
            <div className={"project-block " + logoBg}>
              <i className={logo}></i>
            </div>
            <span className="small text-muted project_name fw-bold">{sl}</span>
            <h6 className="mb-0 fw-bold  fs-6  mb-2">{title}</h6>
          </div>
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-secondary" onClick={onClickEdit}><i className="icofont-edit text-success"></i></button>
            <button type="button" className="btn btn-outline-secondary" onClick={onClickDelete}><i className="icofont-ui-delete text-danger"></i></button>
          </div>
        </div>
        {/* 이미지 */}
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <img src={process.env.PUBLIC_URL + images[randomIndex]} alt="Random Image" width="350" height="200" />
          </div>
        </div>
        <div className="row g-2 pt-4">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <i className="icofont-like"></i>
              <span className="ms-2">5 Like</span>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center">
              <i className="icofont-sand-clock"></i>
              <span className="ms-2">{tourperiod}</span>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center">
              <i className="icofont-group-students "></i>
              <span className="ms-2">15 Members</span>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center">
              <i className="icofont-ui-text-chat"></i>
              <span className="ms-2">10</span>
            </div>
          </div>
        </div>
        {/* <div className="dividers-block"></div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h4 className="small fw-bold mb-0">Progress</h4>
          <span className="small light-danger-bg  p-1 rounded"><i className="icofont-ui-clock"></i> 35 Days Left</span>
        </div>
        <ProgressBar style={{ height: "8px" }}>
          <ProgressBar variant="secondary" now={15} style={{ width: "25%" }} />
          <ProgressBar variant="secondary" now={30} style={{ width: "25%", marginLeft: 10 }} />
          <ProgressBar variant="secondary" now={10} style={{ width: "25%", marginLeft: 10 }} />
        </ProgressBar> */}
      </div>
    </div>
  )
}


export default TestCard;