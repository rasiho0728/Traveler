import axios from 'axios';
import React, { useState } from 'react'
//2025-02-09 오후 11시  -최의진

const Airline: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {  //순서2 try catch문
            const response = await axios.get(
                'https://api.odcloud.kr/api/15003087/v1/uddi:9bf2212e-7928-4437-bd95-ee7e714a0987?page=1&perPage=10&serviceKey=slzpzK8stOwRh%252FjDOXjABJTbNvy%252BpbR8g9wMOXZTnVmdRjeb3yCUvLxqm2mMQMgTCXuEPXnMbxFliJeSMu1a%252BA%253D%253D'
                //순서3
            );
            setData(response.data.data);
        } catch (error) {
            setError(`데이터 가져오는중 오류 발생`);
        } finally {
            setLoading(false); //로딩 또는 에러를 멈출려고 존재하는것. 만약에 없으면 계속 로딩중으로 나온다.
        }


    };
    return (
        <div>
            <style>
                {`
              table{
                  width:80%;
                  border-collapsecollapse;
                  margin-top:20px auto;
                  }
              th{
              background-color:#f2f2f2;
              border:1px solid #ddd;
              padding:8px;
              text-allign:left;
              }
              td{
              border:1px solid #ddd;
              padding:8px;
              }
              tr:hover,td:hover{
              background-color:orange;
              cursor:pointer;     
              }
                  `
                }      {/**cursor:pointer는 마우스 올라가면 손가락 모양으로 변함 */}
            </style>
            <button onClick={fetchData} disabled={loading}>
                {loading ? '로딩중..' : '데이터가져오기'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table>
                <thead>
                    <tr className="hero-wrap js-fullheight" >
                        <th>항공사</th>
                        <th>운항편명</th>
                        <th>출발공항</th>
                        <th>도착공항</th>
                        <th>출발시간</th>
                        <th>도착시간</th>
                        <th>운항요일</th>
                        <th>국내_국제</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr className="hero-wrap js-fullheight" key={index} style={{ textAlign: "center", backgroundColor: "black" }}>
                            <td>{item["항공사"]}</td>
                            <td>{item["운항편명"]}</td>
                            <td>{item["출발공항"]}</td>
                            <td>{item["도착공항"]}</td>
                            <td>{item["출발시간"]}</td>
                            <td>{item["도착시간"]}</td>
                            <td>{item["운항요일"]}</td>
                            <td>{item["국내_국제"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default Airline