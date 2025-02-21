import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { appear_animate, updateHalfHeight } from '../Comm/CommomFunc';
import "../css/bus.css";
import { Link } from 'react-router-dom';

interface BusTime {
  arrPlaceNm: string;
  depPlaceNm: string;
  depPlandTime: number;
  arrPlandTime: number;
  gradeNm: string;
  charge: number;
}

const Bus: React.FC = () => {
  const [data, setData] = useState<BusTime[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // API Key 설정
  const API_KEY = 'XDMNsafrFJZRccQEUvJz2OG9IvqT7nEe%2FNjC6Twlm5H%2BWSJnH69syP9Su%2BlWuAGnG1DfL9%2FjHAHo6H0YXTMQ9g%3D%3D';
  
  // 날짜 형식 변환 함수
  const formatDate = (timestamp: number): string => {
    const hour = Math.floor((timestamp % 10000) / 100); // Extract hour
    const minute = timestamp % 100; // Extract minute
    return `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
  };

  // 데이터 Fetching 함수
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://apis.data.go.kr/1613000/ExpBusInfoService/getStrtpntAlocFndExpbusInfo?serviceKey=${API_KEY}&pageNo=1&numOfRows=30&_type=json&depTerminalId=NAEK010&arrTerminalId=NAEK700&depPlandTime=20250219&busGradeId=1`
      );
      const fetchedData = response.data.response.body.items.item || [];
      setData(fetchedData);
    } catch (error) {
      setError('데이터 가져오는중 오류 발생');
      console.error('데이터 가져오기 오류:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    updateHalfHeight();
    window.addEventListener('resize', updateHalfHeight);
    return () => {
      window.removeEventListener('resize', updateHalfHeight);
    };
  }, []);

  useEffect(() => {
    appear_animate();
  }, [setData]);

  return (
    <div>
      <div
        className="js-halfheight mb-4"
        style={{
          backgroundImage: 'url("/images/transport/palace.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="buscontainer">
        <div className="row">
          <div className="buslist">
            <div className="sidebar-wrap bg-light ftco-animate">
              <h2 className="heading mb-4" style={{ textAlign: "center" }}>배차 조회</h2>
            </div>
          </div>
        </div>
        <div className="destination">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {loading ? (
                <div className="loading">
                  <p>로딩 중...</p>
                </div>
              ) : (
                <table className="businformation">
                  <thead>
                    <tr>
                      <th>출발 터미널</th>
                      <th>출발 시간</th>
                      <th>도착 터미널</th>
                      <th>도착 시간</th>
                      <th>가격</th>
                      <th>선택</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(data) && data.length > 0 ? (
                      data.map((item, index) => {
                        const params = new URLSearchParams({
                          depPlaceNm: item.depPlaceNm,
                          arrPlaceNm: item.arrPlaceNm,
                          depPlandTime: item.depPlandTime.toString(),
                          arrPlandTime: item.arrPlandTime.toString(),
                          charge: item.charge.toString(),
                        }).toString();

                        return (
                          <tr key={index}>
                            <td>{item.depPlaceNm}</td>
                            <td>{formatDate(item.depPlandTime)}</td>
                            <td>{item.arrPlaceNm}</td>
                            <td>{formatDate(item.arrPlandTime)}</td>
                            <td>{item.charge}원</td>
                            <td>
                              <Link to={`/traveler/Transport/busform/bus/reservation?${params}`}>
                                선택
                              </Link>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={6} className="error">데이터가 없습니다.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
            <div style={{ padding: '10px', backgroundColor: '#f2f2f2' }}>
              {error && <p className="error">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bus;
