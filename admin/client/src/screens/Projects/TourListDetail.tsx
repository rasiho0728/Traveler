import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { appear_animate, handleScroll, updateHeight } from '../../components/common/CommonFunc';
import ImgCarouselAd from '../../components/common/ImgCariuselAd';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';



const TourListDetail: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // const [rating, setRating] = useState<number>(0);
  // const [review, setReview] = useState<string>("");
  const [reviews, setReviews] = useState<{ rating: number; text: string }[]>([]);

  // 리뷰 제출 핸들러 => 리뷰 보기로 기능 변경 필요
  // const handleSubmit = () => {
  //     if (!review.trim()) return alert("리뷰 내용을 입력해주세요!");
  //     setReviews([...reviews, { rating, text: review }]);
  //     setRating(0);
  //     setReview("");
  // };

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
      // js-fullheight 클래스를 가진 요소의 높이를 화면의 크기로 갱신
      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => {
          window.removeEventListener("resize", updateHeight);
      };
  }, []);
  return (
      <div>
          <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/imgs/img1.jpg')" }}>
              <div className="overlay"></div>
              <div className="container">
                  <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                      <div className="col-md-9 ftco-animate text-center" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                          <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2">
                            <Link to="TourList">Home</Link></span> 
                            <span className="mr-2"><Link to="/tourlist/detail">Tour</Link></span> 
                            <span>Hotel Single</span></p>
                          <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>Tour Details</h1>
                      </div>
                  </div>
              </div>
          </div>


          <section className="ftco-section ftco-degree-bg">
              <div className="container">
                  <div className="row">
                      {/* 여행지검색 자리 */}

                      <div className="col-lg-9">
                          <div className="row">
                              
                              <div className="col-md-12 hotel-single mt-4 mb-5 ftco-animate">
                                  <span>Our Best hotels &amp; Rooms</span>
                                  <h2>파리,이탈리아 - {id}페이지</h2>
                                  <p className="rate mb-5">
                                      <span className="loc"><Link to="#"><i className="icon-map"></i> 291 South 21th Street, Suite 721 New York NY 10016</Link></span>
                                      <span className="star"style={{ color: "#f85959", fontWeight: "bold",fontSize: "11px", }}>
                                          <i className="icon-star"></i>
                                          <i className="icon-star"></i>
                                          <i className="icon-star"></i>
                                          <i className="icon-star"></i>
                                          <i className="icon-star-o"></i>
                                          {4} / 5 별점</span>
                                  </p>
                                  <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                  <div className="d-md-flex mt-5 mb-5">
                                      <ul>
                                          <li>The Big Oxmox advised her not to do so</li>
                                          <li>When she reached the first hills of the Italic Mountains</li>
                                          <li>She had a last view back on the skyline of her hometown </li>
                                          <li>Bookmarksgrove, the headline of Alphabet </li>
                                      </ul>
                                      <ul className="ml-md-5">
                                          <li>Question ran over her cheek, then she continued</li>
                                          <li>Pityful a rethoric question ran</li>
                                          <li>Mountains, she had a last view back on the skyline</li>
                                          <li>Headline of Alphabet Village and the subline</li>
                                      </ul>
                                  </div>
                                  <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                              </div>
                              <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                                  <h4 className="mb-4">여행지 미리 둘러보기</h4>

                                  <div className="block-16">
                                    <figure>
                                      {/* ✅ 이미지 클릭 시 영상 재생 */}
                                      <img 
                                        src="/imgs/img1.jpg" 
                                        alt="placeholder" 
                                        className="img-fluid" 
                                        onClick={openModal} // ✅ 클릭 이벤트 추가
                                        style={{ cursor: "pointer" }} // ✅ 클릭 가능한 UI 변경
                                      />
                                    </figure>
                                  </div>

                                  {/* 리뷰보기 자리 */}
                              </div> 


                             
                              <div className="col-md-12 hotel-single ftco-animate mb-5 mt-4">
                                  <h4 className="mb-4">비슷한 테마의 다른 여행지</h4>
                                  <div className="row">
                                      <div className="col-md-4">
                                          <div className="destination">
                                              <Link to="/traveler-admin/tourlist/detail/1" className="img img-2" style={{ backgroundImage: "url(/imgs/img2.jpg)" }}></Link>
                                              <div className="text p-3">
                                                  <div className="d-flex">
                                                      <div className="one">
                                                          <h3><Link to="/traveler-admin/tourlist/detail/1">Hotel, Italy</Link></h3>
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
                                              <Link to="/traveler-admin/tourlist/detail/2" className="img img-2" style={{ backgroundImage: "url(/imgs/img3.jpg)" }}></Link>
                                              <div className="text p-3">
                                                  <div className="d-flex">
                                                      <div className="one">
                                                          <h3><Link to="/traveler-admin/tourlist/detail/2">Hotel, Italy</Link></h3>
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
                                              <Link to="/traveler-admin/tourlist/detail/3" className="img img-2" style={{ backgroundImage: "url(/imgs/img4.jpg)" }}></Link>
                                              <div className="text p-3">
                                                  <div className="d-flex">
                                                      <div className="one">
                                                          <h3><Link to="/traveler-admin/tourlist/detail/3">Hotel, Italy</Link></h3>
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

export default TourListDetail