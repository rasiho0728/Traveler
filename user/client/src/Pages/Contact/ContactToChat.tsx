import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';

const ContactToChat: React.FC = () => {
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
        updateHalfHeight();
        window.addEventListener('resize', updateHalfHeight);
        return () => {
            window.removeEventListener('resize', updateHalfHeight);
        };
    }, []);

    return (
        <div>
            <div className="hero-wrap js-halfheight" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center" data-scrollax-parent="true">
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
                    <div className="mb-4">
                        <h2 className="h4">채팅기록</h2>
                    </div>
                    <div className="row mb-5">
                        <div className='col-md-3 border p-0' style={{height:'500px'}}>
                            <div style={{height:'50px'}}>

                            </div>
                        </div>
                        <div className='col-md-9 border' style={{height:'500px'}}>
                        </div>
                    </div>
                    <div className="row d-flex contact-info">
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
                </div>
            </section>
        </div>
    );
};

export default ContactToChat;
