import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import ReactDatePicker from "react-datepicker"; // 추가!
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { updateHalfHeight } from '../Comm/CommomFunc';
import "../css/bus.css";

interface BusTime {
  depPlaceNm: string;
  arrPlaceNm: string;
  depPlandTime: number;
  arrPlandTime: number;
  charge: number;
}

const BusReservation: React.FC = () => {
  const [data, setData] = useState<BusTime[]>([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [isApplied, setIsApplied] = useState(false); // 신청 여부 상태
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]); // 선택된 좌석 배열
  const datepickerRef1 = useRef(null);
  const datepickerRef2 = useRef(null);

  const minTime = new Date();
  minTime.setHours(1, 0); // 예약 일시 09시부터~
  // const [formattedTime, setFormattedTime] = useState<Date>(minTime);
  const maxTime = new Date();
  maxTime.setHours(23, 59); // ~ 24시까지
  // const [arrivalTime, setArrivalTime] = useState<Date | null>(null); // 초기 값으로 minTime 사용

  // const [schedule, setSchedule] = useState("");
  const [schedule, setSchedule] = useState<Date | null>(null);
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [departureoftime, setDepartureoftime] = useState<Date | null>(null);
  const [destinationoftime, setDestinationoftime] = useState<Date | null>(null);
  const [sitnum, setSitnum] = useState("");

  //버스 시간 format 해주는 부분  -> 시간 : 분 형식으로 출력됨
  const formatDate = (timestamp: number): string => {
    const hour = Math.floor((timestamp % 10000) / 100);
    const minute = timestamp % 100;
    return `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
  };
  //버스 정보 나오게 해주는 부분
  useEffect(() => {
    const busInfo = {
      depPlaceNm: params.get('depPlaceNm') || '',
      arrPlaceNm: params.get('arrPlaceNm') || '',
      depPlandTime: parseInt(params.get('depPlandTime') || '0', 10),
      arrPlandTime: parseInt(params.get('arrPlandTime') || '0', 10),
      charge: parseInt(params.get('charge') || '0', 10),
    };
    setData([busInfo]);
  }, [location.search]);

    //기본 버스 정보 출력하기
  useEffect(() => {
    updateHalfHeight();
    window.addEventListener('resize', updateHalfHeight);
    return () => {
      window.removeEventListener('resize', updateHalfHeight);
    };
  }, [data]);

  //버스 예약하기
  const handleSubmit = async (e: React.FormEvent) => {
    const confirmApply = window.confirm('정말로 예약을 하시겠습니까?');
    if (!confirmApply) return;
    try {
      const formData = new FormData();
      formData.append("schedule", schedule ? schedule.toISOString() : '');
      formData.append("departure", departure || '');
      formData.append("destination", destination || '');
      formData.append("departureoftime", departureoftime ? departureoftime.toISOString() : '');
      formData.append("destinationoftime", destinationoftime ? destinationoftime.toISOString()  : '');
      selectedSeats.forEach(sitnum => {
        formData.append("sitnum", sitnum);
      });
      const response = await axios.post(`${process.env.REACT_APP_BACK_END_URL}/api/busreservation`,
        formData,{
          headers: {
            "Content-Type":"application/json"
          }
        }
      );
      console.log(formData)
      console.log(response);
      // 신청 성공 시
      setIsApplied(true);  // 신청 완료 상태로 업데이트
      window.alert('신청이 되었습니다.');
      navigate("/traveler/home");
    } catch (error) {
      console.log('Error Message: ' + error);
    }
  };

  //오류 발생시 나옴
  if (!data.length) {
    return <div>로딩중 ~</div>;
  }

  // 좌석 클릭 이벤트 처리
  const handleSeatClick = (seatValue: string, event: React.MouseEvent) => {
    const updatedSeats = selectedSeats.includes(seatValue)
      ? selectedSeats.filter(seat => seat !== seatValue) // 이미 선택된 좌석을 클릭하면 선택 해제
      : [...selectedSeats, seatValue]; // 새 좌석을 클릭하면 선택

    setSelectedSeats(updatedSeats); // 상태 업데이트
  };




  return (
    <div>
      <div className="js-halfheight mb-4" style={{
        backgroundImage: 'url("../../../../images/transport/palace.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      ></div>
      {data.map((bus, index) => (
        <div key={index} className='busdetail'>
          <table>
            <thead>
              <tr>
                <th>출발지</th>
                <th>도착지</th>
                <th>출발시간</th>
                <th>도착시간</th>
                <th>가격</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{bus.depPlaceNm}</td>
                <td>{bus.arrPlaceNm}</td>
                <td>{formatDate(bus.depPlandTime)}</td>
                <td>{formatDate(bus.arrPlandTime)}</td>
                <td>{bus.charge}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <div className="container">
        <div className="sidebar-wrap bg-light">
          <h3 className="heading mb-4">개인예약 정보</h3>
          <form onSubmit={handleSubmit}>
            <div className="fields">
              <div className="form-group">
                <DatePicker
                  selected={schedule}
                  onChange={(date: Date | null) => setSchedule(date)}
                  dateFormat="yyyy년 MM월 dd일"
                  className="form-control"
                  locale="ko"
                  placeholderText="출발 날짜"

                />
              </div>
              <div className="form-group">
                <DatePicker
                  ref={datepickerRef1}
                  onChange={(date: Date | null) => setDepartureoftime(date)}
                  shouldCloseOnSelect
                  placeholderText="출발시간"
                  selected={departureoftime}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={10}
                  timeCaption="출발시간"
                  dateFormat="HH:mm"
                  minTime={minTime}
                  maxTime={maxTime}
                />
              </div>
              <div className="form-group">
                <DatePicker
                  ref={datepickerRef2}
                  shouldCloseOnSelect
                  onChange={(date: Date | null) => setDestinationoftime(date)}
                  placeholderText="도착시간"
                  selected={destinationoftime}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={10}
                  timeCaption="도착시간"
                  dateFormat="HH:mm"
                  minTime={minTime}
                  maxTime={maxTime}
                />
              </div>
              <div className="container"></div>
              <div className="select-wrap one-third">
                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                <select name="departure" id="" className="form-control" >
                  <option value="">출발지</option>
                  <option value="">서울경부</option>
                </select>
                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                <select name="destination" id="" className="form-control">
                  <option value="">도착지</option>
                  <option value="">부산</option>
                </select>
              </div>
              <div className="form-group">
                {/* 좌석 선택 UI 추가 */}
                <div className="form-group">
                  <h3 style={{ textAlign: "center" }}>좌석 선택</h3>
                  <div className="seat-wrapper">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bus-front" viewBox="0 0 16 16">
                        <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9s3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44 44 0 0 0 8 4m0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44 44 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43 43 0 0 0 8 3" />
                        <path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A44 44 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2zM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A43 43 0 0 1 8 1" />
                      </svg>
                    </div><h3>운전석</h3>
                    <h3 style={{ textAlign: 'right' }}>출입구</h3>
                    <hr />
                    {/* 좌석 렌더링 */}
                    {["A", "B", "C", "D", "E", "F", "G"].map((row, i) => (
                      <div className="seat-row" key={i}>
                        <div className="seat-pair">
                          {Array.from({ length: 2 }, (_, j) => {
                            const seatValue = `${row}${j + 1}`;
                            return (
                              <button
                                key={seatValue}
                                type="button"
                                className={`seat ${selectedSeats.includes(seatValue) ? "clicked" : ""}`}
                                onClick={(event) => handleSeatClick(seatValue, event)}
                              value={sitnum}
                              >
                                {seatValue}
                              </button>
                            );
                          })}
                        </div>
                        <div className="seat-pair">
                          {Array.from({ length: 2 }, (_, j) => {
                            const seatValue = `${row}${j + 3}`; // 3, 4 같은 좌석
                            if (seatValue === `${row}4`) return null
                            return (
                              <button
                                key={seatValue}
                                type="button"
                                className={`seat ${selectedSeats.includes(seatValue) ? "clicked" : ""}`}
                                onClick={(event) => handleSeatClick(seatValue, event)}
                                
                              >
                                {seatValue}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <input
                  type="submit"
                  value="예약하기"
                  className="btn btn-primary py-3 px-5"
                  disabled={isApplied}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default BusReservation;