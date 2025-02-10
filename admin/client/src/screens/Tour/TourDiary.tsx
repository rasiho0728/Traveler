import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom";

interface TourEntry {
  id: number
  title: string
  author: {
    name: string
    avatar: string
  }
  date: string
  emotion: "기쁨" | "중립" | "슬픔" |"분노" | "당황"
}

const avatar1 = require("../../assets/images/xs/avatar1.jpg");
const avatar2 = require("../../assets/images/xs/avatar2.jpg");
const avatar3 = require("../../assets/images/xs/avatar3.jpg");
const avatar4 = require("../../assets/images/xs/avatar4.jpg");
const avatar5 = require("../../assets/images/xs/avatar5.jpg");
const avatar6 = require("../../assets/images/xs/avatar6.jpg");


const tourData: TourEntry[] = [
  {
    id: 1,
    title: "여행의 모든 것: 코스, 후기, 꿀팁 정리",
    author: {
      name: "Victore Rampling",
      avatar: avatar1,
    },
    date: "25-02-2021",
    emotion: "기쁨",
  },
  {
    id: 2,
    title: "오늘도 여행 중! 도시별 리얼 후기",
    author: {
      name: "Joan Dyer",
      avatar: avatar2,
    },
    date: "21-03-2021",
    emotion: "분노",
  },
  {
    id: 3,
    title: "여행 플래너 & 다이어리 - 일정부터 소감까지",
    author: {
      name: "Sally Grahanm",
      avatar: avatar3,
    },
    date: "16-02-2021",
    emotion: "슬픔",
  },
  {
    id: 4,
    title: "발길 닿는 대로, 여행 리포트",
    author: {
      name: "Phil Glover",
      avatar: avatar4,
    },
    date: "16-03-2021",
    emotion: "중립",
  },
  {
    id: 5,
    title: "여행 브이로그 대신 다이어리로 남기기",
    author: {
      name: "Robert Anderson",
      avatar: avatar5,
    },
    date: "18-01-2021",
    emotion: "기쁨",
  },
  {
    id: 6,
    title: "트래블 노트",
    author: {
      name: "Ryan Randall",
      avatar: avatar6,
    },
    date: "12-03-2021",
    emotion: "슬픔",
  },
]

const TourDiary: React.FC = () => {
  const getEmotionBadgeClass = (emotion: string) => {
    switch (emotion) {
      case "기쁨":
        return "bg-primary text-white"
      case "중립":
        return "bg-info text-dark"
      case "슬픔":
        return "bg-secondary text-white"
      case "분노":
        return "bg-danger text-white"
      case "당황":
        return "bg-warning text-white"
      default:
        return "bg-secondary text-white"
    }
  }


  const emotionImages: { [key in TourEntry["emotion"]]: string } = {
    기쁨: "/imgs/emotion/happy.PNG",
    중립: "/imgs/emotion/soso.PNG",
    슬픔: "/imgs/emotion/sad.PNG",
    분노: "/imgs/emotion/angry.PNG",
    당황: "/imgs/emotion/embressed.PNG",
  };

  // 삭제 핸들러 함수
  const onClickDelete = () => {
    
  };

  return (
    <div className="container-fluid py-5">
      <h2 className="mb-4">여행 다이어리</h2>
      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="px-4" style={{ width: "80px" }}>
                    번호
                  </th>
                  <th className="px-4">제목</th>
                  <th className="px-4" style={{ width: "200px" }}>
                    닉네임
                  </th>
                  <th className="px-4" style={{ width: "150px" }}>
                    작성일
                  </th>
                  <th className="px-4" style={{ width: "100px" }}>
                    대표감정
                  </th>
                  <th className="px-4" style={{ width: "80px" }}>
                    삭제
                  </th>
                </tr>
              </thead>
              <tbody>
                {tourData.map((entry) => (
                  <tr key={entry.id}>
                    <td className="px-4">{entry.id}</td>
                    <td className="px-4 text-orange title-hover">
                      {/* <a href="#">
                        {entry.title}
                      </a> */}
                      <Link to={`detail/${entry.id}`}>
                        {entry.title}
                      </Link>
                    </td>
                    <td className="px-4">
                      <div className="d-flex align-items-center">
                        
                        <img className="avatar rounded-circle" src={entry.author.avatar} ></img>
                        <span>{entry.author.name}</span>
                      </div>
                    </td>
                    <td className="px-4">{entry.date}</td>


                    <td className="px-4">
                      <div className="d-flex align-items-center">
                        <img
                          style={{ marginRight: "10px" }}
                          src={emotionImages[entry.emotion]} 
                          alt={entry.emotion} 
                          width="24" 
                          height="24" 
                        />
                        <span className={`badge ${getEmotionBadgeClass(entry.emotion)} rounded-pill`}>
                          {entry.emotion}
                        </span>
                      </div>
                    </td>



                    <td className="px-4">
                      <button className="btn btn-link text-danger p-0" title="삭제">
                      <button type="button" className="btn btn-outline-secondary" onClick={onClickDelete}><i className="icofont-ui-delete text-danger"></i></button>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer bg-white border-0">
          <div className="d-flex justify-content-between align-items-center px-4 py-2">
            <div className="d-flex align-items-center">
              <span className="me-2">Rows per page:</span>
              <select className="form-select form-select-sm" style={{ width: "70px" }}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3">1-6 of 6</span>
              <div className="btn-group">
                <button className="btn btn-outline-secondary btn-sm" disabled>
                  <span>&laquo;</span>
                </button>
                <button className="btn btn-outline-secondary btn-sm" disabled>
                  <span>&lsaquo;</span>
                </button>
                <button className="btn btn-outline-secondary btn-sm" disabled>
                  <span>&rsaquo;</span>
                </button>
                <button className="btn btn-outline-secondary btn-sm" disabled>
                  <span>&raquo;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourDiary

