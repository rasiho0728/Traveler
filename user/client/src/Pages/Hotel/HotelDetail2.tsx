// 2025.01.24. 15:15 생성자: 황보도연, UI 변경
import React, { useEffect, useState } from 'react'
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
    const [hotels, setHotels] = useState<HotelType[]>([]);
    const [isOpen, setIsOpen] = useState(false);


    const handleClick = (address: string) => {
        const formattedAddress = encodeURIComponent(address);
        window.open(`https://www.google.com/maps?q=${formattedAddress}`);  // 백틱으로 감싸야 합니다.
    };

    useEffect(() => {
        const getDetail = async () => {
            if (num) {  // num 값이 있을 때만 API 호출

                try {
                    // 서버에서 호텔 정보를 가져오기
                    const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/api/hotels/${num}`);
                    setHotels(response.data);  // 받아온 데이터로 상태 갱신
                    console.log(response.data);
                } catch (error) {
                    console.error("Error fetching hotel details", error);
                }
            }
        };

        getDetail();
    }, [num]);


    const openModal = () => {
        setIsOpen(true);
    };

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
            <div className="col-lg-9">
                <div className="row">
                    <div className="col-md-12 ftco-animate">
                        <ImgCarousel data={[1, 2, 3]} />
                    </div>
                    <div className="col-md-12 hotel-single mt-4 mb-5 ftco-animate">
                        <span>베스트 호텔 & 객실</span>
                        <h2>신라스테이 광화문</h2>
                        <p className="rate mb-5">
                            <span>
                                <span className="loc">
                                    {/* <Link
                                        to="#"
                                        onClick={() => handleClick(address)} // handleClick 함수 호출
                                    >
                                        <i className="icon-map"></i> {address}
                                    </Link> */}
                                </span>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star"></i>
                                <i className="icon-star-o"></i>
                                8 Rating</span>
                        </p>
                        <p>신라스테이 광화문은 서울의 역사, 경제, 문화의 뿌리인 종로구 광화문에 위치해 있다.
                            서울시청, 정부서울청사, 외교부 등 주요 공공기관과 외국 대사관 등이 밀집해 있는 동시에 경복궁, 경희궁, 창경궁, 창덕궁 등 4대 고궁과 종묘를 비롯해 남대문, 인사동, 삼청동, 북촌한옥마을 등 한국을 대표하는 전통과 문화 관광요소가 밀집되어 있다.
                            계절별로 서울을 대표하는 다양한 축제가 열리는 청계천과 도보로 5분 거리이며, 지하철 1호선 종각역과 5호선 광화문역, 3호선 안국역에서 유명 관광지로 도보 이동이 가능하다. 총 339개의 객실과 부대 시설, △로비, △로비 바, △미팅룸, △비즈니스코너, △뷔페레스토랑, △피트니스센터 등을 운영한다.
                            특히, 도심 속 사찰인 조계사와 삼청동이 한눈에 보이는 전망을 자랑한다. 뷔페 레스토랑 ‘카페’ (cafe)는 108석 규모의 좌석을 갖추고 있으며, 조식과 런치 뷔페를 상시 운영한다.</p>
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
                </div>
            </div>

            {/* Modal Video */}
            <ModalVideo
                channel="vimeo" // vimeo 플랫폼 설정
                isOpen={isOpen}
                videoId="45830194" // Vimeo의 비디오 ID
                onClose={() => setIsOpen(false)}
            />
        </div>
    )
}

export default HotelDetail2