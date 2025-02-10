import type React from "react"
import { useState } from "react"
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import { Link } from "react-router-dom";

interface TourEntry {
  id: number;
  name: string;
  date: string;
  rooms: any[]
}


const tourData: TourEntry[] = [
  {
    id: 1,
    name: "OOO호텔",
    date: "25-02-2021",
    rooms: [
      {
        roomName: '스탠다드',
        numRoom: 10,
        price: 13200
      },
      {
        roomName: '패밀리',
        numRoom: 10,
        price: 25000
      },
      {
        roomName: '로얄얄',
        numRoom: 10,
        price: 50000
      }
    ]
  },
  {
    id: 2,
    name: "AAA호텔",
    date: "21-03-2021",
    rooms: [
      {
        roomName: '스탠다드',
        numRoom: 10,
        price: 13200
      },
      {
        roomName: '패밀리',
        numRoom: 10,
        price: 25000
      },
      {
        roomName: '로얄얄',
        numRoom: 10,
        price: 50000
      }
    ]
  },
  {
    id: 3,
    name: "CCC호텔",
    date: "16-02-2021",
    rooms: [
      {
        roomName: '스탠다드',
        numRoom: 10,
        price: 13200
      },
      {
        roomName: '패밀리',
        numRoom: 10,
        price: 25000
      },
      {
        roomName: '로얄얄',
        numRoom: 10,
        price: 50000
      }
    ]
  },
  {
    id: 4,
    name: "RRR호텔",
    date: "16-03-2021",
    rooms: [
      {
        roomName: '스탠다드',
        numRoom: 10,
        price: 13200
      },
      {
        roomName: '패밀리',
        numRoom: 10,
        price: 25000
      },
      {
        roomName: '로얄얄',
        numRoom: 10,
        price: 50000
      }
    ]
  },
  {
    id: 5,
    name: "HHH호텔",
    date: "18-01-2021",
    rooms: [
      {
        roomName: '스탠다드',
        numRoom: 10,
        price: 13200
      },
      {
        roomName: '패밀리',
        numRoom: 10,
        price: 25000
      },
      {
        roomName: '로얄얄',
        numRoom: 10,
        price: 50000
      }
    ]
  },
  {
    id: 6,
    name: "KKK호텔",
    date: "12-03-2021",
    rooms: [
      {
        roomName: '스탠다드',
        numRoom: 10,
        price: 13200
      },
      {
        roomName: '패밀리',
        numRoom: 10,
        price: 25000
      },
      {
        roomName: '로얄얄',
        numRoom: 10,
        price: 50000
      }
    ]
  },
]

const CustomToggle = ({ children, eventKey }: any) => {
  const decoratedOnClick = useAccordionButton(eventKey, () => { });

  return (
    <Link to=""
      onClick={decoratedOnClick}
    >
      {children}
    </Link>
  );
}

const CoalitionList: React.FC = () => {
  // 삭제 핸들러 함수
  const onClickDelete = () => {

  };

  return (
    <div className="container-fluid py-5">
      <h2 className="mb-4">제휴업체 관리</h2>
      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive">
            <Accordion>
              <div className="row py-3">
                <div className="col-md-2 text-center">
                  번호
                </div>
                <div className="col-md-5 text-center">
                  업체명
                </div>
                <div className="col-md-3 text-center">
                  가입일
                </div>
                <div className="col-md-2 text-center">
                  삭제
                </div>
              </div>
              {tourData.map((entry, idx) => (
                <>
                  <div className="row border py-3">
                    <div className="col-md-2 text-center">
                      {entry.id}
                    </div>
                    <div className="col-md-5 text-center">
                      <CustomToggle eventKey={`${idx}`}>{entry.name}</CustomToggle>
                    </div>
                    <div className="col-md-3 text-center">
                      {entry.date}
                    </div>
                    <div className="col-md-2 text-center">
                      <button type="button" className="btn btn-outline-secondary" onClick={onClickDelete}><i className="icofont-ui-delete text-danger"></i></button>
                    </div>
                  </div>
                  <Accordion.Collapse eventKey={`${idx}`}>
                    <div>
                      {
                        entry.rooms.map((room, idx) => (
                          <div key={idx} className="row text-center py-3">
                            <div className="col-md-2"><h4>방 이름:</h4></div>
                            <div className="col-md-2"><h4>{room.roomName}</h4></div>
                            <div className="col-md-2"><h4>방 수:</h4></div>
                            <div className="col-md-2"><h4>{room.numRoom}</h4></div>
                            <div className="col-md-2"><h4>가격:</h4></div>
                            <div className="col-md-2"><h4>{room.price}원/night</h4></div>
                          </div>
                        ))
                      }
                    </div>
                  </Accordion.Collapse>
                </>
              ))}
            </Accordion>
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
    </div >
  )
}

export default CoalitionList

