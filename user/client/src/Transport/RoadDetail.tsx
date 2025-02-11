import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";

// 2025.0211수정: 최의진
interface Bus {
    area:number;
    busclass: string;
    cpname: string;
    routeinfo: string;
    t1wdayt: string;
    t1wt: string;
    t2wdayt: string;
    t2wt: string;
    t1ridelo: string;
    t2ridelo: string;
}

const RoadDetail: React.FC = () => {
    const [data, setData] = useState<Bus[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            // JSON 형식으로 데이터를 받아옴
            const response = await axios.get(
                'https://apis.data.go.kr/B551177/BusInformation/getBusInfo?serviceKey=XDMNsafrFJZRccQEUvJz2OG9IvqT7nEe%2FNjC6Twlm5H%2BWSJnH69syP9Su%2BlWuAGnG1DfL9%2FjHAHo6H0YXTMQ9g%3D%3D&numOfRows=10&pageNo=1&area=1&type=json'
            );

            // JSON 데이터를 가져옴
            const result = response.data.response.body.items;

            // 버스 정보만 추출
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
                    background-color: rgba(0, 0, 0, 0.5);
                    cursor: pointer;
                }
                `}
            </style>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <table>
                <thead>
                    <tr>
                        <th>터미널</th>
                        <th>버스 등급</th>
                        <th>운행사</th>
                        <th>노선 정보</th>
                        <th>1일자</th>
                        <th>1시간</th>
                        <th>2일자</th>
                        <th>2시간</th>
                        <th>1차 하차</th>
                        <th>2차 하차</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index} style={{ textAlign: "center" }}>
                                <td>{item["area"]}</td>
                                <td>{item["busclass"]}</td>
                                <td>{item["cpname"]}</td>
                                <td>{item["routeinfo"]}</td>
                                <td>{item["t1wdayt"]}</td>
                                <td>{item["t1wt"]}</td>
                                <td>{item["t2wdayt"]}</td>
                                <td>{item["t2wt"]}</td>
                                <td>{item["t1ridelo"]}</td>
                                <td>{item["t2ridelo"]}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={9} style={{ textAlign: "center" }}>
                                데이터가 없습니다.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={handleFormClick} style={{ zIndex: 100 }}>
                예매하기
            </button>
        </div>
    );
};

export default RoadDetail;
