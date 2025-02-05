import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const TourListDetail: React.FC = () => {

    const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div>
      디테일페이지
    </div>
  )
}

export default TourListDetail