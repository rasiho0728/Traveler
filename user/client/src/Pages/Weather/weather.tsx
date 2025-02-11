import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/weather.css';

// 날씨 데이터 타입 정의
interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: { description: string }[];
}

const Weather: React.FC = () => {  // 컴포넌트 이름을 'Weather'로 변경
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = 'aa2d59dd0a87d732b6e046ec34f9b53c';
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;

  // 날씨 데이터 불러오기 함수
  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const response = await axios.get<WeatherData>(URL);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('날씨 정보를 불러오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div className="weather-container">
      <h1 className="weather-header">실시간 날씨</h1>
      <select className="weather-select" onChange={(e) => setCity(e.target.value)} value={city}>
        <option value="">지역을 선택하세요</option>
        <option value="Seoul">서울</option>
        <option value="Busan">부산</option>
        <option value="Incheon">인천</option>
        <option value="Incheon">대구</option>
        <option value="Incheon">제주도</option>
      </select>

      {loading && <p>불러오는 중...</p>}
      {error && <p>{error}</p>}

      {weatherData && !loading && (
        <div className="weather-info">
          <h2>{weatherData.name}의 날씨</h2>
          <p>온도: {weatherData.main.temp}°C</p>
          <p>상태: {weatherData.weather[0].description}</p>
          <p>습도: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
