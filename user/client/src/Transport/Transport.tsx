// 2025.02.05. 19:00 생성자:최의진, HTML템플릿을 리엑트로 조정
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { appear_animate, handleScroll, updateHalfHeight } from '../Comm/CommomFunc';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ko } from "date-fns/locale/ko"; // 한국어 로케일 가져오기
registerLocale("ko", ko);

const Transport: React.FC = () => {
    useEffect(() => {
        // 요소의 [data-scrollax] 옵션을 분석 적용
        handleScroll()
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // js-halfheight 클래스를 가진 요소의 높이를 화면의 크기로 갱신
        updateHalfHeight();
        window.addEventListener("resize", updateHalfHeight);
        return () => {
            window.removeEventListener("resize", updateHalfHeight);
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
            <div className="hero-wrap js-halfheight" 
            style={{ backgroundImage: "url('/images/transport/palace.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center', // 이미지 위치를 중앙에 맞추기
            backgroundRepeat: 'no-repeat',
            position: 'relative', // 요소의 위치를 상대적으로 설정
            zIndex: -2,
            backgroundColor:"rgba(0, 0, 0, 0.5);"
            }}
            >
            <div className="overlay" style={{ pointerEvents: 'none' }}></div>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                            {/* <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span>Tour</span></p> */}
                            <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>실시간 교통</h1>
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
                                                    
                                                </div>
                                            </div>
                                            <p>서울에서 부산까지 고속버스</p>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span className="ml-auto"><Link to="/traveler/Transport/BusForm">Discover</Link></span>
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
                                                </div>
                                            </div>
                                            <p>세계 최고의 지하철 서비스</p>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span className="ml-auto"><Link to="/traveler/Transport/Train">Discover</Link></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-md-4 ftco-animate">
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
                                            </div>
                                            <p>세계에서 가장 바쁜 항로 1위</p>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span><i className="icon-map-o"></i>김포 to 제주</span>
                                                <span className="ml-auto"><Link to="/traveler/Transport/Airline">Discover</Link></span>
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">                                                                                                                               
                                        <Link to="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/transport/FastMap.jpg)" }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2"></span>
                                            </div>
                                        </Link>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><Link to="#">최단거리 경로 추천</Link></h3>
                                                    <p className="rate">
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star-o"></i>
                                                        <span>8 Rating</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p>최대한 빨리 이동합시다</p>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                <span><i className="icon-map-o"></i>Fast Route</span>
                                                <span className="ml-auto"><Link to="/traveler/Transport/MapRoad">이동하기</Link></span>
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