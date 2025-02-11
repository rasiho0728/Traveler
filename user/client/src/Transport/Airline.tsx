import axios from 'axios';
import React, { useEffect, useState } from 'react'
// 2025.02011수정. 최의진,
//"https://sky.interpark.com/schedules/domestic/CJU-GMP-20250212?adt=2&chd=0&inf=0&seat=DOMESTIC_BASE&pickAirLine=&pickMainFltNo=&pickSDate="

const Airline: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {  //순서2 try catch문
            const response = await axios.get(
                'https://api.odcloud.kr/api/15003087/v1/uddi:705bfaaa-1fee-4b3c-8e89-cbbf0fd57748?page=1&perPage=30&serviceKey=XDMNsafrFJZRccQEUvJz2OG9IvqT7nEe%2FNjC6Twlm5H%2BWSJnH69syP9Su%2BlWuAGnG1DfL9%2FjHAHo6H0YXTMQ9g%3D%3D'
                //순서3
            );
            setData(response.data.data);
        } catch (error) {
            setError(`데이터 가져오는중 오류 발생`);
        } finally {
            setLoading(false); //로딩 또는 에러를 멈출려고 존재하는것.
        }
    };
  useEffect(() => {
        fetchData();
    }, []); 

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>{/* Header */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
                <table style={{ width: '80%', margin: '20px auto', borderCollapse: 'collapse', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#4CAF50', color: 'black' }}>
                            <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>항공사</th>
                            <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>운항편명</th>
                            <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>출발공항</th>
                            <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>도착공항</th>
                            <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>출발시간</th>
                            <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>도착시간</th>
                            <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>운항요일</th>
                            <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>국내_국제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} style={{ textAlign: "center", backgroundColor: "#f9f9f9", borderBottom: '1px solid #ddd' }}>
                                <td style={{ padding: '12px 15px' }}>{item["항공사"]}</td>
                                <td style={{ padding: '12px 15px' }}>{item["운항편명"]}</td>
                                <td style={{ padding: '12px 15px' }}>{item["출발공항"]}</td>
                                <td style={{ padding: '12px 15px' }}>{item["도착공항"]}</td>
                                <td style={{ padding: '12px 15px' }}>{item["출발시간"]}</td>
                                <td style={{ padding: '12px 15px' }}>{item["도착시간"]}</td>
                                <td style={{ padding: '12px 15px' }}>{item["운항요일"]}</td>
                                <td style={{ padding: '12px 15px' }}>{item["국내_국제"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ padding: '10px', backgroundColor: '#f2f2f2' }}>
                
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
}

export default Airline;