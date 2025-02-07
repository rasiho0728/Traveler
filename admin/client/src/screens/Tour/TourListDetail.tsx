import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { appear_animate, handleScroll, updateHeight } from '../../components/common/CommonFunc';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import { Carousel } from 'react-bootstrap';
import ReviewTask from '../../components/Projects/ReviewTask';
import RecommendTask from '../../components/Projects/RecommendTask';



const TourListDetail: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // const [rating, setRating] = useState<number>(0);
  // const [review, setReview] = useState<string>("");
  const [reviews, setReviews] = useState<{ rating: number; text: string }[]>([]);


  const Thumbnail2 = "/imgs/img1.jpg"
  const Thumbnail5 = "/imgs/img2.jpg"
  const Thumbnail7 = "/imgs/img3.jpg"

  const images = [Thumbnail2, Thumbnail5, Thumbnail7];

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
          {/* <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/imgs/img1.jpg')" }}>
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
          </div> */}

            

          <section className="ftco-section ftco-degree-bg">
              <div className="container">
                  <div className="row">

                      <div className="col-lg-9">
                          <div className="row">


                            {/* 이미지 */}
                            <div className="img-carousel-test">
                            <Carousel controls={true}>
                                {images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                    />
                                </Carousel.Item>
                                ))}
                            </Carousel>
                            </div>

                              
                              <div className="col-md-12 hotel-single mt-4 mb-5 ftco-animate">
                                  <span>Our Best hotels &amp; Rooms</span>
                                  <h2>파리,이탈리아 - {id}페이지</h2>
                                  <p className="rate mb-5">
                                      <span className="loc"><Link to="#"><i className="icon-map"></i> 291 South 21th Street, Suite 721 New York NY 10016</Link></span>
                                      
                                      <div className="d-flex align-items-center">
                                            <span className="mb-2 me-3">
                                            <a href="#!" className="rating-link active"><i className="bi bi-star-fill text-warning"></i></a>
                                            <a href="#!" className="rating-link active"><i className="bi bi-star-fill text-warning"></i></a>
                                            <a href="#!" className="rating-link active"><i className="bi bi-star-fill text-warning"></i></a>
                                            <a href="#!" className="rating-link active"><i className="bi bi-star-fill text-warning"></i></a>
                                            <a href="#!" className="rating-link active"><i className="bi bi-star-half text-warning"></i></a>
                                            <a style={{color:"red", marginLeft:"10px"  }}>{4} / 5 별점</a>
                                            </span>
                                        </div>
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

                                <div className="block-16" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                                    <figure style={{ position: "relative", display: "inline-block" }}>
                                    {/* 이미지 */}
                                    <img 
                                        src="/imgs/img1.jpg" 
                                        alt="placeholder" 
                                        className="img-fluid" 
                                        onClick={openModal} 
                                        style={{ cursor: "pointer", width: 600, height: 400, margin: "0 auto" }} 
                                    />
                                    
                                    {/* 영상 아이콘 (오버레이) */}
                                    <div 
                                        style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        backgroundColor: "rgba(0, 0, 0, 0.6)",  // 반투명 배경
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        }}
                                        onClick={openModal} // 아이콘도 클릭 가능하게
                                    >
                                        {/* 아이콘 (▶ 모양) */}
                                        <svg 
                                        width="40" height="40" viewBox="0 0 24 24" fill="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </div>
                                    </figure>
                                </div>

                               
                            <div className='management mt-5'>
                                <h3 style={{marginBottom: "10px"}}>관리</h3>
                                <div className="row d-flex justify-content-between" >
                                    {/* 리뷰 보기 */}
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12" >
                                        <ReviewTask />
                                    </div>

                                    {/* 비슷한 테마 */}
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12" >
                                        <RecommendTask />
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