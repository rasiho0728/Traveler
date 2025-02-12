import React, { useEffect, useState } from 'react';
import { Select, Table, Tag } from "antd";
import "antd/dist/reset.css";
// interface Subway {
//   updnLine: string;
//   trainLineNm: string;
//   statnNm: string;
//   btrainSttus: string;
//   bstatnNm: string;
//   arvlMsg2: string;
//   arvlMsg3: string;
//   recptnDt: string;
// }

const SubwayDetail: React.FC = () => {
  const [selectedLine, setSelectedLine] = useState("4호선");
  const [trainData, setTrainData] = useState([]);
  const API_URL = "http://swopenapi.seoul.go.kr/api/subway/47514f676863686c3732766d464674/json/realtimePosition/0/50/";

  useEffect(() => {
    fetch(`${API_URL}${encodeURIComponent(selectedLine)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.realtimePositionList) {
          const filteredData = data.realtimePositionList.map((train:any) => ({
            subwayNm: train.subwayNm || "정보 없음",
            statnNm: train.statnNm || "정보 없음",
            trainNo: train.trainNo || "정보 없음",
            trainSttus: train.trainSttus || "정보 없음",
            directAt: train.directAt || "정보 없음",
          }));
          setTrainData(filteredData);
        }
      })
      .catch((error) => console.error("Error fetching train data:", error));
  }, [selectedLine]);

  const getTrainStatusTag = (status:any) => {
    switch (status) {
      case "0": return <Tag color="default">운행 중</Tag>;
      case "1": return <Tag color="blue">진입</Tag>;
      case "2": return <Tag color="green">도착</Tag>;
      case "3": return <Tag color="red">출발</Tag>;
      default: return <Tag color="gray">정보 없음</Tag>;
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">🚇 실시간 지하철 현황</h1>
      <Select
        className="w-full mb-4"
        value={selectedLine}
        onChange={setSelectedLine}
      >
        {["1호선", "2호선", "3호선", "4호선", "5호선", "6호선", "7호선", "8호선", "9호선"].map((line) => (
          <Select.Option key={line} value={line}>
            {line}
          </Select.Option>
        ))}
      </Select>
      <Table
        dataSource={trainData}
        columns={[
          { title: "노선", dataIndex: "subwayNm", key: "subwayNm" },
          { title: "현재역", dataIndex: "statnNm", key: "statnNm" },
          { title: "열차번호", dataIndex: "trainNo", key: "trainNo" },
          { title: "열차 상태", dataIndex: "trainSttus", key: "trainSttus", render: getTrainStatusTag },
          { title: "급행 여부", dataIndex: "directAt", key: "directAt", render: (direct) => (direct === "1" ? "급행" : "일반") },
        ]}
        rowKey="trainNo"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}

export default SubwayDetail;
