import React from 'react'
//2025-02-09 오후 11시  -최의진

const AirlineDetail: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
    <iframe
      src="https://sky.interpark.com/schedules/domestic/CJU-GMP-20250212?adt=2&chd=0&inf=0&seat=DOMESTIC_BASE&pickAirLine=&pickMainFltNo=&pickSDate="
      style={{ width: '100%', height: '100%', border: 'none' }}
      title="TOPIS"
    />
  </div>
  )
}

export default AirlineDetail