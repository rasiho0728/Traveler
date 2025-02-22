import React, { useState } from 'react'
import "../../css/travelTogether.css";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { subYears, format, max } from 'date-fns';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

interface UserResponse {
    name: string;
}

const TravelTogether: React.FC = () => {
    const [activeBox, setActiveBox] = useState<string>('f-box1');
    const handleTabClick = (boxId: string) => {
        setActiveBox(boxId);
    };

    // 2025.02.22 친구검색
    const [searchEmail, setSearchEmail] = useState<string>(''); // 이메일 입력값
    const [searchedUser, setSearchedUser] = useState<UserResponse | null>(null); // 검색된 사용자 정보
    const [friendRequestSent, setFriendRequestSent] = useState<boolean>(false); // 친구 요청 상태

    // 🔹 이메일로 사용자 검색 (Axios 사용)
    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault(); // 기본 폼 제출 방지

        try {
            const response = await axios.get<UserResponse>(`http://localhost:81/userBack/api/travelTogether/search`, {
                params: { email: searchEmail } // ✅ `GET` 요청의 파라미터를 `params`로 전달
            });

            setSearchedUser(response.data); // ✅ `UserResponse` 타입 사용하여 상태 업데이트
        } catch (error) {
            console.error("검색 오류:", error);
            setSearchedUser(null);
            alert("사용자를 찾을 수 없습니다.");
        }
    };

    // 🔹 친구 요청 보내기 (Axios 사용)
    const handleSendFriendRequest = async () => {
        if (!searchedUser) return;

        try {
            await axios.post(`http://localhost:81/userBack/api/travelTogether/send-request`, null, {
                params: {
                    userID: "내ID", // ✅ 실제 사용자 ID로 변경해야 함
                    email: searchEmail
                }
            });

            setFriendRequestSent(true); // ✅ 요청 성공 시 버튼 상태 변경
            alert("친구 요청이 전송되었습니다!");
        } catch (error) {
            console.error("친구 요청 오류:", error);
            alert("친구 요청을 보내는 데 실패했습니다.");
        }
    };



    // 주석처리한거는 나중에 back할때 데이터 연결을 위해 진짜 필요한것
    // const getRandomData = () => {
    //     const today = new Date();
    //     return Array.from({ length: 365 }, (_, i) => {
    //         return {
    //             date: format(subYears(today, 1), 'yyyy-MM-dd'),
    //             count: Math.floor(Math.random() * 4) // 0~3 사이의 랜덤 값
    //         };
    //     });
    // };
    const dummyData = [
        // 1월
        { date: '2024-01-05', count: 1 },
        { date: '2024-01-10', count: 3 },
        { date: '2024-01-15', count: 2 },
        { date: '2024-01-20', count: 4 },
        { date: '2024-01-25', count: 2 },

        // 2월
        { date: '2024-02-01', count: 1 },
        { date: '2024-02-05', count: 2 },
        { date: '2024-02-10', count: 3 },
        { date: '2024-02-15', count: 4 },
        { date: '2024-02-20', count: 2 },
        { date: '2024-02-25', count: 3 },

        // 3월
        { date: '2024-03-01', count: 1 },
        { date: '2024-03-05', count: 4 },
        { date: '2024-03-10', count: 2 },
        { date: '2024-03-15', count: 3 },
        { date: '2024-03-20', count: 1 },
        { date: '2024-03-25', count: 3 },

        // 4월
        { date: '2024-04-01', count: 2 },
        { date: '2024-04-05', count: 1 },
        { date: '2024-04-10', count: 3 },
        { date: '2024-04-15', count: 4 },
        { date: '2024-04-20', count: 2 },
        { date: '2024-04-25', count: 3 },

        // 5월
        { date: '2024-05-01', count: 3 },
        { date: '2024-05-05', count: 2 },
        { date: '2024-05-10', count: 1 },
        { date: '2024-05-15', count: 4 },
        { date: '2024-05-20', count: 2 },
        { date: '2024-05-25', count: 3 },

        // 6월
        { date: '2024-06-01', count: 1 },
        { date: '2024-06-05', count: 3 },
        { date: '2024-06-10', count: 2 },
        { date: '2024-06-15', count: 4 },
        { date: '2024-06-20', count: 2 },
        { date: '2024-06-25', count: 3 },

        // 7월
        { date: '2024-07-01', count: 2 },
        { date: '2024-07-05', count: 4 },
        { date: '2024-07-10', count: 3 },
        { date: '2024-07-15', count: 1 },
        { date: '2024-07-20', count: 2 },
        { date: '2024-07-25', count: 3 },

        // 8월
        { date: '2024-08-01', count: 1 },
        { date: '2024-08-05', count: 3 },
        { date: '2024-08-10', count: 2 },
        { date: '2024-08-15', count: 4 },
        { date: '2024-08-20', count: 2 },
        { date: '2024-08-25', count: 3 },

        // 9월
        { date: '2024-09-01', count: 3 },
        { date: '2024-09-05', count: 1 },
        { date: '2024-09-10', count: 4 },
        { date: '2024-09-15', count: 2 },
        { date: '2024-09-20', count: 3 },
        { date: '2024-09-25', count: 1 },

        // 10월
        { date: '2024-10-01', count: 2 },
        { date: '2024-10-05', count: 3 },
        { date: '2024-10-10', count: 4 },
        { date: '2024-10-15', count: 1 },
        { date: '2024-10-20', count: 2 },
        { date: '2024-10-25', count: 3 },

        // 11월
        { date: '2024-11-01', count: 3 },
        { date: '2024-11-05', count: 1 },
        { date: '2024-11-10', count: 4 },
        { date: '2024-11-15', count: 2 },
        { date: '2024-11-20', count: 3 },
        { date: '2024-11-25', count: 1 },

        // 12월
        { date: '2024-12-01', count: 2 },
        { date: '2024-12-05', count: 3 },
        { date: '2024-12-10', count: 4 },
        { date: '2024-12-15', count: 1 },
        { date: '2024-12-20', count: 2 },
        { date: '2024-12-25', count: 3 },
    ];

    const chartOptions = {
        chart: {
            type: 'column'
        },

        title: {
            text: ' '
        },
        xAxis: {
            categories: ['서울', '부산', '강원도', '제주도'], // X축 라벨
            title: {
                text: '지역 선호도 %'
            }
        },
        yAxis: [
            { // 첫 번째 Y축 (왼쪽, Employees)
                title: {
                    text: ' '
                },
                min: 0,
                max: 100
            },
        ],
        legend: {
            enabled: true
        },
        plotOptions: {
            column: {
                grouping: false, // 고정된 위치로 배치
                shadow: false,
                borderWidth: 0
            }
        },

        series: [
            { // Employees (왼쪽 Y축 사용)
                name: '우리들',
                data: [98, 65, 30, 80],
                color: 'rgba(255, 91, 91, 0.81)', // 연한 파랑
                pointPadding: 0.3,
                yAxis: 0,
                zIndex: 2 // ✅ 더 앞에 배치
            },
            { // Employees Optimized (왼쪽 Y축 사용)
                name: '전체 회원 수',
                data: [100, 40, 20, 95],
                color: 'rgba(255, 157, 46, 0.88)', // 보라색
                pointPadding: 0.2,
                yAxis: 0,
                zIndex: 1 // ✅ Employees보다 한 단계 낮게 배치
            },
        ]
    };

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
                    <div className='travel1'>
                        <div className='travel-section'>
                            <h2 className='tt'>Group Travel</h2>
                            <span className='tspan'>함께 여행하는 우리들만의 이야기</span>
                            <div className='tf-box'>
                                <div className='travel-chart-box'>
                                    <h2>우리들이 좋아하는 여행 지역!</h2>
                                    <div className='travel-chart'>
                                        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                                    </div>
                                </div>
                                <div className='friend'>
                                    <h2>함께 떠날 친구를 찾아보세요!</h2>
                                    <div className='f-list'>
                                        <ul className='friend-list-big'>
                                            <li>
                                                <a onClick={() => handleTabClick('f-box1')}
                                                    className={activeBox === 'f-box1' ? 'active' : ''}>
                                                    친구목록
                                                </a>
                                            </li> {/* 검색도 있도록 만들기1 */}
                                            <li>
                                                <a onClick={() => handleTabClick('f-box2')}
                                                    className={activeBox === 'f-box2' ? 'active' : ''}>
                                                    친구추가
                                                </a>
                                            </li> {/* 검색도 있도록 만들기2 */}
                                            <li>
                                                <a onClick={() => handleTabClick('f-box3')}
                                                    className={activeBox === 'f-box3' ? 'active' : ''}>
                                                    친구신청
                                                </a>
                                            </li>
                                        </ul>
                                        <div className={`f-box1 ${activeBox === 'f-box1' ? 'active' : ''}`}>
                                            <ul>
                                                <li><img src="/images/pizza.PNG" alt="치즈피자" />테스형1 <span>내용을 적어주세요.</span></li>
                                                <li><img src="/images/pizza.PNG" alt="치즈피자" />테스형2 <span>여행이 곧 삶, 삶이 곧 여행</span></li>
                                                <li><img src="/images/pizza.PNG" alt="치즈피자" />테스형2 <span>나는 날으는 피자</span></li>
                                            </ul>
                                        </div>

                                        <div className={`f-box2 ${activeBox === 'f-box2' ? 'active' : ''}`}>
                                            <form className='search-box' onSubmit={handleSearch}>
                                                <input
                                                    type="text"
                                                    className='search-txt'
                                                    placeholder='이메일을 입력하세요.'
                                                    value={searchEmail}
                                                    onChange={(e) => setSearchEmail(e.target.value)}
                                                />
                                                <button className='searchFriend-btn' type='submit'>
                                                    <i className='fa-solid fa-magnifying-glass' />
                                                </button>
                                            </form>
                                            {/* 🔹 검색된 사용자 정보 표시 */}
                                            {searchedUser && (
                                                <ul className="search-result">
                                                    <li>
                                                        {searchedUser.name} {/* 🔹 사용자의 이름 출력 */}
                                                        <button
                                                            className="add-friend-btn"
                                                            onClick={handleSendFriendRequest}
                                                            disabled={friendRequestSent} // 요청이 이미 전송되었다면 버튼 비활성화
                                                        >
                                                            {friendRequestSent ? "요청됨" : "친구 신청"}
                                                        </button>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>

                                        <div className={`f-box3 ${activeBox === 'f-box3' ? 'active' : ''}`}>
                                            <ul>
                                                <li>
                                                    <div className='unknownFriend'>
                                                        <img src="/images/pizza.PNG" alt="치즈피자" />
                                                        호호씨1
                                                    </div>
                                                    <div className='friend-btn'>
                                                        <button>수락</button>
                                                        <button>거절</button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='unknownFriend'>
                                                        <img src="/images/pizza.PNG" alt="치즈피자" />
                                                        호호씨2
                                                    </div>
                                                    <div className='friend-btn'>
                                                        <button>수락</button>
                                                        <button>거절</button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='unknownFriend'>
                                                        <img src="/images/pizza.PNG" alt="치즈피자" />
                                                        호호씨3
                                                    </div>
                                                    <div className='friend-btn'>
                                                        <button>수락</button>
                                                        <button>거절</button>
                                                    </div>
                                                </li>
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

                    <div className='travel2'>
                        <div className='travel-section'>
                            <h2 className='tt2'>Our Tracks</h2>
                            <span className='tspan'>친구와 함께 남긴 지난 여정을 돌아보세요.</span>
                            <div className='group-travel-history'>
                                <h2>우리들의 발자국들</h2>
                                <CalendarHeatmap
                                    startDate={subYears(new Date(), 1)}
                                    endDate={new Date()}
                                    values={dummyData}
                                    classForValue={(value) => {
                                        if (!value) {
                                            return 'color-empty';
                                        }
                                        return `color-scale-${value.count}`;
                                    }}
                                    tooltipDataAttrs={(value) => {
                                        if (!value || !value.date) return {}; // 데이터가 없으면 툴팁 속성 자체를 추가하지 않음
                                        return {
                                            'data-tooltip-id': 'heatmap-tooltip',
                                            'data-tooltip-content': `📅 날짜: ${value.date}\n🔥 여행 횟수: ${value.count}`,
                                        };
                                    }}
                                />
                                <ReactTooltip id="heatmap-tooltip" place="top" style={{ backgroundColor: 'black', color: 'white' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TravelTogether