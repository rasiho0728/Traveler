import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { updateHalfHeight } from '../Comm/CommomFunc';

interface BusTime {
  arrPlaceNm: string;
  arrPlandTime: number;
  depPlaceNm: string;
  depPlandTime: string;
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
        'https://apis.data.go.kr/1613000/ExpBusInfoService/getStrtpntAlocFndExpbusInfo?serviceKey=XDMNsafrFJZRccQEUvJz2OG9IvqT7nEe%2FNjC6Twlm5H%2BWSJnH69syP9Su%2BlWuAGnG1DfL9%2FjHAHo6H0YXTMQ9g%3D%3D&pageNo=1&numOfRows=10&_type=json&depTerminalId=NAEK010&arrTerminalId=NAEK300&depPlandTime=20250214&busGradeId=1'
      );
      const fetchedData = response.data?.data || []; // 데이터가 없으면 빈 배열로 설정
      console.log(data)
      setData(fetchedData);
    } catch (error) {
      setError('데이터 가져오는중 오류 발생');
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
                <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>
                  도착 터미널
                </th>
                <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>
                  도착 시간
                </th>
                <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>
                  가격
                </th>
                <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>
                  출발 터미널
                </th>
                <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>
                  버스 등급
                </th>
              </tr>
            </thead>
            <tbody>
              {/* data가 배열로 존재하고, 길이가 0 이상일 때만 map 호출 */}
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
                    <td style={{ padding: '12px 15px' }}>{item.arrPlandTime}</td>
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
