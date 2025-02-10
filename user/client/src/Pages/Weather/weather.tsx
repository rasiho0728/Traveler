// 2025.02.10. 14:30 생성자: 황보도연, 날씨 api 페이지 추가
import React, { useEffect, useState } from "react";
import '../../css/weather.css';


type WeatherItem = {
    baseDate: string;
    baseTime: string;
    category: string;
    fcstDate: string;
    fcstValue: string;
    fcstTime: string;
    nx: number;
    ny: number;
};

type WeatherData = WeatherItem[];

const Weather = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const locationMap: { [key: string]: { name: string; latitude: number; longitude: number } } = {
        "55127": { name: "서울", latitude: 37.566, longitude: 126.978 },
        "56128": { name: "부산", latitude: 35.179, longitude: 129.070 },
        "53125": { name: "대구", latitude: 35.872, longitude: 128.601 },
        "59126": { name: "광주", latitude: 35.159, longitude: 126.853 },
        "58127": { name: "춘천", latitude: 37.881, longitude: 127.728 },
        "54127": { name: "인천", latitude: 37.456, longitude: 126.705 },
        "57125": { name: "목포", latitude: 34.785, longitude: 126.388 },
        "63126": { name: "제주도", latitude: 33.506, longitude: 126.529 },
    };

    const fetchWeatherData = async () => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        if (!API_KEY) {
            setError("API Key가 설정되지 않았습니다.");
            setLoading(false);
            return;
        }
        const apiUrl = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${API_KEY}&dataType=JSON&base_date=20250210&base_time=0500&nx=55&ny=127`;

        try {
            const response = await fetch(apiUrl, { method: "GET" });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data.response.body.items.item) {
                setWeatherData(data.response.body.items.item);
            } else {
                setError("데이터를 불러오지 못했습니다.");
            }
        } catch (error) {
            setError(`데이터 요청 실패: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <div className="weather-wrapper">
            <h1 className="weather-title">실시간 날씨 정보</h1>
            {loading && <p className="loading-text">⏳ 데이터를 불러오는 중...</p>}
            {error && <p className="error-text">❌ {error}</p>}
            {weatherData && (
                <div className="weather-container">
                    {weatherData.map((item: any, index: number) => {
                        const location = locationMap[`${item.nx}${item.ny}`] || { name: '알 수 없는 지역' };
                        return (
                            <div key={index} className="weather-item">
                                <p className="weather-location-name"><strong>{location.name}</strong></p>
                                <p className="weather-temperature"><strong>{item.fcstValue}°C</strong></p>
                                <div className="weather-date-container">
                                    <p className="weather-forecast-time"><strong>{item.fcstDate} {item.fcstTime}</strong></p>
                                    <p className="weather-base-time"><strong>{item.baseDate} {item.baseTime}</strong></p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};



export default Weather;
