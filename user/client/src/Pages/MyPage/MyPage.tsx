import React from 'react'
import '../../css/mypage.css';

const MyPage: React.FC = () => {
  return (
    <div className='MyPage'>
      <div className='inner'>
        <h2 className='title'>배낭 프로필</h2>
        <div className='profile'>
            <div className='pro-left'>
                <img src='/images/pizza.PNG' alt='더미img'/>
            </div>
            <div className='pro-right'>
                <div className='right-box'>
                    <div className='text-box'>
                        <p>치즈피자</p>
                        <span>여행이 곧 삶, 삶이 곧 여행. 익숙함을 벗어나야 비로소 내가 보인다.</span>
                    </div>
                    <ul className='my-prolist'>
                        <li>010-1234-5678</li>
                        <li>test123@naver.com</li>
                        <li>2000/05/12</li>
                    </ul>
                </div>
                <div className='mbti'>
                    <h2>나의 MBTI는?</h2>
                    <button className="learn-more">검사 시작하기</button>
                </div>
            </div>
            
        </div>

        <div className='my-history'>
            <div className='my-bag'>
                <h2>예약내역 확인</h2>
                <div>
                    <ul className="bag-list">
                        <li>✅ 경주 불국사 & 첨성대 야경 투어</li>
                        <li>✅ 부산 힐튼호텔 - 오션뷰룸</li>
                        <li>✅ 전주 한옥마을 전통 한정식 예약</li>
                        <li>✅ 강릉 씨마크 호텔 - 디럭스룸</li>
                        <li>✅ 제주 우도 스쿠터 투어</li>
                    </ul>
                </div>
            </div>

            <div className='my-blog'>
                <h2>나의 최근 게시물</h2>
                <ol>
                    <li>여행 고수들이 추천하는 히든 플레이스 TOP 10</li>
                    <li>봄맞이 여행! 제주부터 경주까지 꼭 가봐야 할 여행지 5곳</li>
                    <li>먹방 투어로 떠나는 전주와 부산: 한 입 베어물면 떠오르는 한국의 맛</li>
                </ol>
            </div>

            <div className='foot'>
                <h2>발자국</h2>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage