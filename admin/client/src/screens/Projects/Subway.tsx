import React from 'react'
//2025-02-09 오후 11시  -최의진

const Subway: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
    <iframe
        src="https://smss.seoulmetro.co.kr/traininfo/traininfoUserView.do"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="TOPIS"
    />
</div>

  )
}

export default Subway