// 2025.01.24. 15:15 생성자: 황보도연, HTML템플릿을 리엑트로 조정
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/hotel.css';

// 객실 더미 데이터 
const roomDetails = [
    {
        id: 1,
        name: "스탠다드",
        description: "A cozy room with all basic amenities.",
        imageUrl: "https://pix8.agoda.net/hotelImages/1147067/-1/e4185291a35fcf0db6701be2e68c654d.jpg?ce=0&s=1024x", // 이미지 URL 넣기
        price: "₩100,000"
    },
    {
        id: 2,
        name: "디럭스",
        description: "A spacious room with luxury amenities.",
        imageUrl: "https://media.datahc.com/Hotelier/Library/ext-FG13561120.jpg",
        price: "₩200,000"
    },
    {
        id: 3,
        name: "스위트",
        description: "A large suite with a separate living area.",
        imageUrl: "https://pix8.agoda.net/hotelImages/114/1147067/1147067_16050519400042089047.jpg?ca=6&ce=1&s=1024x",
        price: "₩300,000"
    }
];

const ReservationForm = () => {
    const [selectedRoom, setSelectedRoom] = useState<number | null>(null); // 선택된 방

    const handleRoomChange = (roomId: number) => {
        setSelectedRoom(roomId);
    };

    const selectedRoomDetails = roomDetails.find(room => room.id === selectedRoom);

    return (
        <div className="reservation-form">
            <h4 className="mb-5">예약 확인 및 예약하기</h4>
            <div className="fields">
                <div className="row">

                    {/* 객실 선택 */}
                    <div className="col-md-12 custom-margin">
                        <div className="form-group">
                            <label>방 선택</label>
                            <div className="select-wrap">
                                <select
                                    name="roomType"
                                    className="form-control"
                                    onChange={(e) => handleRoomChange(Number(e.target.value))}
                                >
                                    <option value="">방 선택</option>
                                    {roomDetails.map((room) => (
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
                        <div className="col-md-12 custom-margin">
                            <div className="room-details">
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
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                    </div>

                    {/* Email 필드 */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                    </div>

                    {/* 체크인, 체크아웃 날짜 */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Date from"
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Date to"
                            />
                        </div>
                    </div>

                    {/* 제출 버튼 */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="submit" value="Check Availability" className="btn btn-primary py-3" />
                        </div>
                    </div>
                    {/* 리스트로 돌아가는 버튼 */}
                    <div className="col-md-6">
                        <div className="form-group">
                            {/* React Router의 Link 컴포넌트 사용 */}
                            <Link to="/traveler/hotels/:num" className="btn btn-secondary py-3" >
                                Go Back to Room List
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ReservationForm;
