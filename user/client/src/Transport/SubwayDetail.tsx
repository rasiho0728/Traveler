import React from 'react'
// 2025.0206. 19:00 수정: 최의진,

const SubwayDetail: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100vh',display:'block',marginBottom:'20px',zIndex:-1}}>
            <iframe
                src="https://smss.seoulmetro.co.kr/traininfo/traininfoUserView.do"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="TOPIS"
            />
        </div>
  )
}

export default SubwayDetail