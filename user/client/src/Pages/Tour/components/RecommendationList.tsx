import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Tour {
    num: number;
    name: string;
    location: string;
    thumbnail: string;
}

// ✅ place props의 타입을 명확하게 정의
interface RecommendationProps {
    place: string;
}

const RecommendationList: React.FC<RecommendationProps> = ({ place }) => {
    const [randomTour, setRandomTour] = useState<Tour | null>(null);

    useEffect(() => {
        axios.get("http://localhost:81/userBack/api/tours") // ✅ 백엔드에서 전체 투어 목록 가져오기
            .then((response) => {
                const tours: Tour[] = response.data; // 투어 목록
                if (tours.length > 0) {
                    const randomIndex = Math.floor(Math.random() * tours.length);
                    setRandomTour(tours[randomIndex]); // ✅ 랜덤한 투어 선택
                }
            })
            .catch((error) => console.error("랜덤 추천 여행지 불러오기 실패:", error));
    }, []);

    return (
        <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }}>
            <h3 className="tour-recommendation-title">랜덤 추천 여행지</h3>

            {randomTour ? (
                <div className="tour-destination">
                    <Link to={`/traveler/tour/${randomTour.num}`}
                        className="img img-2 d-flex justify-content-center align-items-center"
                        style={{
                            backgroundImage: `url(/images/${randomTour.thumbnail || "default.jpg"})`,
                            height: "200px",
                            backgroundSize: "cover",
                            borderRadius: "10px",
                            position: "relative"
                        }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search2"></span>
                        </div>
                    </Link>
                    <div className="text p-3">
                        <h3 className="tour-recommendation-place">{randomTour.name}</h3>
                        <p className="tour-recommendation-text">
                            {`이번 여행 `} <strong>{randomTour.name}</strong> {`은(는) 어떠신가요?`}
                        </p>
                    </div>
                </div>
            ) : (
                <p>추천할 여행지를 찾는 중...</p>
            )}
        </div>
    );
};

export default RecommendationList;
