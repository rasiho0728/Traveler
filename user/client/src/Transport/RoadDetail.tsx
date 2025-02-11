import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'
import { Link, useNavigate, } from "react-router-dom";
// 2025.0206. 19:00 수정정: 최의진,

const RoadDetail: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const apiKey = '63f51014-780e-4b0e-a8fd-e0cc3dcb9415';

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(
                `https://apigw.tmoney.co.kr:5556/invoke/pub.apigateway.oauth2/getAccessToken?apiKey=${apiKey}`
            );
            setData(response.data.data);
        } catch (error) {
            setError(`데이터 가져오는중 오류 발생`);
        } finally {
            setLoading(false);
        }
    };

    const handleFormClick = () => {
        navigate('/traveler/Transport/Road/Form');
    };

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
              background-color: orange;
              cursor: pointer;
            }
          `}
            </style>
            <button onClick={fetchData} disabled={loading} style={{ zIndex: 100 }} >
                {loading ? '로딩중..' : '데이터가져오기'}
            </button>
            <button onClick={handleFormClick} style={{ zIndex: 100 }}>
                예매하기
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <table>
                <thead>
                    <tr>
                        <th>출발</th>
                        <th>도착</th>
                        <th>고속사</th>
                        <th>등급</th>
                        <th>총인원</th>
                        <th>좌석번호</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} style={{ textAlign: "center" }}>
                            <td>{item["출발"]}</td>
                            <td>{item["도착"]}</td>
                            <td>{item["고속사"]}</td>
                            <td>{item["등급"]}</td>
                            <td>{item["총인원"]}</td>
                            <td>{item["좌석번호"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <tfoot>
                <tr>
                    <td colSpan={2}></td>
                </tr>
            </tfoot>
        </div>
    );
}

export default RoadDetail;