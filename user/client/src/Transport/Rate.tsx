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

    const durations = ["1일", "1개월", "3개월", "1년"];

    const RateOptions = [
        { name: "중국", image: "/images/rate/Chinarate.jpg" },
        { name: "유럽", image: "/images/rate/Eurorate.jpg" },
        { name: "일본", image: "/images/rate/Japanrate.jpg" },
        { name: "미국", image: "/images/rate/USARate.jpg" },
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

                {/* Step 1: 국가선택 */}
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

                {/* Step 2: 기간선택택 */}
                {step === 2 && (
                    <div>
                        <h4 className="tour-recommended-title">📅 기간을 클릭하세요</h4>
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
                            <button className="tour-recommended-btn" onClick={() => setStep(3)} disabled={!selectedDuration}>다음</button>

                        </div>
                    </div>
                )}
                {/* Step 4: MBTI 선택 */}
                {step === 3 && (
                    <div>
                        <h4 className="tour-recommended-title">🔍 확인됬습니다</h4>
                        <div className="tour-recommended-grid">
                            {RateOptions.map((Rate) => (
                                <button
                                    key={Rate.name}
                                    className={`tour-recommended-grid-item ${selectedMbti === Rate.name ? "selected" : ""}`}
                                    onClick={() => setSelectedMbti(Rate.name)}
                                >
                                    <img src={Rate.image} alt={Rate.name} />
                                    <p>{Rate.name}</p>
                                </button>
                            ))}
                        </div>
                        <div className="tour-recommended-button-container">
                            <button className="tour-recommended-btn" onClick={() => setStep(3)}>이전</button>
                            <Link to="/result" className={`tour-recommended-btn ${selectedMbti ? "" : "disabled"}`}>완료</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Rate;
