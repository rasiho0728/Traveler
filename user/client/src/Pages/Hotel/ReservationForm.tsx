import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../css/hotel.css';
import DatePicker from 'react-datepicker';
import { updateHalfHeight } from '../../Comm/CommomFunc';

interface RoomDetails {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: string;
}
// 객실 더미 데이터 
export const roomDetails: RoomDetails[] = [
    {
        id: 1,
        name: "스탠다드",
        description: "A cozy room with all basic amenities.",
        imageUrl: "https://pix8.agoda.net/hotelImages/1147067/-1/e4185291a35fcf0db6701be2e68c654d.jpg?ce=0&s=1024x",
        price: "₩100,000",
    },
    {
        id: 2,
        name: "디럭스",
        description: "A spacious room with luxury amenities.",
        imageUrl: "https://media.datahc.com/Hotelier/Library/ext-FG13561120.jpg",
        price: "₩200,000",
    },
    {
        id: 3,
        name: "스위트",
        description: "A large suite with a separate living area.",
        imageUrl: "https://pix8.agoda.net/hotelImages/114/1147067/1147067_16050519400042089047.jpg?ca=6&ce=1&s=1024x",
        price: "₩300,000",
    },
];


const ReservationForm = () => {
    const [selectedFDate, setSelectedFDate] = useState<Date | null>(null);
    const [selectedTDate, setSelectedTDate] = useState<Date | null>(null);
    const [selectedRoom, setSelectedRoom] = useState<number | null>(null); // 선택된 방

    const location = useLocation();
    const roomDetails = location.state?.roomDetails;

    useEffect(() => {
        updateHalfHeight();
        window.addEventListener("resize", updateHalfHeight);
        return () => {
            window.removeEventListener("resize", updateHalfHeight);
        };
    }, []);

    if (!roomDetails) {
        return <p>No room details available.</p>;
    }

    const handleRoomChange = (roomId: number) => {
        setSelectedRoom(roomId);
    };

    const selectedRoomDetails = roomDetails.find(
        (room: RoomDetails) => room.id === selectedRoom
    );

    return (
        <div>
            <div className="hero-wrap js-halfheight" style={{ backgroundImage: "url('/images/bg_5.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                            <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span className="mr-2"><Link to="/traveler/hotels">Hotel</Link></span> <span>Hotel Single</span></p>
                            <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>호텔 소개</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hotel-reservForm">
                <h4 className="hotel-reservForm__title">예약 확인 및 예약하기</h4>
                <div className="hotel-reservForm__fields">
                    <div className="row">
                        {/* 객실 선택 */}
                        <div className="col-md-12 hotel-reservForm__custom-margin">
                            <div className="form-group">
                                <label>방 선택</label>
                                <div className="hotel-reservForm__select-wrap">
                                    <select
                                        name="roomType"
                                        className="form-control"
                                        onChange={(e) => handleRoomChange(Number(e.target.value))}
                                    >
                                        <option value="">방 선택</option>
                                        {roomDetails.map((room: RoomDetails) => (
                                            <option key={room.id} value={room.id}>
                                                {room.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* 선택된 객실 정보 표시 */}
                        {selectedRoomDetails && (
                            <div className="col-md-12 hotel-reservForm__custom-margin">
                                <div className="hotel-reservForm__room-details">
                                    <h5>{selectedRoomDetails.name}</h5>
                                    <img
                                        src={selectedRoomDetails.imageUrl}
                                        alt={selectedRoomDetails.name}
                                        className="img-fluid"
                                    />
                                    <p>{selectedRoomDetails.description}</p>
                                    <p><strong>Price: {selectedRoomDetails.price}</strong></p>
                                </div>
                            </div>
                        )}

                        {/* Name 필드 */}
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" placeholder="Name" required />
                            </div>
                        </div>

                        {/* Email 필드 */}
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="email" className="form-control" placeholder="Email" required />
                            </div>
                        </div>

                        {/* 체크인, 체크아웃 날짜 */}
                        <div className="col-md-6">
                            <div className="form-group">
                                <DatePicker
                                    selected={selectedFDate}
                                    onChange={(date: Date | null) => setSelectedFDate(date)}
                                    dateFormat="yyyy년 MM월 dd일"
                                    className="form-control"
                                    locale="ko"
                                    placeholderText="Date from"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <DatePicker
                                    selected={selectedTDate}
                                    onChange={(date: Date | null) => setSelectedTDate(date)}
                                    dateFormat="yyyy년 MM월 dd일"
                                    className="form-control"
                                    locale="ko"
                                    placeholderText="Date to"
                                />
                            </div>
                        </div>

                        {/* 성인 및 청소년 선택 */}
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>성인:</label>
                                <select name="adults" className="form-control">
                                    {[0, 1, 2, 3, 4].map((num) => (
                                        <option value={num} key={num}>{num}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            <div className="form-group">
                                <label>청소년:</label>
                                <select name="children" className="form-control">
                                    {[0, 1, 2, 3, 4].map((num) => (
                                        <option value={num} key={num}>{num}</option>
                                    ))}
                                </select>
                            </div>
                        </div> */}

                        {/* 제출 버튼 */}
                        <div className=" col-md-6">
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary py-3">
                                    지금 예약
                                </button>
                            </div>
                        </div>

                        {/* 리스트로 돌아가는 버튼 */}
                        <div className="col-md-6">
                            <div className="form-group">
                                <Link to="/traveler/hotels/:num" className="btn btn-secondary py-3">
                                    이전으로
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ReservationForm;
