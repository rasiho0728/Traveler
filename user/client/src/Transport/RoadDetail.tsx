import { useEffect } from "react";
import React from 'react'
// 2025.0206. 19:00 수정정: 최의진,

const RoadDetail: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
          <iframe
            src="https://topis.seoul.go.kr/"
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="TOPIS"
          />
        </div>)
}

export default RoadDetail
