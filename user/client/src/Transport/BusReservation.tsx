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
interface BusAppointment {
  buscode: string;
  schedule: Date;
  departure: string;
  destination: string;
  departureoftime: string;
  destinationoftime: string;
  sitnum: string;
}
const BusReservation: React.FC = () => {
  const [data, setData] = useState<BusTime[]>([]);
  const [busAppoint, setBusAppoint] = useState<BusAppointment[]>([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [isApplied, setIsApplied] = useState(false); // 신청 여부 상태
  const [selectedFDate, setSelectedFDate] = useState<Date | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]); // 선택된 좌석 배열
  const datepickerRef1 = useRef(null);
  const datepickerRef2 = useRef(null);

  const minTime = new Date();
  minTime.setHours(1, 0); // 예약 일시 09시부터~
  const [formattedTime, setFormattedTime] = useState<Date>(minTime);
  const maxTime = new Date();
  maxTime.setHours(23, 59); // ~ 24시까지
  const [departureTime, setDepartureTime] = useState<Date | null>(null); // 초기 값으로 minTime 사용
  const [arrivalTime, setArrivalTime] = useState<Date | null>(null); // 초기 값으로 minTime 사용


  // const [schedule, setSchedule] = useState("");
  // const [departure, setDeparture] = useState("");
  // const [destination, setDestination] = useState("");
  // const [departureoftime, setDepartureoftime] = useState("");
  // const [destinationoftime, setDestinationoftime] = useState("");
  // const [sitnum, setSitnum] = useState("");



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

  const handlesubmit = async () => {
    const confirmApply = window.confirm('정말로 예약을 하시겠습니까?');
    if (!confirmApply) return;
    try {
      const formdata = new FormData();
      // formdata.append("schedule", schedule);
      // formdata.append("departure", departure);
      // formdata.append("destination", destination);
      // formdata.append("departureoftime", departureoftime);
      // formdata.append("destinationoftime", destinationoftime);
      // formdata.append("sitnum", sitnum);
      const response = await axios.post(`${process.env.REACT_APP_BACK_END_URL}/api/busreservation`,
        formdata);
      console.log(response.data);
      // 신청 성공 시
      setIsApplied(true);  // 신청 완료 상태로 업데이트
      window.alert('신청이 되었습니다.');
      navigate("/traveler/home");
    } catch (error) {
      console.log("error Message:" + error);
    }
  };


  useEffect(() => {
    updateHalfHeight();
    window.addEventListener('resize', updateHalfHeight);
    return () => {
      window.removeEventListener('resize', updateHalfHeight);
    };
  }, [data]);


  //오류 발생시 나옴
  if (!data.length) {
    return <div>로딩중 ~</div>;
  }
  // 좌석 선택 함수
  const handleSeatClick = (seat: string, event: React.MouseEvent) => {
    event.preventDefault();  // 클릭 시 기본 동작을 방지하여 새로고침을 막음
    setSelectedSeats(prevSeats => {
      if (prevSeats.includes(seat)) {
        return prevSeats.filter(s => s !== seat); // 이미 선택된 좌석이라면 제거
      } else {
        return [...prevSeats, seat]; // 선택되지 않은 좌석이라면 추가
      }
    });
  };

  const renderSeats = () => {
    const seatRows = ["A", "B", "C", "D", "E", "F", "G"];
    const seatColumns = 4;
    const seats = [];

    for (let i = 0; i < seatRows.length; i++) {
      const rowSeats = [];
      for (let j = 0; j < seatColumns; j++) {
        const seatValue = `${seatRows[i]}${j + 1}`;
        rowSeats.push(
          <button
            key={seatValue}
            type="button" // type="button" 속성 추가로 기본 폼 제출 방지
            className={`seat ${selectedSeats.includes(seatValue) ? "clicked" : ""}`}
            onClick={(event) => handleSeatClick(seatValue, event)} // onClick에서 event 처리
          >
            {seatValue}
          </button>
        );
      }
      seats.push(
        <div className="seat-row" key={i}>
          {rowSeats}
        </div>
      );
    }
    return seats;
  };
  const handleTimeChange = (selectedTime: any, isDeparture: boolean) => {
    const hours = selectedTime.getHours();
    const minutes = selectedTime.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`; // "12:30"

    const timeStringToDate = (timeString: string): Date => {
      const today = new Date();
      const [hours, minutes] = timeString.split(':').map(Number);
      const dateWithTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes);
      return dateWithTime;
    };

    const dateTime = timeStringToDate(formattedTime); // Convert to Date object

    // Update the corresponding time state based on whether it's departure or arrival
    if (isDeparture) {
      setDepartureTime(dateTime);
    } else {
      setArrivalTime(dateTime);
    }
  };
 const handleDataChange = (e: React.ChangeEvent<HTMLInputElement | any>) => {
  const {buscode,
    schedule,
    departure,
    destination,
    departureoftime,
    destinationoftime} =e.target;
 }

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
        <div key={index} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <table style={{ borderCollapse: 'collapse', width: '80%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>출발지</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>도착지</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>출발시간</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>도착시간</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>가격</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{bus.depPlaceNm}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{bus.arrPlaceNm}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{formatDate(bus.depPlandTime)}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{formatDate(bus.arrPlandTime)}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{bus.charge}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}

      <div className="container">
        <div className="sidebar-wrap bg-light">
          <h3 className="heading mb-4">개인예약 정보</h3>
          <form action='#'>
            <div className="fields">
              <div className="form-group">
                <DatePicker
                  selected={selectedFDate}
                  onChange={(date: Date | null) => setSelectedFDate(date)}
                  dateFormat="yyyy년 MM월 dd일"
                  className="form-control"
                  locale="ko"
                  placeholderText="출발 날짜"
                  
                />
              </div>
              <div className="container"></div>
              <div className="select-wrap one-third">
                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                <select name="" id="" className="form-control">
                  <option value="">출발지</option>
                  <option value="">서울경부</option>
                </select>
                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                <select name="" id="" className="form-control">
                  <option value="">도착지</option>
                  <option value="">부산</option>
                </select>
              </div>
              <div className="form-group">
                {/* 좌석 선택 UI 추가 */}
                <div className="form-group">
                  <h3 style={{ textAlign: "center" }}>좌석 선택</h3>
                  <div className="seat-wrapper">
                    {renderSeats()}
                  </div>
                </div>
                <div className="form-group">
                  <ReactDatePicker
                    ref={datepickerRef1}
                    shouldCloseOnSelect
                    placeholderText="출발시간"
                    selected={departureTime}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={10}
                    timeCaption="출발시간"
                    dateFormat="HH:mm"
                    minTime={minTime}
                    maxTime={maxTime}
                    onChange={(selectedTime) => handleTimeChange(selectedTime, true)} // Pass `true` for departure
                  />
                </div>
                <div className="form-group">
                  <ReactDatePicker
                    ref={datepickerRef2}
                    shouldCloseOnSelect
                    placeholderText="도착시간"
                    selected={arrivalTime}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={10}
                    timeCaption="도착시간"
                    dateFormat="HH:mm"
                    minTime={minTime}
                    maxTime={maxTime}
                    onChange={(selectedTime) => handleTimeChange(selectedTime, false)} // Pass `false` for arrival
                  />
                </div>
                <input
                  type="submit"
                  value="예약하기"
                  className="btn btn-primary py-3 px-5"
                  onChange={handleDataChange}
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