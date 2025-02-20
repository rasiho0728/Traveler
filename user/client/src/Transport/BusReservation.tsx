import React, { useState } from 'react'
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

  const remainingSeats = seats.filter(seat => seat.status === "available").length;
  return (
    <div>
      <div className="hero-wrap js-halfheight"
        style={{
          backgroundImage: "url('/images/transport/palace.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center', // 이미지 위치를 중앙에 맞추기
          backgroundRepeat: 'no-repeat',
          position: 'relative', // 요소의 위치를 상대적으로 설정
          zIndex: -2,
          backgroundColor: "rgba(0, 0, 0, 0.5);"
        }}
      ></div>
       {/* 🔹 버스 좌석 컨테이너 */}
       <div
        className="relative w-[360px] h-[700px] bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: "url('/bg_bus28.png')" }} // ✅ 좌석 이미지
      >
        <h2 className="absolute top-2 left-2 text-black font-bold bg-white p-2 rounded">
          남은 좌석: {remainingSeats}
        </h2>

        {/* 🔹 좌석 버튼 (이미지 위에 위치) */}
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
            style={{ top: seat.top, left: seat.left }}
          >
            {seat.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BusReservation