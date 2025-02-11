import React, { useEffect, useState } from 'react';
import { updateHalfHeight } from '../Comm/CommomFunc';

interface Subway {
  updnLine: string;
  trainLineNm: string;
  statnNm: string;
  btrainSttus: string;
  bstatnNm: string;
  arvlMsg2: string;
  arvlMsg3: string;
  recptnDt: string;
}

const SubwayDetail: React.FC = () => {
  const [data, setData] = useState<Subway[]>([]);
  const [error, setError] = useState<string | null>(null);

  // JSON 데이터를 가져오는 useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://swopenapi.seoul.go.kr/data/1739263851025.json');
        const result = await response.json(); // JSON 형식으로 바로 받기

        // "realtimeArrivalList"에서 데이터 추출
        setData(result?.realtimeArrivalList || []); // 데이터 구조에 맞게 파싱
      } catch (err) {
        setError('데이터를 가져오는 데 실패했습니다.');
      }
    };
    console.log(data)
    fetchData();
  }, []);

  useEffect(() => {
    updateHalfHeight();
    window.addEventListener("resize", updateHalfHeight);
    return () => {
      window.removeEventListener("resize", updateHalfHeight);
    };
  }, []);

  // 테이블을 렌더링하는 함수
  const renderTable = () => {
    if (!data.length) return <div>데이터 로딩 중...</div>;

    return (
      <table border={1} style={{ width: '100%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>상행/하행</th>
            <th>기차 노선</th>
            <th>역 이름</th>
            <th>기차 상태</th>
            <th>출발 역</th>
            <th>도착 메시지</th>
            <th>도착 메시지 3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.updnLine}</td>
              <td>{item.trainLineNm}</td>
              <td>{item.statnNm}</td>
              <td>{item.btrainSttus}</td>
              <td>{item.bstatnNm}</td>
              <td>{item.arvlMsg2}</td>
              <td>{item.arvlMsg3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <div className='js-halfheight mb-4'
        style={{
          backgroundImage: "url('/images/transport/palace.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center', // 이미지 위치를 중앙에 맞추기
        }}>

      </div>
      <div className="container" style={{height: '100vh', display: 'block' }}>
        {error ? <div>{error}</div> : renderTable()}
      </div>
    </div>
  );
};

export default SubwayDetail;
