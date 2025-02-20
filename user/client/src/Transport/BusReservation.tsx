import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import { appear_animate} from '../Comm/CommomFunc';

const seatPositions = [
  { id: 1, top: "50px", left: "50px" },
  { id: 2, top: "50px", left: "120px" },
  { id: 3, top: "50px", left: "190px" },
  { id: 4, top: "110px", left: "50px" },
  { id: 5, top: "110px", left: "120px" },
  { id: 6, top: "110px", left: "190px" },
  { id: 7, top: "170px", left: "50px" },
  { id: 8, top: "170px", left: "120px" },
  { id: 9, top: "170px", left: "190px" },
  { id: 10, top: "230px", left: "50px" },

];
const BusReservation: React.FC = () => {
    const [selectedFDate, setSelectedFDate] = useState<Date | null>(null);
  
  const [seats, setSeats] = useState(
    seatPositions.map(seat => ({ ...seat, status: "available" }))
  );

  const toggleSeat = (id: number) => {
    setSeats(seats.map(seat =>
      seat.id === id
        ? { ...seat, status: seat.status === "selected" ? "available" : "selected" }
        : seat
    ));
  };  
  useEffect(() => {
      // ftco-animate 클래스를 가진 요소에 등장 효과 적용
      appear_animate()
    }, []);

  const remainingSeats = seats.filter(seat => seat.status === "available").length;
  return (
    <div>
      <div className="hero-wrap js-halfheight"
    style={{
      backgroundImage: "url('/images/transport/palace.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative', // 요소의 위치를 상대적으로 설정
      zIndex: 0, // 이미지의 z-index 값을 0으로 설정하여 버튼이 이미지 위에 보이게
      backgroundColor: "rgba(0, 0, 0, 0.5);" // 배경을 어두운 색으로 설정
    }}
></div>

{/* 버스 좌석 컨테이너 */}
<div className="bg-center bg-contain">
  <h2 className="absolute top-2 left-2 text-black">
    남은 좌석: {remainingSeats}
  </h2>

  {/* 좌석 버튼 */}
  {seats.map((seat) => (
    <button
      key={seat.id}
      onClick={() => toggleSeat(seat.id)}
      disabled={seat.status === "reserved"}
      className={`absolute w-[40px] h-[40px] rounded-md text-white font-bold transition-transform duration-200 ease-in-out ${
        seat.status === "reserved"
          ? "bg-gray-400 cursor-not-allowed"
          : seat.status === "selected"
          ? "bg-blue-500 scale-110"
          : "bg-green-500 hover:scale-105"
      }`}
      style={{
        top: seat.top,
        left: seat.left,
        zIndex: 10 // 버튼의 z-index를 높여서 이미지 위에 나오게 설정
      }}
    >
      {seat.id}
    </button>
  ))}
        <div className="container">
                <div className="sidebar-wrap bg-light ftco-animate">
                  <h3 className="heading mb-4">가는 편 승차원 정보</h3>
                  <form action="#" >
                    <div className="fields">
                    <div className="form-group">
                        <div className="select-wrap one-third">
                          <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                          <select name="" id="" className="form-control">
                            <option value="">출발지</option>
                            <option value="">서울경부</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="select-wrap one-third">
                          <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                          <select name="" id="" className="form-control">
                            <option value="">도착지</option>
                            <option value="">부산</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <DatePicker
                          selected={selectedFDate}
                          onChange={(date: Date | null) => setSelectedFDate(date)}
                          dateFormat="yyyy년 MM월 dd일" // 날짜 형식
                          className="form-control" // Bootstrap 스타일
                          locale="ko" // 로케일 설정
                          id="checkin_date"
                          placeholderText="가는날" // 플레이스홀더
                        />
                      </div>
                      {/* <div className="form-group">
                        <DatePicker
                          selected={selectedTDate}
                          onChange={(date: Date | null) => setSelectedTDate(date)}
                          dateFormat="yyyy년 MM월 dd일" // 날짜 형식
                          className="form-control" // Bootstrap 스타일
                          locale="ko" // 로케일 설정
                          id="checkin_date"
                          placeholderText="Date to" // 플레이스홀더
                        />
                      </div> */}
                    <div className="form-group">
                        <div className="select-wrap one-third">
                          <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                          <select name="" id="" className="form-control">
                            <option value="">등급</option>
                            <option value="">우등</option>
                          </select>
                        </div>
                      </div>
                    
                    </div>
                  </form>
                </div>
              </div>
      </div>
    </div>
  );
};

export default BusReservation