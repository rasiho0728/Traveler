import React from "react";
import "../../css/search.css"; // CSS 파일 임포트

const SearchBar: React.FC = () => {
    return (
        <div className="home-search-bar">
    {/* 검색어 입력 */}
    <input type="text" className="search-field" placeholder="예: 음식, 호텔, 관광지" />

    {/* 지역 선택 */}
    <select className="location-select">
        <option value="">지역 선택</option>
        <option value="seoul">서울</option>
        <option value="busan">부산</option>
        <option value="jeju">제주</option>
        <option value="gangwon">강원</option>
        <option value="incheon">인천</option>
    </select>

    {/* 인원 선택 */}
    <select className="people-select">
        <option value="">인원 선택</option>
        <option value="1">1명</option>
        <option value="2">2명</option>
        <option value="3">3명</option>
        <option value="4">4명 이상</option>
    </select>

    {/* 출발 날짜 */}
    <div className="date-container">
        <label className="date-label">출발 날짜</label>
        <input type="date" className="date-field" />
    </div>

    {/* 도착 날짜 */}
    <div className="date-container">
        <label className="date-label">도착 날짜</label>
        <input type="date" className="date-field" />
    </div>

    {/* 검색 버튼 */}
    <button className="search-btn">검색</button>
</div>


    );
};

export default SearchBar;
