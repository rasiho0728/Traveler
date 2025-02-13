import { useEffect } from "react";
import { Link } from "react-router-dom";

const MapRoad = () => {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=fb83928f27efe8bbd0139820c1c6ef6e&autoload=false`;
    kakaoMapScript.async = true;
    document.head.appendChild(kakaoMapScript);

    kakaoMapScript.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.9780),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);

          new window.kakao.maps.Marker({
            position: options.center,
            map: map,
          });
        });
      }
    };
  }, []);

  return (
    <div className="map-road-container">
      <h1 className="MRheading">여행루트</h1>

      {/* 지도 표시할 div */}
      <div id="map" className="map-container" style={{ width: "500px", height: "400px" }}></div>

      <div className="MRbuttons">
        <Link className="MRbutton" target="_blank" to="https://map.kakao.com/?from=roughmap&eName=서울 서초구 서초대로77길 41">
          길찾기
        </Link>
      </div>
    </div>
  );
};

export default MapRoad;
