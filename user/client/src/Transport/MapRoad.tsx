import { useEffect, useState } from "react";
import '../css/maproad.css';
import axios from "axios";

const MapRoad = () => {
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [distance, setDistance] = useState<number | null>(null);

  // 주소를 위도, 경도로 변환하는 함수
  const getCoordinates = async (address: string) => {
    console.log(process.env.REACT_APP_NAVER_CLIENT_ID);
    console.log(process.env.REACT_APP_NAVER_CLIENT_SECRET);

    try {
      //https://naveropenapi.apis.naver.com/map/geocode/v2/geocode?query=%EC%84%9C%EC%9A%B8%EC%97%AD

      const response = await axios.get(
        `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${address}`,
        {
          headers: {
            "x-ncp-apigw-api-key-id": `${process.env.REACT_APP_NAVER_CLIENT_ID}`,
            "x-ncp-apigw-api-key": `${process.env.REACT_APP_NAVER_CLIENT_SECRET}`
          },
        }
      );
      const data = await response.data;

      if (data && data.addresses && data.addresses.length > 0) {
        const { y: lat, x: lng } = data.addresses[0]; // 좌표 추출
        return { lat, lng }; // 좌표 반환
      } else {
        throw new Error("주소를 찾을 수 없습니다.");
      }
    } catch (error: any) {
      throw new Error(`Geocoding API 호출 실패: ${error.message}`);
    }
  };

  const findRoute = async () => {
    if (!startPoint || !endPoint) {
      alert("출발지와 도착지를 입력해주세요.");
      return;
    }

    try {
      // 출발지와 도착지 주소를 좌표로 변환
      const startCoords = await getCoordinates(startPoint);
      const endCoords = await getCoordinates(endPoint);

      // 경로 요청 URL을 좌표로 수정하여 경로 요청
      const response = await fetch(
        `https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving?start=${startCoords.lat},${startCoords.lng}&goal=${endCoords.lat},${endCoords.lng}`,
        {
          headers: {
            "x-ncp-apigw-api-key-id": process.env.REACT_APP_NAVER_CLIENT_ID!,
            "x-ncp-apigw-api-key": process.env.REACT_APP_NAVER_CLIENT_SECRET!,
          },
        }
      );

      if (!response.ok) throw new Error("API 요청 실패");

      const data = await response.json();
      console.log(data);  // 응답 데이터 확인

      if (data?.route?.traoptimal) {
        const route = data.route.traoptimal[0];
        setDistance(route.summary.distance);
        alert(`총 거리: ${route.summary.distance}m`);
      } else {
        alert("길찾기 실패: 응답에 경로 정보 없음");
      }
    } catch (error: any) {
      alert(`에러 발생: ${error.message}`);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_CLIENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(37.5665, 126.9780),
        zoom: 10,
      });
    };
  }, []);

  return (
    <div className="MR-container">
      <h1 className="MR-heading">최단 경로 찾기</h1>
      <div className="MR-input-area">
        <input
          type="text"
          placeholder="출발지"
          value={startPoint}
          onChange={(e) => setStartPoint(e.target.value)}
        />
        <input
          type="text"
          placeholder="도착지"
          value={endPoint}
          onChange={(e) => setEndPoint(e.target.value)}
        />
        <button onClick={findRoute}>길찾기</button>
      </div>
      <div id="map" className="MR-map"></div>
      {distance && <p>총 거리: {distance}m</p>}
    </div>
  );
};

export default MapRoad;
