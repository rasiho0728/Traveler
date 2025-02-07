import React, { useState } from "react";
import "../../css/TourMusicRecommended.css";

const TourMusicRecommended: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [location, setLocation] = useState<string | null>(null);
  const [musicList, setMusicList] = useState<{ id: number; title: string; artist: string; cover: string }[]>([]);
  const [loading, setLoading] = useState(false);

  // 사용자 위치 가져오기
  const handleLocation = () => {
    setLoading(true);

    // 실제 위치 가져오기
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("위치 정보: ", position.coords.latitude, position.coords.longitude);

        // 위치 정보를 기반으로 추천 음악을 설정 (예제 데이터)
        setLocation("서울"); // 위치 받아와서 실제 API 연동 가능
        setMusicList([
          { id: 1, title: "서울의 밤", artist: "박효신", cover: "/images/seoul.jpg" },
          { id: 2, title: "부산 바다", artist: "이문세", cover: "/images/busan.jpg" },
          { id: 3, title: "제주도의 푸른밤", artist: "최성원", cover: "/images/jeju.jpg" },
        ]);
        setLoading(false);
      },
      (error) => {
        console.error("위치 정보를 가져올 수 없습니다.", error);
        setLocation("위치 정보를 가져올 수 없음");
        setLoading(false);
      }
    );
  };

  return (
    <div className={`music-recommended-overlay active`}>
      <div className="music-recommended-modal">
        <div className="music-recommended-header">
          <h2>🎵 여행지별 추천 음악</h2>
          <button className="music-recommended-close" onClick={onClose}>✖</button>
        </div>

        <button className="music-recommended-location-btn" onClick={handleLocation}>
          위치 정보 보내기
        </button>

        {loading ? (
          <p className="music-recommended-location">위치 정보를 가져오는 중...</p>
        ) : (
          <>
            {location && <p className="music-recommended-location">현재 위치: {location}</p>}
            <div className="music-recommended-list">
              {musicList.map((music) => (
                <div key={music.id} className="music-recommended-card">
                  <img src={music.cover} alt={music.title} className="music-recommended-cover" />
                  <div className="music-recommended-info">
                    <h3>{music.title}</h3>
                    <p>{music.artist}</p>
                  </div>
                  <button className="music-recommended-play-btn">▶</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TourMusicRecommended;
