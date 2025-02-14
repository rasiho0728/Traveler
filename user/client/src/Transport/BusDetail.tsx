import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { updateHalfHeight } from "../Comm/CommomFunc";

// 2025.0211수정: 최의진
interface Bus {
  arrPlaceNm:string;
  arrPlandTime:number;
  depPlaceNm:string;
  depPlandTime:string;
  gradeNm:string
}

const BusDetail: React.FC = () => {
  const [data, setData] = useState<Bus[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      // 새로운 API 호출 (적절한 파라미터와 함께)
      const response = await axios.get(
        'https://apis.data.go.kr/1613000/ExpBusInfoService/getStrtpntAlocFndExpbusInfo?serviceKey=XDMNsafrFJZRccQEUvJz2OG9IvqT7nEe%2FNjC6Twlm5H%2BWSJnH69syP9Su%2BlWuAGnG1DfL9%2FjHAHo6H0YXTMQ9g%3D%3D&pageNo=1&numOfRows=100&_type=json&depTerminalId=NAEK010&arrTerminalId=NAEK700&depPlandTime=20250215&busGradeId=1'
      );

      // JSON 데이터 처리
      const result = response.data.response.body.items;

      // 데이터를 상태에 저장
      setData(result || []);
      setLoading(false);
    } catch (error) {
      setError("데이터 가져오는 중 오류 발생");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    updateHalfHeight();
    window.addEventListener("resize", updateHalfHeight);
    return () => {
      window.removeEventListener("resize", updateHalfHeight);
    };
  }, []);

  // const handleFormClick = () => {
  //   navigate('/traveler/Transport/Road/Form');
  // };

  return (
    <div>
      <style>
        {`
          table {
            width: 80%;
            border-collapse: collapse;
            margin-top: 20px;
            margin: 0 auto;
          }
          th {
            background-color: #f2f2f2;
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          td {
            border: 1px solid #ddd;
            padding: 8px;
          }
          tr:hover, td:hover {
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
          }
        `}
      </style>

      <div
        className="js-halfheight mb-4"
        style={{
          backgroundImage: "url('/images/transport/palace.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>터미널</th>
              <th>버스 등급</th>
              <th>운행사</th>
              <th>노선 정보</th>
              <th>1일자</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} style={{ textAlign: "center" }}>
                  <td>{item["arrPlaceNm"]}</td>
                  <td>{item["arrPlandTime"]}</td>
                  <td>{item["depPlaceNm"]}</td>
                  <td>{item["depPlandTime"]}</td>
                  <td>{item["gradeNm"]}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={10} style={{ textAlign: "center" }}>
                  데이터가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* <button onClick={handleFormClick} style={{ zIndex: 100 }}>
          예매하기
        </button> */}
      </div>
    </div>
  );
};

export default BusDetail;