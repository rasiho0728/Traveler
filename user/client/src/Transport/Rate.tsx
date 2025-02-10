import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../../css/rate.css";
const Rate: React.FC = () => {
    const [step, setStep] = useState(1);
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedDuration, setSelectedDuration] = useState("");
    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
    const [selectedMbti, setSelectedMbti] = useState("");
    const progressPercentage = (step / 4) * 100;

    const regions = [
        { name: "중국", image: "/images/rate/china.jpg" },
        { name: "유럽", image: "/images/rate/europe.jpg" },
        { name: "일본", image: "/images/rate/japan.png" },
        { name: "미국", image: "/images/rate/usa.jpg" },
    ];

    const durations = ["당일여행", "1박 2일", "2박 3일", "3박 이상 ~"];

    const themes = [
        { name: "산", image: "/images/mountain.jpg" },
        { name: "바다", image: "/images/sea.jpg" },
        { name: "실내 여행지", image: "/images/indoor.jpg" },
        { name: "액티비티", image: "/images/activity.jpg" },
        { name: "문화 | 역사", image: "/images/culture.jpg" },
        { name: "테마파크", image: "/images/themepark.jpg" },
        { name: "카페", image: "/images/cafe.jpg" },
        { name: "전통시장", image: "/images/market.jpg" },
        { name: "축제", image: "/images/festival.jpg" },
    ];

    const mbtiOptions = [
        { name: "ISTJ", image: "/images/mbti/istj.jpg" },
        { name: "ISFJ", image: "/images/mbti/isfj.jpg" },
        { name: "INFJ", image: "/images/mbti/infj.jpg" },
        { name: "INTJ", image: "/images/mbti/intj.jpg" },
        { name: "ISTP", image: "/images/mbti/istp.jpg" },
        { name: "ISFP", image: "/images/mbti/isfp.jpg" },
        { name: "INFP", image: "/images/mbti/infp.jpg" },
        { name: "INTP", image: "/images/mbti/intp.jpg" },
        { name: "ESTP", image: "/images/mbti/estp.jpg" },
        { name: "ESFP", image: "/images/mbti/esfp.jpg" },
        { name: "ENFP", image: "/images/mbti/enfp.jpg" },
        { name: "ENTP", image: "/images/mbti/entp.jpg" },
        { name: "ESTJ", image: "/images/mbti/estj.jpg" },
        { name: "ESFJ", image: "/images/mbti/esfj.jpg" },
        { name: "ENFJ", image: "/images/mbti/enfj.jpg" },
        { name: "ENTJ", image: "/images/mbti/entj.jpg" },
    ];

    const toggleSelection = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, max: number = 4) => {
        if (list.includes(item)) {
            setList(list.filter((s) => s !== item));
        } else if (list.length < max) {
            setList([...list, item]);
        }
    };

    return (
        <div className="tour-recommended-container">
            <div className="tour-recommended-box">
            <div className="tour-recommended-progress-bar">
    <div
        className="tour-recommended-progress-fill"
        style={{ width: `${progressPercentage}%` }}
    ></div>
</div>

                {/* Step 1: 여행지 선택 */}
                {step === 1 && (
                    <div>
                        <h3 className="tour-recommended-title">실시간 환율 현황</h3>
                        <div className="tour-recommended-grid">
                            {regions.map((region) => (
                                <button
                                    key={region.name}
                                    className={`tour-recommended-grid-item ${selectedRegion === region.name ? "selected" : ""}`}
                                    onClick={() => setSelectedRegion(region.name)}
                                >
                                    <img src={region.image} alt={region.name} />
                                    <p>{region.name}</p>
                                </button>
                            ))}
                        </div>
                        <div className="tour-recommended-button-container">
                            <button className="tour-recommended-btn" onClick={() => setStep(2)} disabled={!selectedRegion}>다음</button>
                        </div>
                    </div>
                )}

                {/* Step 2: 환율 확인 */}
                {step === 2 && (
                    <div>
                        <h4 className="tour-recommended-title">📅 얼마나 머물 예정인가요?</h4>
                        <h2 className="tour-recommended-subtitle">짧게 훌쩍? 아니면 여유롭게? 당신의 여행 스타일을 정해보세요!</h2>
                        <div className="tour-recommended-text-grid">
                            {durations.map((duration) => (
                                <button
                                    key={duration}
                                    className={`tour-recommended-text-item ${selectedDuration === duration ? "selected" : ""}`}
                                    onClick={() => setSelectedDuration(duration)}
                                >
                                    {duration}
                                </button>
                            ))}
                        </div>
                        <div className="tour-recommended-button-container">
                            <button className="tour-recommended-btn" onClick={() => setStep(1)}>이전</button>
                        </div>
                    </div>
                )}

                
            </div>
        </div>
    );
};

export default Rate;
