import React, { useEffect, useState } from 'react';
import '../../css/tourSchedule.css';
import { Link } from 'react-router-dom';
import { color } from 'framer-motion';

const TourSchedule: React.FC = () => {
    
    const [selectedDay, setSelectedDay] = useState(1);
    const [editMode, setEditMode] = useState(false);
    const [scheduleData, setScheduleData] = useState<Record<number, { title: string; type: string; description: string }[]>>({
        1: [
            { title: "강릉 중앙 시장", type: "쇼핑", description: "강릉 대표 간식거리가 모두 모여있는 전통 시장" },
            { title: "순두부 젤라또 1호점", type: "카페/디저트", description: "‘베틀트립’에 출연한, 부드럽고 고소한 맛이 일품인 순두부 젤라또" },
            { title: "안목 해변", type: "관광명소", description: "강릉 커피 거리가 위치한 강릉의 대표 해변" },
            { title: "호텔 탑스텐 정동진", type: "숙소", description: "일출의 명소 정동진에 자리 잡은 최고의 뷰 포인트 호텔" }
        ],
        2: [
            { title: "경포 해변", type: "관광명소", description: "강릉에서 가장 유명한 해변 중 하나" },
            { title: "초당순두부마을", type: "음식", description: "강릉 초당순두부 거리를 대표하는 음식 명소" }
        ]
    });

    const handleSaveSchedule = () => {
        alert("일정이 내 일정으로 저장되었습니다!");
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleTitleChange = (day: number, index: number, newTitle: string) => {
        const newSchedule = { ...scheduleData };
        newSchedule[day][index].title = newTitle;
        setScheduleData(newSchedule);
    };

    return (
        <div className="tour-schedule-container">
            <h2 className="tour-schedule-title">여행 일정</h2>
            <div className="tour-schedule-tabs">
                <button className={`tour-schedule-tab-btn ${selectedDay === 1 ? "active" : ""}`} onClick={() => setSelectedDay(1)}>Day 1</button>
                <button className={`tour-schedule-tab-btn ${selectedDay === 2 ? "active" : ""}`} onClick={() => setSelectedDay(2)}>Day 2</button>
            </div>
            <div className="tour-schedule-timeline">
                {scheduleData[selectedDay]?.map((item, index) => (
                    <div key={index} className="tour-schedule-step">
                        <div className="tour-schedule-step-number">{index + 1}</div>
                        <div className="tour-schedule-step-content">
                            {editMode ? (
                                <input
                                    type="text"
                                    value={item.title}
                                    onChange={(e) => handleTitleChange(selectedDay, index, e.target.value)}
                                    className="tour-schedule-edit-input"
                                />
                            ) : (
                                <h4 className="tour-schedule-step-title">{item.title} <small>({item.type})</small></h4>
                            )}
                            <p className="tour-schedule-step-desc">{item.description}</p>
                        </div>
                    </div>
                )) || <p className="tour-schedule-no-data">일정이 없습니다.</p>}
            </div>
            <div className="tour-schedule-buttons">
                <button className="tour-schedule-save-btn" onClick={handleSaveSchedule}>내 일정으로 담기</button>
                <button className="tour-schedule-edit-btn" onClick={toggleEditMode}>{editMode ? "완료" : "내 입맛대로 수정"}</button>
                <button className="tour-schedule-ref-btn" ><Link to="/traveler/community">다른 일정 구경하기</Link></button>
            </div>
        </div>
    );
};

export default TourSchedule;
