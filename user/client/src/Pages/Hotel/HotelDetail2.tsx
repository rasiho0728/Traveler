// 2025.01.24. 15:15 생성자: 황보도연, UI 변경
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ko } from "date-fns/locale/ko"; // 한국어 로케일 가져오기
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import ImgCarousel from '../../Comm/ImgCarousel';
import '../../css/hotel.css';
import { roomDetails } from "./ReservationForm";
import axios from 'axios';
import HotelMap from "../Hotel/HotelMap";

registerLocale("ko", ko);


interface HotelType {
    num: number;
    name: string;
    rating: number;
    content: string;
    location: string;
    thumbnail: string;
    hit: number;
    hdate: string;
}

const HotelDetail2: React.FC = () => {
    const { num } = useParams<{ num: string }>();
    const [hotel, setHotel] = useState<HotelType | null>(null);
    const mapRef = useRef(null); // mapRef 추가

    useEffect(() => {
        // 조건을 여기서 처리
        if (num) {
            // API 호출 코드
            const getDetail = async () => {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/api/hotels/${num}`);
                    console.log(response.data); // 데이터 확인
                    if (response.data) {
                        setHotel(response.data); // hotel 정보만 설정
                    }
                } catch (error) {
                    console.error("Error fetching hotel details", error);
                }
            };
            getDetail();
        }
    }, [num]);

    // const openModal = () => {
    //     setIsOpen(true);
    // };

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
        updateHalfHeight();
        window.addEventListener("resize", updateHalfHeight);
        return () => {
            window.removeEventListener("resize", updateHalfHeight);
        };
    }, []);

    return (
        <div>
            <div className="hero-wrap js-halfheight" style={{ backgroundImage: "url('/images/bg_5.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                            <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span className="mr-2"><Link to="/traveler/hotels">Hotel</Link></span> <span>Hotel Single</span></p>
                            <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>호텔 소개</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hotel-detail-col-lg-9">
                <div className="row">
                    <div className="col-md-12 ftco-animate">
                        <ImgCarousel data={[1, 2, 3]} />
                    </div>
                    <div className="col-md-12 hotel-single mt-4 mb-5 ftco-animate">
                        <span>베스트 호텔 & 객실</span>
                        {hotel ? (
                            <div>
                                <h2>{hotel.name}</h2>

                                {/* 주소 & 별점 구역 */}
                                <div className="hotel-info mb-5">
                                    <div className="hotel-detail-rate">
                                        <i className="hotel-icon-star fa fa-star"></i>
                                        <span>{hotel.rating.toFixed(1)}</span>
                                    </div>
                                    <div>
                                        <span className='hotel-detail-content'>{hotel.content}</span>
                                    </div>
                                    <div className="hotel-address">
                                        <p><strong>위치:</strong> {hotel.location}</p>
                                        <div className="hotel-detail-map">
                                            <HotelMap location={hotel.location} name={hotel.name} />
                                        </div>
                                    </div>
                                    <p><strong>등록일:</strong> {hotel.hdate}</p>
                                    <p><strong>조회수:</strong> {hotel.hit}</p>
                                </div>

                                {/* "객실 정보 & 예약 버튼" 구역 삭제 */}
                            </div>
                        ) : (
                            <p>호텔 정보가 없습니다.</p>
                        )}
                    </div>
                </div>
            </div>


            <div className="d-md-flex mt-5 mb-5">
                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                    <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                        <h4 className="mb-4">객실 안내</h4>
                        <div className="row">
                            {roomDetails.map((room) => (
                                <div key={room.id} className="col-md-4">
                                    <div className="destination">
                                        <Link
                                            to={`/traveler/hotels/${room.id}`}
                                            className="img img-2"
                                            style={{
                                                backgroundImage: `url(${room.imageUrl})`,
                                            }}
                                        ></Link>
                                        <div className="text p-3">
                                            <div className="d-flex">
                                                <div className="one">
                                                    <h3>
                                                        <Link to={`/traveler/hotels/${room.id}`}>{room.name}</Link>
                                                    </h3>
                                                    <p className="rate">
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star"></i>
                                                        <i className="icon-star-o"></i>
                                                        <span>8</span>
                                                    </p>
                                                </div>
                                                <div className="two">
                                                    <span className="hotel-detail-price per-price">
                                                        {room.price}
                                                        <br />
                                                        <small>/박</small>
                                                    </span>
                                                </div>
                                            </div>
                                            <p>{room.description}</p>
                                            <hr />
                                            <p className="bottom-area d-flex">
                                                {/* <span>
                                                                    <i className="icon-map-o"></i> Miami, Fl
                                                                </span> */}
                                                <span className="hotel-detail-ml-auto">
                                                    <Link to="/traveler/hotels/ReservationForm" state={{ roomDetails }}>
                                                        객실 예약
                                                    </Link>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4" style={{ position: 'relative', zIndex: 1 }}>
                    <h4 className="mb-4">리뷰 &amp; 평점</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <form method="post" className="star-rating">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i> 100 Ratings</span></p>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i> 30 Ratings</span></p>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 5 Ratings</span></p>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 0 Ratings</span></p>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        <p className="rate"><span><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 0 Ratings</span></p>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-5">
                    <h4 className="mb-4">추천 호텔</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="destination">
                                <Link to="/traveler/hotels/1" className="img img-2" style={{ backgroundImage: "url(/images/hotel-1.jpg)" }}></Link>
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
                        <div className="col-md-4">
                            <div className="destination">
                                <Link to="/traveler/hotels/1" className="img img-2" style={{ backgroundImage: "url(/images/hotel-2.jpg)" }}></Link>
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
                        <div className="col-md-4">
                            <div className="destination">
                                <Link to="/traveler/hotels/1" className="img img-2" style={{ backgroundImage: "url(/images/hotel-3.jpg)" }}></Link>
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
                                        <span className="ml-auto"><Link to="#">예약</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HotelDetail2