// 2025.02.05. 19:00 생성자:최의진, HTML템플릿을 리엑트로 조정
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { appear_animate, handleScroll, updateHeight } from '../Comm/CommomFunc';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ko } from "date-fns/locale/ko"; // 한국어 로케일 가져오기
registerLocale("ko", ko);



const Transport: React.FC = () => {
    const [selectedFDate, setSelectedFDate] = useState<Date | null>(null);
    const [selectedTDate, setSelectedTDate] = useState<Date | null>(null);
    const navigate = useNavigate();
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
    // const hanleRoadClick = () => {
    //     navigate('/traveler/Transport/Road');
    // }
    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/transport/map.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                            <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span>Tour</span></p>
                            <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>Destination</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section ftco-degree-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/transport/bus.jpg)" }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2"></span>
                                            </div>
                                        </Link>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><Link to="#">고속버스 현황</Link></h3>
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
                                            <p>서울에서 부산까지 고속버스</p>
                                            <p className="days"><span>2 days 3 nights</span></p>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span><i className="icon-map-o"></i>부산광역시</span>
                                                <span className="ml-auto"><Link to="/traveler/Transport/Bus">Discover</Link></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">                                                                                                {/*images\transport\Seoulsubway.png */}                                 
                                        <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/transport/Seoulsubway.png)" }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2"></span>
                                            </div>
                                        </Link>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><Link to="#">수도권 지하철</Link></h3>
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
                                                <span className="ml-auto"><Link to="/traveler/Transport/Train">Discover</Link></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">                                                                                                                               
                                        <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/transport/airline.jpg)" }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2"></span>
                                            </div>
                                        </Link>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><Link to="#">비행기</Link></h3>
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
                                                <span className="ml-auto"><Link to="/traveler/Transport/Airline">Discover</Link></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default Transport