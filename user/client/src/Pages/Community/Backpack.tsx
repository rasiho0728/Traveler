import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';

const Backpack: React.FC = () => {
    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        appear_animate();
    }, []);

    useEffect(() => {
        updateHalfHeight();
        window.addEventListener("resize", updateHalfHeight);
        return () => {
            window.removeEventListener("resize", updateHalfHeight);
        };
    }, []);

    // 리스트 목록 (4개씩 3줄)
    const guarantees = [
        { id: 1, title: "서울 경복궁 근처에 유명한 맛집이 있을까요?", description: "2월초 서울여행을 가는데 실내위주 갈만한곳 추천좀요", icon: "flaticon-guarantee" },
        { id: 2, title: "부산에서 야경이 예쁜 핫플레이스가 있을까요?", description: "광안대교부터 감천문화마을까지, 부산 야경 명소 추천해주세요", icon: "flaticon-support" },
        { id: 3, title: "봄에 가기 좋은 국내 여행지는 어디인가요?", description: "벚꽃 명소부터 유채꽃밭까지, 봄 감성 폭발 여행지 알려주세요", icon: "flaticon-lock" },
        { id: 4, title: "전국에서 꼭 가봐야 할 유명한 카페 추천해 주세요!", description: "분위기 맛집! 인테리어 감성 터지는 전국 카페 리스트 알려주세요", icon: "flaticon-deal" },
        { id: 5, title: "대구에서 현지인들이 가는 맛집이 궁금해요.", description: "대구 토박이들이 강력 추천하는 찐 로컬 맛집으로 부탁합니다", icon: "flaticon-speed" },
        { id: 6, title: "여름 바다 여행 가기 좋은 국내 지역은 어디인가요?", description: "서핑, 스노클링, 해수욕까지! 여름에 딱 맞는 해변 위주로 추천해주세요", icon: "flaticon-world" },
        { id: 7, title: "호캉스하기 좋은 국내 호텔 추천해 주세요!", description: "수영장, 조식, 오션뷰까지! 국내 TOP 호캉스 호텔로 알려주세요", icon: "flaticon-no-hidden" },
        { id: 8, title: "서울에서 한강 야경이 가장 예쁜 곳은 어디인가요?", description: "노을이 질 때 가면 더 예쁜 한강 야경 명소로 추천해줘요!", icon: "flaticon-trust" },
        { id: 9, title: "겨울철 가볼만한 국내 여행지 어디가 있을까요?", description: "눈 덮인 설경부터 온천까지, 겨울철 필수 여행지로 알려줘요", icon: "flaticon-guide" },
        { id: 10, title: "강원도에서 스키 타기 좋은 스키장 추천해 주세요!", description: "초보부터 전문가까지, 강원도 인기 스키장 많이 가는 곳으로 알려줘유!", icon: "flaticon-discount" },
        { id: 11, title: "국내에서 당일치기로 여행하기 좋은 곳 추천해 주세요", description: "짧지만 강렬한 하루! 교통 편리한 당일치기 여행지로 부탁해요", icon: "flaticon-package" },
        { id: 12, title: "전주 한옥마을에서 꼭 먹어야 하는 음식이 있을까요?", description: "비빔밥은 기본! 전주에서만 맛볼 수 있는 별미로 알려줘요!!!!", icon: "flaticon-payment" }
    ];

    return (
        <div>
            <div className="hero-wrap js-halfheight" style={{ backgroundImage: "url('/images/bg_4.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax='{"properties": {"translateY": "70%"}}'>
                            <p className="breadcrumbs" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>
                                <span className="mr-2"><Link to="/traveler/home">Home</Link></span> 
                                <span>커뮤니티</span>
                            </p>
                            <h1 className="mb-3 bread" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>여행해 듀오</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section bg-light">
                <div className="container">
                    {/* 리스트 목록 4개씩 3줄 배치 */}
                    <div className="row d-flex">
                        {guarantees.map((item) => (
                            <div key={item.id} className="col-md-3 d-flex align-self-stretch ftco-animate">
                                <div className="media block-6 services d-block text-center">
                                    <Link to={`/traveler/backpack/${item.id}`}>
                                        <div className="d-flex justify-content-center">
                                        </div>
                                        <div className="media-body p-2 mt-2">
                                            <h3 className="heading mb-3">{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 작성하기 버튼 추가 */}
                    <div className="row mt-5">
                        <div className="col-md-12 text-left">
                            <Link 
                                to='/traveler/BackpackMemo' 
                                className="btn btn-primary"
                                style={{
                                    display: 'inline-block',
                                    backgroundColor: '#FF5A5F', // 로그인 버튼과 동일한 색상
                                    color: 'white',
                                    padding: '12px 20px',
                                    borderRadius: '30px',  // 버튼 둥글게
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    transition: 'background 0.3s',
                                    cursor: 'pointer',
                                    border: 'none',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과 추가
                                    width: '150px', // 버튼 크기 조정
                                    textAlign: 'center'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E04848'} // hover 효과
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FF5A5F'}
                            >
                                작성하기
                            </Link>
                        </div>
                    </div>

                    {/* 페이지네이션 유지 */}
                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="block-27">
                                <ul>
                                    <li><Link to="">&lt;</Link></li>
                                    <li className="active"><span>1</span></li>
                                    <li><Link to="">2</Link></li>
                                    <li><Link to="">3</Link></li>
                                    <li><Link to="">4</Link></li>
                                    <li><Link to="">5</Link></li>
                                    <li><Link to="">&gt;</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Backpack;
