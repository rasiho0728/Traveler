// 2025.01.21. 19:35 생성자: 이학수, HTML템플릿을 리엑트로 조정
import React, { useEffect, useState } from 'react'
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';
import GalleryCarousel from '../../Comm/GalleryCarousel';
import AnimatedNumber from '../../Comm/AnimatedNumber';
import CardCarousel from '../../Comm/CardCarousel';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import TourMusicRecommended from '../Tour/TourMusicRecommended';

const Home: React.FC = () => {
    const [isMusicModalOpen, setIsMusicModalOpen] = useState(false); // 모달 상태 관리
    useEffect(() => {
        // 요소의 [data-scrollax] 옵션을 분석 적용
        handleScroll()
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        // js-fullheight 클래스를 가진 요소의 높이를 화면의 크기로 갱신
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    useEffect(() => {
        // ftco-animate 클래스를 가진 요소에 등장 효과 적용
        appear_animate()
    }, []);

    useEffect(() => {
        // 로딩이 필요할때 로딩화면 출력, 설정한 시간만큼 출력
        setTimeout(function () {
            const ftco_loader = document.getElementById('ftco-loader')
            if (ftco_loader) {
                ftco_loader.className = 'fullscreen';
            }
        }, 1);
    }, [])

    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                            <h1 className="mb-4" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><strong>Explore <br /></strong> your amazing city</h1>
                            <p data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>Find great places to stay, eat, shop, or visit from local experts</p>
                            <SearchBar />
                            <p>Or browse the highlights</p>
                            <p className="browse d-md-flex">
                                <span className="d-flex justify-content-md-center align-items-md-center"><Link to="#"><i className="flaticon-fork"></i>식당</Link></span>
                                <span className="d-flex justify-content-md-center align-items-md-center"><Link to="#"><i className="flaticon-hotel"></i>숙소</Link></span>
                                <span className="d-flex justify-content-md-center align-items-md-center"><Link to="#"><i className="flaticon-meeting-point"></i>지역</Link></span>
                                <span className="d-flex justify-content-md-center align-items-md-center"><Link to="#"><i className="flaticon-shopping-bag"></i>쇼핑</Link></span>
                                <span className="d-flex justify-content-md-center align-items-md-center"><Link to="/traveler/Weather/weather"><i className="icon-wb_sunny"></i>날씨</Link></span>
                                <span className="d-flex justify-content-md-center align-items-md-center">
                                    <button
                                        onClick={() => setIsMusicModalOpen(true)}
                                        style={{
                                            backgroundColor: "#ff6b6b",
                                            color: "white",
                                            padding: "10px 16px",
                                            border: "none",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            transition: "all 0.3s ease-in-out",
                                            boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)"
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#e85050"}
                                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#ff6b6b"}
                                    >
                                        🎵 노래 추천받기
                                    </button>
                                </span>
                                <span className="d-flex justify-content-md-center align-items-md-center">
                                    <Link
                                        to="/traveler/tour/recommended"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: "#ff6b6b",
                                            color: "white",
                                            padding: "10px 16px",
                                            borderRadius: "8px",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            textDecoration: "none",
                                            transition: "all 0.3s ease-in-out",
                                            boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)"
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#e85050"}
                                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#ff6b6b"}
                                    >
                                        🧳 여행지 추천받기
                                    </Link>
                                </span>

                                {/* 모달이 열릴 때만 TourMusicRecommended 표시 */}
                                {isMusicModalOpen && <TourMusicRecommended onClose={() => setIsMusicModalOpen(false)} />}

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section services-section bg-light">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block text-center">
                                <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-guarantee"></span></div></div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">💰 최저가 보장</h3>
                                    <p>믿을 수 있는 가격과 서비스로 최고의 여행을 만들어 드립니다.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block text-center">
                                <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-like"></span></div></div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">💑 여행해 듀오</h3>
                                    <p>당신의 성향과 맞는 새로운인연과 함께 여행해봐요!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block text-center">
                                <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-detective"></span></div></div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">🧳 최고의 여행 전문가</h3>
                                    <p>전문가들이 엄선한 여행지를 추천해 드립니다.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block text-center">
                                <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-support"></span></div></div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">🤝 고객 지원팀 운영</h3>
                                    <p>24시간 챗봇 기능 지원으로 언제든지 도움을 받을 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-destination">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate fadeInUp ftco-animated">
                            <span className="subheading">주목할만한</span>
                            <h2 className="mb-4"><strong>추천하는</strong> 지역</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <GalleryCarousel data={[1, 2, 3, 4, 5, 6]} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate">
                            <span className="subheading">특별한</span>
                            <h2 className="mb-4"><strong>인기</strong> 여행 패키지</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/destination-1.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><Link to="#">Paris, Italy</Link></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price">$200</span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <p className="days"><span>2 days 3 nights</span></p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><Link to="#">Discover</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/destination-2.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><Link to="#">Paris, Italy2</Link></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price">$200</span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <p className="days"><span>2 days 3 nights</span></p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><Link to="#">Discover</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/destination-3.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><Link to="#">Paris, Italy</Link></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price">$200</span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <p className="days"><span>2 days 3 nights</span></p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><Link to="#">Discover</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/destination-4.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><Link to="#">Paris, Italy</Link></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price">$200</span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <p className="days"><span>2 days 3 nights</span></p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><Link to="#">Discover</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/destination-5.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><Link to="#">Paris, Italy</Link></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price">$200</span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <p className="days"><span>2 days 3 nights</span></p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><Link to="#">Discover</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: "url(/images/bg_1.jpg)" }}>
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                            <h2 className="mb-4">흥미롭고 재미있는 여행 기록들</h2>
                            <span className="subheading">10만 개 이상의 웹사이트 호스팅</span>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <AnimatedNumber value={100000} duration={5000} />
                                            <span>이용한 여행객</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <AnimatedNumber value={40000} duration={5000} />
                                            <span>다양한 여행지</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <AnimatedNumber value={87000} duration={5000} />
                                            <span>다양한 숙소</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <AnimatedNumber value={56400} duration={5000} />
                                            <span>다양한 식당</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate">
                            <span className="subheading">특별한</span>
                            <h2 className="mb-4"><strong>인기</strong> 숙소 &amp; 객실</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-1.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><Link to="#">Hotel, Italy</Link></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                        <span className="ml-auto"><Link to="#">Book Now</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-2.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><Link to="#">Hotel, Italy</Link></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                        <span className="ml-auto"><Link to="#">Book Now</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-3.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><Link to="#">Hotel, Italy</Link></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                        <span className="ml-auto"><Link to="#">Book Now</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-4.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><Link to="#">Hotel, Italy</Link></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                        <span className="ml-auto"><Link to="#">Book Now</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-5.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><Link to="#">Hotel, Italy</Link></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                        <span className="ml-auto"><Link to="#">Book Now</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section testimony-section bg-light">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-md-5 heading-section ftco-animate">
                            <span className="subheading">Best Directory Website</span>
                            <h2 className="mb-4 pb-3"><strong>Why</strong> Choose Us?</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                            <p><Link to="#" className="btn btn-primary btn-outline-primary mt-4 px-4 py-3">Read more</Link></p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6 heading-section ftco-animate">
                            <span className="subheading">Testimony</span>
                            <h2 className="mb-4 pb-3"><strong>Our</strong> Guests Says</h2>
                            <div className="row ftco-animate">
                                <div className="col-md-12">
                                    <CardCarousel data={[1, 2, 3]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate">
                            <span className="subheading">특별한</span>
                            <h2 className="mb-4"><strong>인기</strong> 식당</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/restaurant-1.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <h3><Link to="#">Luxury Restaurant</Link></h3>
                                    <p className="rate">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star-o"></i>
                                        <span>8 Rating</span>
                                    </p>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><Link to="#">Discover</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/restaurant-2.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <h3><Link to="#">Luxury Restaurant</Link></h3>
                                    <p className="rate">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star-o"></i>
                                        <span>8 Rating</span>
                                    </p>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><Link to="#">Book Now</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/restaurant-3.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <h3><Link to="#">Luxury Restaurant</Link></h3>
                                    <p className="rate">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star-o"></i>
                                        <span>8 Rating</span>
                                    </p>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><Link to="#">Book Now</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="destination">
                                <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/restaurant-4.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <h3><Link to="#">Luxury Restaurant</Link></h3>
                                    <p className="rate">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star-o"></i>
                                        <span>8 Rating</span>
                                    </p>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><Link to="#">Book Now</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate">
                            <span className="subheading">최근 다녀온</span>
                            <h2><strong>여행팁 </strong> &amp; 리뷰</h2>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="blog-single.html" className="block-20" style={{ backgroundImage: "url('/images/image_1.jpg')" }}>
                                </Link>
                                <div className="text p-4 d-block">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><Link to="#">8 Best homestay in Philippines that you don't miss out</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="#">August 12, 2018</Link></div>
                                        <div><Link to="#">Admin</Link></div>
                                        <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="blog-single.html" className="block-20" style={{ backgroundImage: "url('/images/image_2.jpg')" }}>
                                </Link>
                                <div className="text p-4">
                                    <span className="tag">Culture</span>
                                    <h3 className="heading mt-3"><Link to="#">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="#">August 12, 2018</Link></div>
                                        <div><Link to="#">Admin</Link></div>
                                        <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="blog-single.html" className="block-20" style={{ backgroundImage: "url('/images/image_3.jpg')" }}>
                                </Link>
                                <div className="text p-4">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><Link to="#">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="#">August 12, 2018</Link></div>
                                        <div><Link to="#">Admin</Link></div>
                                        <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="blog-single.html" className="block-20" style={{ backgroundImage: "url('/images/image_4.jpg')" }}>
                                </Link>
                                <div className="text p-4">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><Link to="#">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="#">August 12, 2018</Link></div>
                                        <div><Link to="#">Admin</Link></div>
                                        <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section-parallax">
                <div className="parallax-img d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                                <h2>최신 소식 받아보기</h2>
                                <p>"여행을 떠나세요, 새로운 경험이 기다리고 있습니다."</p>
                                <p>"세상의 다양한 여행지를 만나보세요!"</p>
                                <div className="row d-flex justify-content-center mt-5">
                                    <div className="col-md-8">
                                        <form action="#" className="subscribe-form">
                                            <div className="form-group d-flex">
                                                <input type="text" className="form-control" placeholder="이메일 주소 입력" />
                                                <input type="submit" value="구독하기" className="submit px-3" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            {/* <!-- loader --> */}
            <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" /><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00" /></svg></div>
        </div >
    )
}

export default Home