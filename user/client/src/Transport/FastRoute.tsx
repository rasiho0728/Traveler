import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        kakao: any;
    }
}

const FastRoute: React.FC<{ lat: number, lng: number }> = ({ lat, lng }) => {
    const mapRef = useRef<HTMLDivElement>(null); // 지도를 표시할 div를 참조

    const displayMap = (lat: number, lng: number) => {
        if (!window.kakao || !window.kakao.maps || !window.kakao.maps.LatLng) {
            console.error("카카오맵 API가 올바르게 로드되지 않았습니다.");
            return;
        }

        const latLng = new window.kakao.maps.LatLng(lat, lng);
        const container = mapRef.current;
        if (container) {
            const options = {
                center: latLng,
                level: 2,
            };

            const kakaoMap = new window.kakao.maps.Map(container, options);

            const marker = new window.kakao.maps.Marker({
                position: latLng,
            });
            marker.setMap(kakaoMap);

            kakaoMap.setDraggable(false);
            kakaoMap.setZoomable(false);
        } else {
            console.error('카카오맵 div 컨테이너가 올바르게 설정되지 않았습니다.');
        }
    };

    useEffect(() => {
        if (!window.kakao) {
            const script = document.createElement('script');
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=0b998fb74842d1e39d265724fb1257fc&autoload=false`;
            script.onload = () => {
                window.kakao.maps.load(() => {
                    displayMap(lat, lng);
                });
            };
            document.head.appendChild(script);
        } else {
            window.kakao.maps.load(() => {
                displayMap(lat, lng);
            });
        }
    }, [lat, lng]);

    return (
        <div style={{ display: 'flex', justifyContent: 'start' }}>
            <div ref={mapRef} style={{ width: '300px', height: '300px' }}></div>
            <div style={{ width: '45%', paddingLeft: '20px' }}>
                <h3>장소 이름</h3>
                <p>주소: 주소가 여기에 나옵니다.</p>
            </div>
        </div>
    );
};

export default FastRoute;
