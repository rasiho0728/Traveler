import React, { useEffect, useState } from 'react'
// 2025.0206. 19:00 수정: 최의진,

import xml2js from 'xml2js';



const SubwayDetail: React.FC = () => {
    const [xmlData, setXmlData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    // XML 데이터를 파싱하는 함수
    const parseXmlData = (data: string) => {
        xml2js.parseString(data, (error:Error | null, result : any) => {
            if (error) {
                setError("XML 파싱 오류");
                return;
            }
            console.log(data)
            setXmlData(result);
        });
    };

    // XML 파일을 가져오는 useEffect
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://swopenapi.seoul.go.kr/api/subway/534d626f6863686c38355961596644/xml/realtimeStationArrival/ALL');
                const text = await response.text();
                parseXmlData(text);
            } catch (err) {
                setError('데이터를 가져오는 데 실패했습니다.');
            }
        };
        fetchData();
    }, []);

    // XML 데이터를 테이블로 변환
    const renderTable = () => {
        if (!xmlData) return <div>데이터 로딩 중...</div>;

        const rows = xmlData?.response?.body?.items[0]?.item || [];

        return (
            <table>
                <thead>
                    <tr>
                        <th>기차 이름</th>
                        <th>운행 정보</th>
                        <th>지연 여부</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row: any, index: number) => (
                        <tr key={index}>
                            <td>{row.trainName[0]}</td>
                            <td>{row.operatingInfo[0]}</td>
                            <td>{row.delayStatus[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div style={{ width: '100%', height: '100vh', display: 'block' }}>
            {error ? <div>{error}</div> : renderTable()}
        </div>
    );
};

export default SubwayDetail