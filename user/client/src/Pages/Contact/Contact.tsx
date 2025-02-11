import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';

const Contact: React.FC = () => {
    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        appear_animate();
    }, []);

    useEffect(() => {
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax='{"properties": {"translateY": "70%"}}'>
                            <p className="breadcrumbs" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>
                                <span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span>Contact</span>
                            </p>
                            <h1 className="mb-3 bread" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>문의 하기</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section contact-section ftco-degree-bg">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-12 mb-4">
                            <h2 className="h4">연락처 정보</h2>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-3">
                            <p><span>주소:</span> 서울 서초구 서초대로77길 41 4층</p>
                        </div>
                        <div className="col-md-3">
                            <p><span>전화번호:</span> <Link to="tel://1234567920">+ 1235 2355 98</Link></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>이메일:</span> <Link to="mailto:info@yoursite.com">info@yoursite.com</Link></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Website</span> <Link to="#">yoursite.com</Link></p>
                        </div>
                    </div>
                    <div className="row block-9">
                        {/* 문의 폼 */}
                        <div className="col-md-6 pr-md-5">
                            <form action="#">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="이름 입력" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="이메일 입력" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="제목 입력" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols={30} rows={7} className="form-control" placeholder="메시지 입력"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="메시지 보내기" className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>
                        </div>

                        {/* 회사 오시는 길 추가 */}
                        <div className="col-md-6">
                            <h3 className="h5 mb-3">회사 오시는 길</h3>
                            <p>서울 서초구 서초대로77길 41 4층에 위치해 있습니다.</p>
                            <p>🚇 지하철: 2호선 강남역 5번 출구 도보 10분</p>
                            <p>🚗 주차: 건물 내 유료 주차 가능</p>

                            {/* Google Maps 삽입 */}
                            <div className="map-responsive">
                                <iframe
                                    title="회사 오시는 길"
                                    width="100%"
                                    height="300"
                                    src="https://www.google.com/maps/embed/v1/place?q=서울+서초구+서초대로77길+41&key=api...key"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
