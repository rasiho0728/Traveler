import { useEffect } from "react";
import React from 'react'
// 2025.0205. 19:00 생성자: 최의진, HTML템플릿을 리엑트로 조정

const TransportDetail: React.FC = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://swopenAPI.seoul.go.kr/api/subway/534d626f6863686c38355961596644/xml/realtimeStationArrival/0/5/서울"
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const text = await response.text();
                alert(
                    `Status: ${response.status}\nHeaders: ${JSON.stringify(
                        [...response.headers.entries()]
                    )}\nBody: ${text}`
                );
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return <div>서울시 열린데이터 광장 OpenAPI 샘플 (React)</div>;
}

export default TransportDetail
