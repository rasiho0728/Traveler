import React, { useEffect, useState } from 'react'
// 2025.0207. 11:00 추가: 최의진,
//"https://sky.interpark.com/schedules/domestic/CJU-GMP-20250212?adt=2&chd=0&inf=0&seat=DOMESTIC_BASE&pickAirLine=&pickMainFltNo=&pickSDate="

const Airline: React.FC = () => {

    return (
        <div style={{ width: '100%', height: '100vh' }}>
          <iframe
            src="https://sky.interpark.com/schedules/domestic/CJU-GMP-20250212?adt=2&chd=0&inf=0&seat=DOMESTIC_BASE&pickAirLine=&pickMainFltNo=&pickSDate="
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="TOPIS"
          />
        </div>)

}
export default Airline