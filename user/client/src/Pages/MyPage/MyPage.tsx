import React, { useState } from 'react'
import Chart from "react-apexcharts"
import { ApexOptions } from "apexcharts";
import '../../css/mypage.css';

const MyPage: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('치즈피자');
    const [description, setDescription] = useState('여행이 곧 삶, 삶이 곧 여행. 익숙함을 벗어나야 비로소 내가 보인다.');
    const [phone, setPhone] = useState('010-1234-5678');
    const [email, setEmail] = useState('test123@naver.com');
    const [birthdate, setBirthdate] = useState('2000/05/12');

    // 수정 버튼 클릭 시
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // 완료 버튼 클릭 시
    const handleSaveClick = () => {
        setIsEditing(false);
    };

    // 취소 버튼 클릭 시
    const handleCancelClick = () => {
        setIsEditing(false);
    };

  // ✅ ApexOptions 타입을 명시적으로 적용
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      height:180,
    },
    plotOptions: {
      bar: {
        horizontal: true, // 가로형 바 차트 설정
        barHeight: "70%",
        distributed: true,
        borderRadius: 15,
        
      },
    },
    xaxis: {
      categories: ["조회수", "하트", "댓글 수"],
      labels: { show: false },
      axisBorder: {
        show: false, // ✅ X축 라인 보이기
      },
      axisTicks: {
        show: false, // ✅ X축 작은 눈금 제거
      },
    },
    grid: {
        show: false,
        // padding: {
        //   top:2,
        //   bottom:2,
        // },
    },
    colors: ["#FF0000", "#FFD700", "#008000"], // 바 색상 설정
  };

  const series = [
    {
      name: "값",
      data: [22, 15, 8], // 더미 데이터 값
    },
  ];

  return (
    <div className='MyPage'>
      <div className='inner'>
      <div className='title-box'>
          <h2 className='title'>배낭 프로필</h2>
          {isEditing ? (
            <>
              <div className='btn-flex'>
                <button className='btn btn-primary' onClick={handleSaveClick}>완료</button>
                <button className='btn btn-secondary' onClick={handleCancelClick}>취소</button>
              </div>
            </>
          ) : (
            <button className='btn btn-secondary' onClick={handleEditClick}>수정</button>
          )}
        </div>
        
        <div className='profile-box'>
            <div className='profile'>
                <div className='pro-left'>
                    <img src='/images/pizza.PNG' alt='더미img'/>
                </div>
                <div className='pro-right'>
                    {isEditing ? (
                        <div className='edit-form'>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="소개"></textarea>
                            <div className='edit-list'>
                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="전화번호" className='list-input'/>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" className='list-input' />
                                <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} placeholder="생년월일" className='list-input' />
                            </div>
                        
                        </div>
                    ) : (
                        <div className='right-box'>
                        <div className='text-box'>
                            <p>{name}</p>
                            <span>{description}</span>
                        </div>
                        <ul className='my-prolist'>
                            <li>{phone}</li>
                            <li>{email}</li>
                            <li>{birthdate}</li>
                        </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className='mbti'>
                <h2>나의 MBTI는?</h2>
                <button className="learn-more">검사 시작하기</button>
            </div>
        </div>
        
        <div className='my-history'>
            <div className='history-container'>
                <div className='chatting'>
                    <h2>문의내역</h2>
                    <div className='talkBox'>
                        <div className='talk'>
                            <div className='tt'>
                                <p>챗봇 기록</p>
                                <i className="fa fa-commenting" aria-hidden="true"></i>
                            </div>
                            <div className='tt-list'>
                                <ul>
                                    <li><a href="#">이번 주말에 2박 3일로 가족 여행을 가려고 하는데, 서울에서 너무 멀지 않으면서도 자연을 즐길 수 있는 조용한 여행지를 추천해 줄 수 있을까? 부모님이랑 함께 가는 여행이라 너무 활동적인 곳보다는 힐링할 수 있는 곳이면 좋겠어</a></li>
                                    <li><a href="#">다음 달 초에 친구들이랑 강원도로 여행을 가려고 하는데, 오션뷰가 보이는 숙소를 찾고 있어.</a></li>
                                    <li><a href="#">경주에 도착한 후에는 대중교통을 이용하는 게 좋을까, 아니면 렌터카를 빌리는 게 좋을까?</a></li>
                                    <li><a href="#">회나 해산물 요리를 좋아하는데, 관광객이 많이 가는 곳 말고, 부산쪽을 추천해줘</a></li>
                                    <li><a href="#">이번 겨울에 속초로 여행을 가려고 하는데, 12월 초에는 기온이 어느 정도일까?</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='talk'>
                            <div className='tt'>
                                <p>배낭톡 기록</p>
                                <i className="fa fa-suitcase" aria-hidden="true"></i>
                            </div>
                            <div className='tt-list'>
                                <ul>
                                    <li><a href="#">사정이 생겨서 당일날 숙소 예약을 취소하려는데 전액 환불이 가능한가요?</a></li>
                                    <li><a href="#">세인트존스 패키지 여행에서 기본으로 제공하는 서비스가 있나요? 웰컴 드링크나 조식쿠폰 제공이 있는걸로 가려는데 패키지쪽에는 없더라구요...</a></li>
                                    <li><a href="#">늦게 도착할거같은데 야간 체크인도 가능한가요? 혹시 야간체크할때는 개인비용부담이 드나요? 아니면 예약 서비스에서 제공해주나요?</a></li>
                                    <li><a href="#">서울 당일치기로 전주여행가는게 있던데 여기 패키지가 너무 활동적이거나 이동 동선이 복잡한가요? 또 전주여행에 한옥마을 탐방같은 코스도 있을까요?</a></li>
                                    <li><a href="#">아는 해외친구가 이번에 한국에 온다길래 여길 추천하려고 하거든요. 부산까지 가는 전철중에 KTX나 ITX중에 어느것이 더 싼가요?</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='myChart'>
                    <h2>일간 차트 데이터</h2>
                    <div className='chart-container w-full h-64'>
                        {/* ✅ Chart 컴포넌트에서 올바른 타입 사용 */}
                        <Chart options={chartOptions} series={series} type="bar" height={200} />
                        <img src="/images/myBlog.png" alt="차트일러" />
                    </div>
                </div>
            </div>
            
        </div>

        <div className='log'>
            <div className='my-Box'>
                <div className='my-list'>
                    <div className='my-bag'>
                        <h2>예약내역 확인</h2>
                        <div>
                            <ul className="bag-list">
                                <li><a href="/traveler/tour">✅ 경주 불국사 & 첨성대 야경 투어</a></li>
                                <li><a href="/traveler/tour">✅ 부산 힐튼호텔 - 오션뷰룸</a></li>
                                <li><a href="/traveler/tour">✅ 전주 한옥마을 전통 한정식 예약</a></li>
                                <li><a href="/traveler/tour">✅ 강릉 씨마크 호텔 - 디럭스룸</a></li>
                                <li><a href="/traveler/tour">✅ 제주 우도 스쿠터 투어</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='my-blog'>
                        <div className='my-blog-text'>
                            <h2>나의 최근 게시물</h2>
                            <a href='/traveler/community'><i className="fa fa-plus" aria-hidden="true"></i>더보기</a>
                        </div>
                        <ol>
                            <li><a href="#">여행 고수들이 추천하는 히든 플레이스 TOP 10</a></li>
                            <li><a href="#">봄맞이 여행! 제주부터 경주까지 꼭 가봐야 할 여행지 5곳</a></li>
                            <li><a href="#">먹방 투어로 떠나는 전주와 부산: 한 입 베어물면 떠오르는 한국의 맛</a></li>
                        </ol>
                    </div>
                </div>

                <div className='foot'>
                    <h2>발자국</h2>
                    <div className='box-container'>
                        <div className='box'>
                            <p>여행</p>
                            <ul>
                                <li><a href="#">한적한 자연 속 힐링! 강원도 감성 캠핑 & 트레킹 2박 3일 패키지</a></li>
                                <li><a href="#">전통과 현대의 만남! 전주 한옥마을 & 남부시장 야시장 투어 1박 2일</a></li>
                                <li><a href="#">오션뷰 숙소에서 힐링! 부산 드라이브 3박 4일 패키지</a></li>
                            </ul>
                        </div>

                        <div className='box'>
                            <p>교통</p>
                            <ul>
                                <li><a href="#">렌터카 + 유류비 포함! 자유로운 드라이브 여행 패키지</a></li>
                                <li><a href="#">서울 ↔ 강원도 왕복 셔틀버스 패키지!</a></li>
                                <li><a href="#">KTX & 렌터카 완벽 패키지! 서울에서 부산까지 편리한 여행 코스</a></li>
                            </ul>
                        </div>

                        <div className='box'>
                            <p>플레이리스트</p>
                            <ul>
                                <li><a href="#">여행 - 볼빨간사춘기</a></li>
                                <li><a href="#">바람이 불었으면 좋겠어 - 박명수&거미</a></li>
                                <li><a href="#">떠나자 - 크라잉넛</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='diary-box'>
                <div className='my-blog-text'>
                    <h2>다이어리 목록</h2>
                    <a href='/traveler/community'><i className="fa fa-plus" aria-hidden="true"></i>더보기</a>
                </div>
                <div className='big-box'>
                    <div className='diary'>
                        <img src="/images/diary01.png" alt="다이어리 이미지 예시" />
                        <button className="learn-more">다이어리 보기</button>
                    </div>
                    <div className='diary'>
                        <img src="/images/diary01.png" alt="다이어리 이미지 예시" />
                        <button className="learn-more">다이어리 보기</button>
                    </div>
                    <div className='diary'>
                        <img src="/images/diary01.png" alt="다이어리 이미지 예시" />
                        <button className="learn-more">다이어리 보기</button>
                    </div>
                    <div className='diary'>
                        <img src="/images/diary01.png" alt="다이어리 이미지 예시" />
                        <button className="learn-more">다이어리 보기</button>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage