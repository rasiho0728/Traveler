// 2025.01.24. 09:28 생성자: 이학수, HTML템플릿을 리엑트로 조정
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFuncAd';

const Contact: React.FC = () => {
    useEffect(() => {
        // 요소의 [data-scrollax] 옵션을 분석 적용
        handleScroll()
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // ftco-animate 클래스를 가진 요소에 등장 효과 적용
        appear_animate()
    }, []);

    useEffect(() => {
        // js-fullheight 클래스를 가진 요소의 높이를 화면의 크기로 갱신
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                            <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span>Contact</span></p>
                            <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section contact-section ftco-degree-bg">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-12 mb-4">
                            <h2 className="h4">Contact Information</h2>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md-3">
                            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Phone:</span> <Link to="tel://1234567920">+ 1235 2355 98</Link></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Email:</span> <Link to="mailto:info@yoursite.com">info@yoursite.com</Link></p>
                        </div>
                        <div className="col-md-3">
                            <p><span>Website</span> <Link to="#">yoursite.com</Link></p>
                        </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-6 pr-md-5">
                            <form action="#">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols={30} rows={7} className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>

                        </div>

                        {/* 맵 넣는 자리 */}
                        <div className="col-md-6" id="map"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact