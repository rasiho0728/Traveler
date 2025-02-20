import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { appear_animate, updateHalfHeight } from '../Comm/CommomFunc';

interface BusTime {
  arrPlaceNm: string;
  arrPlandTime: number;  // Unix Timestamp로 처리
  depPlaceNm: string;
  depPlandTime: string;  // 원본은 string 형태일 가능성이 있음
  gradeNm: string;
}

const Bus: React.FC = () => {
  const [data, setData] = useState<BusTime[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        'https://apis.data.go.kr/1613000/ExpBusInfoService/getStrtpntAlocFndExpbusInfo?serviceKey=XDMNsafrFJZRccQEUvJz2OG9IvqT7nEe%2FNjC6Twlm5H%2BWSJnH69syP9Su%2BlWuAGnG1DfL9%2FjHAHo6H0YXTMQ9g%3D%3D&pageNo=1&numOfRows=30&_type=json&depTerminalId=NAEK010&arrTerminalId=NAEK700&depPlandTime=20250219&busGradeId=1'
      );
      console.log('응답 데이터:', response.data);  // 응답 구조 확인
  
      // 데이터가 바로 response.data에 있으면 아래와 같이 할 수 있습니다.
      const fetchedData = response.data.data || [];
      // 데이터가 없으면 빈 배열로 설정
      console.log('받은 데이터:', fetchedData);  // 받은 데이터 확인
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
    // ftco-animate 클래스를 가진 요소에 등장 효과 적용
    appear_animate();
  }, [setData]);

  // 날짜 형식 변환 함수
  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleString();  // 날짜를 'MM/DD/YYYY, HH:MM:SS' 형식으로 변환
  };

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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <table
            style={{
              width: '80%',
              margin: '20px auto',
              borderCollapse: 'collapse',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: 'white', color: 'black' }}>
                <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>도착 터미널</th>
                <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>도착 시간</th>
                <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>가격</th>
                <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>출발 터미널</th>
                <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>버스 등급</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.length > 0 ? (
                data.map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      textAlign: 'center',
                      backgroundColor: '#f9f9f9',
                      borderBottom: '1px solid #ddd',
                    }}
                  >
                    <td style={{ padding: '12px 15px' }}>{item.arrPlaceNm}</td>
                    <td style={{ padding: '12px 15px' }}>
                      {formatDate(item.arrPlandTime)} {/* Unix Timestamp 변환 */}
                    </td>
                    <td style={{ padding: '12px 15px' }}>{item.depPlaceNm}</td>
                    <td style={{ padding: '12px 15px' }}>{item.depPlandTime}</td>
                    <td style={{ padding: '12px 15px' }}>{item.gradeNm}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '20px' }}>
                    데이터가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div style={{ padding: '10px', backgroundColor: '#f2f2f2' }}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Bus;
