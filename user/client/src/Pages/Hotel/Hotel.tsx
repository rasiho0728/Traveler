// 2025.01.24. 09:40 생성자: 이학수, HTML템플릿을 리엑트로 조정
import React, { useEffect, useState } from 'react'
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale/ko"; // 한국어 로케일 가져오기

registerLocale("ko", ko);

const Hotel: React.FC = () => {
    const [selectedFDate, setSelectedFDate] = useState<Date | null>(null);
    const [selectedTDate, setSelectedTDate] = useState<Date | null>(null);

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
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/bg_5.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                            <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span>Hotel</span></p>
                            <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>Hotels</h1>
                        </div>
                    </div>
                </div>
            </div>


            <section className="ftco-section ftco-degree-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 sidebar">
                            <div className="sidebar-wrap bg-light ftco-animate">
                                <h3 className="heading mb-4">Find City</h3>
                                <form action="#">
                                    <div className="fields">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Destination, City" />
                                        </div>
                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                    <option value="">Select Location</option>
                                                    <option value="">San Francisco USA</option>
                                                    <option value="">Berlin Germany</option>
                                                    <option value="">Lodon United Kingdom</option>
                                                    <option value="">Paris Italy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <DatePicker
                                                selected={selectedFDate}
                                                onChange={(date: Date | null) => setSelectedFDate(date)}
                                                dateFormat="yyyy년 MM월 dd일" // 날짜 형식
                                                className="form-control" // Bootstrap 스타일
                                                locale="ko" // 로케일 설정
                                                id="checkin_date"
                                                placeholderText="Date from" // 플레이스홀더
                                            />
                                        </div>
                                        <div className="form-group">
                                            <DatePicker
                                                selected={selectedTDate}
                                                onChange={(date: Date | null) => setSelectedTDate(date)}
                                                dateFormat="yyyy년 MM월 dd일" // 날짜 형식
                                                className="form-control" // Bootstrap 스타일
                                                locale="ko" // 로케일 설정
                                                id="checkin_date"
                                                placeholderText="Date to" // 플레이스홀더
                                            />
                                        </div>
                                        <div className="form-group">
                                            <div className="range-slider">
                                                {/* 아직 기능 미구현 */}
                                                <span>
                                                    <input type="number" value="25000" min="0" max="120000" />	-
                                                    <input type="number" value="50000" min="0" max="120000" />
                                                </span>
                                                <input value="25000" min="0" max="120000" step="500" type="range" />
                                                <input value="50000" min="0" max="120000" step="500" type="range" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Search" className="btn btn-primary py-3 px-5" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar-wrap bg-light ftco-animate" style={{position: 'relative',zIndex: -1}}>
                                <h3 className="heading mb-4">Star Rating</h3>
                                <form method="post" className="star-rating">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i></span></p>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <Link to="/traveler/hotels/1" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-1.jpg)" }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2"></span>
                                            </div>
                                        </Link>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><Link to="/traveler/hotels/1">Hotel, Italy</Link></h3>
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
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <Link to="/traveler/hotels/1" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-2.jpg)" }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2"></span>
                                            </div>
                                        </Link>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><Link to="/traveler/hotels/1">Hotel, Italy</Link></h3>
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
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <Link to="/traveler/hotels/1" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-3.jpg)" }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2"></span>
                                            </div>
                                        </Link>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><Link to="/traveler/hotels/1">Hotel, Italy</Link></h3>
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
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <Link to="/traveler/hotels/1" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-4.jpg)" }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2"></span>
                                            </div>
                                        </Link>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><Link to="/traveler/hotels/1">Hotel, Italy</Link></h3>
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
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <Link to="/traveler/hotels/1" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-5.jpg)" }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2"></span>
                                            </div>
                                        </Link>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><Link to="/traveler/hotels/1">Hotel, Italy</Link></h3>
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
                                <div className="col-md-4 ftco-animate">
                                    <div className="destination">
                                        <Link to="/traveler/hotels/1" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-6.jpg)" }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2"></span>
                                            </div>
                                        </Link>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3><Link to="/traveler/hotels/1">Hotel, Italy</Link></h3>
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
                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><Link to="#">&lt;</Link></li>
                                            <li className="active"><span>1</span></li>
                                            <li><Link to="#">2</Link></li>
                                            <li><Link to="#">3</Link></li>
                                            <li><Link to="#">4</Link></li>
                                            <li><Link to="#">5</Link></li>
                                            <li><Link to="#">&gt;</Link></li>
                                        </ul>
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

export default Hotel