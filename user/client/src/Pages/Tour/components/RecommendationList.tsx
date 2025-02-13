import React from "react";
import { Link } from "react-router-dom";

interface RecommendationProps {
    place: string;
}

const placeNameMap: { [key: string]: string } = {
    "서울": "seoul",
    "부산": "busan",
    "제주": "jeju",
    "강원도": "kangwon",
};

const RecommendationList: React.FC<RecommendationProps> = ({ place }) => {
    const imageName = placeNameMap[place] || "default";  // ✅ 매핑 없을 경우 기본 이미지 사용

    return (
        <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }}>
            <h3 className="tour-recommendation-title">랜덤 추천 여행지</h3>
            <div className="destination">
                <Link to={`/traveler/tour/${place}`} className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: `url(/images/${imageName}.jpg)`, height: "200px", backgroundSize: "cover", borderRadius: "10px" }}>
                    <div className="icon d-flex justify-content-center align-items-center">
                        <span className="icon-search2"></span>
                    </div>
                </Link>
                <div className="text p-3">
                    <h3 className="tour-recommendation-place">{place}</h3>
                    <p className="tour-recommendation-text">
  {`이번 여행 `} <strong>{place}</strong> {`은(는) 어떠신가요?`}
</p>
                </div>
            </div>
        </div>
    );
};

export default RecommendationList;
