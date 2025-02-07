import React from 'react'
import { useParams } from 'react-router-dom';

const TourDiaryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      다이어리 디테일 {id} 페이지
    </div>
  )
}

export default TourDiaryDetail