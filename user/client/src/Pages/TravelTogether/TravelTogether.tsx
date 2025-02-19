import React from 'react'
import "../../css/travelTogether.css";

const TravelTogether: React.FC = () => {
    
  return (
    <div className='TravelTogether'>
        <div className='t-container'>
            <div className="img-box">
                <img src="/images/travelFriend.jpg" alt="여행친구" />
                <div className='tt-box'>
                    <span>누군가와 추억을 쌓고 싶을때</span>
                    <h2>함께 떠나요</h2>
                </div>
            </div>
            <div className='inner'>
                <div className='travel-section'>
                    <div className='travel-chart'>
                        <span>구현중</span>
                    </div>
                    <div className='friend'>
                        <h2>함께 떠날 친구를 찾아보세요!</h2>
                        <div className='f-list'>
                            <ul className='friend-list-big'>
                                <li>
                                    <a href="#">친구목록</a>
                                </li> {/* 검색도 있도록 만들기1 */}
                                <li>
                                    <a href="#">친구추가</a>
                                </li> {/* 검색도 있도록 만들기2 */}
                                <li>
                                    <a href="#">친구신청</a>
                                </li>
                            </ul>
                            <div className='f-box'>
                                <ul>
                                    <li><img src="/images/pizza.PNG" alt="치즈피자" />테스형1 <span>내용을 적어주세요.</span></li>
                                    <li><img src="/images/pizza.PNG" alt="치즈피자" />테스형2 <span>여행이 곧 삶, 삶이 곧 여행</span></li>
                                    <li><img src="/images/pizza.PNG" alt="치즈피자" />테스형2 <span>나는 날으는 피자</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 친구검색창 */}
                    {/* 친구신청(내역이 없습니다.), 친구수락 */}
                    {/* 친구 목록 */}

                    {/* ---------------------------- */}

                    {/* 친구들과 간 장소 데이터(산, 바다, 전통 등등 차트로 표현) */}
                    {/* 여성, 남성 데이터 */}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default TravelTogether