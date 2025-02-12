import { useEffect } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import "./css/MapRoad.css";
import { updateHalfHeight } from "../Comm/CommomFunc";
declare global {
  interface Window {
    kakao: any;
  }
}

const MapRoad: React.FC = () => {
  const [map, setMap] = useState<any>(); // 지도 상태
  const [fixedMarker, setFixedMarker] = useState<any>(); // 고정된 마커 상태
  const [infoWindow, setInfoWindow] = useState<any>(); // 인포윈도우 상태
  const [isOpen, setIsOpen] = useState(false); // 인포윈도우 열림/닫힘 상태 추적
>>>>>>> 96881af1e32221ef534c62dd72f864d7b1392c20

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

<<<<<<< HEAD
          new window.kakao.maps.Marker({
            position: options.center,
            map: map,
          });
        });
      }
=======
  useEffect(() => {
    updateHalfHeight();
    window.addEventListener("resize", updateHalfHeight);
    return () => {
      window.removeEventListener("resize", updateHalfHeight);
>>>>>>> 96881af1e32221ef534c62dd72f864d7b1392c20
    };
  }, []);

  return (
<<<<<<< HEAD
    <div className="map-road-container">
      <h1 className="MRheading">여행루트</h1>

      {/* 지도 표시할 div */}
      <div id="map" className="map-container" style={{ width: "500px", height: "400px" }}></div>

      <div className="MRbuttons">
        <Link className="MRbutton" target="_blank" to="https://map.kakao.com/?from=roughmap&eName=서울 서초구 서초대로77길 41">
          길찾기
        </Link>
      </div>
=======
    <div>

      <div className='js-halfheight mb-4'
        style={{
          backgroundImage: "url('/images/transport/palace.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center', // 이미지 위치를 중앙에 맞추기
        }}>

      </div>
      <div className="container">
        <div className="map-road-container">
          {/* 제목 */}
          <h1 className="MRheading">여행루트</h1>

          {/* 지도 영역 */}
          <div id="map" className="map-container"></div>

          <div className="MRbuttons">
            <Link
              className="MRbutton"
              target="_blank"
              to="https://map.kakao.com/?from=roughmap&eName=%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EC%84%9C%EC%B4%88%EB%8C%80%EB%A1%9C77%EA%B8%B8%2041"
            >
              길찾기
            </Link>
          </div>

          {/* 주소 및 연락처 */}
          <p className="MRinfo">
            <span>
              <img
                src="images\transport\MapMarker.png"
                width="42"
                height="34"
                alt="지도 마커"
              />
              <h3>서울시 서초구 서초대로 77길 4층 (누리군청)</h3>
            </span>

            <div className="MRinfo-contact">
              <span className="MRinfo-contact-item">
                <img src="images/transport/Tel.png" width="32" height="24" alt="전화" />
                <span>
                  <b>TEL</b>
                  <br />
                  <b>02-1234-1234</b>
                </span>
              </span>
              <br />
              <span className="MRinfo-contact-item">
                <img src="images/transport/Fax.png" width="32" height="24" alt="팩스" />
                <span>
                  <b>FAX</b>
                  <br />
                  <b>02-1234-1234</b>
                </span>
              </span>
            </div>
          </p>
        </div>
      </div>
>>>>>>> 96881af1e32221ef534c62dd72f864d7b1392c20
    </div>
  );
};

export default MapRoad;
