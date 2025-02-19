// 2025.01.24. 15:15 생성자: 이학수, HTML템플릿을 리엑트로 조정
import React, { useEffect, useState } from 'react'
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ko } from "date-fns/locale/ko"; // 한국어 로케일 가져오기
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import ImgCarousel from '../../Comm/ImgCarousel';
import TourSchedule from './TourSchedule';

registerLocale("ko", ko);

const TourDetail: React.FC = () => {
    // 차후 사용시 주석 해제
    // const num = useParams()
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(1);

    const [rating, setRating] = useState<number>(0);
    const [review, setReview] = useState<string>("");
    const [reviews, setReviews] = useState<{ rating: number; text: string }[]>([]);

    // 리뷰 제출 핸들러 => 리뷰 보기로 기능 변경 필요
    const handleSubmit = () => {
        if (!review.trim()) return alert("아직 등록된 리뷰가 없습니다!");
        setReviews([...reviews, { rating, text: review }]);
        setRating(0);
        setReview("");
    };

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
        // js-halfheight 클래스를 가진 요소의 높이를 화면의 크기의 반으로 갱신
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
                            <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span className="mr-2"><Link to="/traveler/tour">Tour</Link></span></p>
                            <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>파리,이탈리아</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section ftco-degree-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 sidebar">
                            <div className="sidebar-wrap bg-light ftco-animate">
                                <div className="form-group text-center">
                                    <Link to="/traveler/tour/recommended" className="btn btn-info py-3 px-5 w-100" >
                                        AI 여행지 추천 !
                                    </Link>
                                </div>
                                <h3 className="heading mb-4">여행지 검색</h3>
                                <form action="#">
                                    <div className="fields">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control search-input"
                                                placeholder="검색어를 입력하세요"
                                                style={{ color: "black" }} // 입력값은 검은색
                                            />
                                        </div>
                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon" color='gray'><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                    <option value="">일반</option>
                                                    <option value="">테마</option>
                                                    <option value="">지역</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="검색" className="btn btn-primary py-3 px-5" />
                                        </div>
                                    </div>

                                </form>

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
                                <div className="col-md-12 ftco-animate">
                                    <ImgCarousel data={[1, 2, 3]} />
                                </div>
                                <div className="col-md-12 hotel-single mt-4 mb-5 ftco-animate">

                                    <span>Our Best hotels &amp; Rooms</span>
                                    <h2>파리,이탈리아</h2>
                                    <p className="rate mb-5">
                                        <span className="loc"><Link to="#"><i className="icon-map"></i> 291 South 21th Street, Suite 721 New York NY 10016</Link></span>
                                        <span className="star" style={{ color: "#f85959", fontWeight: "bold", fontSize: "11px", }}>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star-o"></i>
                                            {4} / 5 별점</span>
                                    </p>
                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                </div>
                                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                                    {/* <TourSchedule /> */}
                                    <h4 className="mb-4">여행지 미리 둘러보기</h4>

                                    <div className="block-16">
                                        <figure>
                                            <img src="/images/hotel-6.jpg" alt="placeholder" className="img-fluid" />
                                            <Link to=""
                                                onClick={openModal}
                                                className="play-button popup-vimeo"
                                            >
                                                <span className="icon-play" />
                                            </Link>
                                        </figure>
                                    </div>
                                    <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                                        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
                                            리뷰 더보기
                                        </button>

                                        {/* 등록된 리뷰 목록 */}
                                        <div className="review-list mt-4">
                                            <h5>사용자 리뷰</h5>
                                            {reviews.length === 0 ? (
                                                <p>아직 리뷰가 없습니다.</p>
                                            ) : (
                                                reviews.map((r, index) => (
                                                    <div key={index} className="review-item p-2 border-bottom">
                                                        <p>
                                                            <span style={{ color: "#FFD700", fontSize: "18px" }}>
                                                                {"★".repeat(r.rating)}
                                                                {"☆".repeat(5 - r.rating)}
                                                            </span>
                                                        </p>
                                                        <p>{r.text}</p>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                                    <h4 className="mb-4">비슷한 테마의 다른 여행지</h4>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="destination">
                                                <Link to="/traveler/hotels/1" className="img img-2" style={{ backgroundImage: "url(/images/room-4.jpg)" }}></Link>
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
                                                        <span className="ml-auto"><Link to="#">상세보기</Link></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="destination">
                                                <Link to="/traveler/hotels/1" className="img img-2" style={{ backgroundImage: "url(/images/room-5.jpg)" }}></Link>
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
                                                        <span className="ml-auto"><Link to="#">상세보기</Link></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="destination">
                                                <Link to="/traveler/hotels/1" className="img img-2" style={{ backgroundImage: "url(/images/room-6.jpg)" }}></Link>
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
                                                        <span className="ml-auto"><Link to="#">상세보기</Link></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-12 hotel-single ftco-animate mb-5 mt-5">
                                    <h4 className="mb-4">이용할만한 근처 숙소</h4>
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
                                                        <span className="ml-auto"><Link to="#">상세보기</Link></span>
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
                                                        <span className="ml-auto"><Link to="#">상세보기</Link></span>
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
                                                        <span className="ml-auto"><Link to="#">상세보기</Link></span>
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
            </section>

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

export default TourDetail

