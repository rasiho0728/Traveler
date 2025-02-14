import React, { useEffect, useState } from 'react';
import { Select, Tag, Card, Row, Col } from "antd";
import "antd/dist/reset.css";
import { LoadingOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const SubwayDetail: React.FC = () => {
  const [selectedLine, setSelectedLine] = useState<string | undefined>(undefined);
  const [trainData, setTrainData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const API_URL = "http://swopenapi.seoul.go.kr/api/subway/47514f676863686c3732766d464674/json/realtimePosition/0/100/";

  // 실시간 데이터 갱신 주기 (예: 30초마다 갱신)
  const pollingInterval = 30000; // 30초

  useEffect(() => {
    const fetchTrainData = () => {
      if (!selectedLine) return;

      setLoading(true);  // 로딩 시작
      fetch(`${API_URL}${encodeURIComponent(selectedLine)}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.realtimePositionList) {
            const filteredData = data.realtimePositionList.map((train: any) => ({
              subwayNm: train.subwayNm || "정보 없음",
              statnNm: train.statnNm || "정보 없음",
              trainNo: train.trainNo || "정보 없음",
              statnTnm: train.statnTnm || "정보 없음",
              trainSttus: train.trainSttus || "정보 없음",
              directAt: train.directAt || "정보 없음",
            }));
            setTrainData(filteredData);
          }
          setLoading(false); // 로딩 종료
        })
        .catch((error) => {
          console.error("Error fetching train data:", error);
          setLoading(false); // 로딩 종료
        });
    };

    // 데이터 갱신
    fetchTrainData();
    const intervalId = setInterval(fetchTrainData, pollingInterval);

    // 컴포넌트 언마운트 시 interval 해제
    return () => clearInterval(intervalId);
  }, [selectedLine]);  // selectedLine 변경 시마다 데이터 갱신

  const getTrainStatusTag = (status: any) => {
    switch (status) {
      case "0": return <Tag color="blue"><CheckCircleOutlined /> 운행 중</Tag>;
      case "1": return <Tag color="blue"><LoadingOutlined /> 진입</Tag>;
      case "2": return <Tag color="green"><CheckCircleOutlined /> 도착</Tag>;
      case "3": return <Tag color="red"><CloseCircleOutlined /> 출발</Tag>;
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
        placeholder="노선 선택"
      >
        {["1호선", "2호선", "3호선", "4호선", "5호선", "6호선", "7호선", "8호선", "9호선"].map((line) => (
          <Select.Option key={line} value={line}>
            {line}
          </Select.Option>
        ))}
      </Select>

      {/* 로딩 중일 때 */}
      {loading ? (
        <div className="text-center">
          <LoadingOutlined spin style={{ fontSize: 24 }} />
          <p>데이터를 불러오는 중...</p>
        </div>
      ) : (
        <Row gutter={16}>
          {trainData.length > 0 ? (
            trainData.map((train: any) => (
              <Col span={8} key={train.trainNo}>
                <Card
                  // title={`열차 ${train.trainNo}`}
                  style={{ marginBottom: 16,padding: '16px'  }}
                  // bodyStyle={{ padding: '16px' }}
                >
                  <p><strong>현재역:</strong> {train.statnNm}</p>
                  <p><strong>목적지:</strong> {train.statnTnm}</p>
                  <p><strong>열차 상태:</strong> {getTrainStatusTag(train.trainSttus)}</p>
                  <p><strong>급행 여부:</strong> {train.directAt === "1" ? "급행" : "일반"}</p>
                </Card>
              </Col>
            ))
          ) : (
            <Col span={24}>
              <Card style={{ marginBottom: 16, textAlign: 'center' }}>
                <p>현재 선택한 노선의 데이터가 없습니다.</p>
              </Card>
            </Col>
          )}
        </Row>
      )}
    </div>
  );
};

export default SubwayDetail;