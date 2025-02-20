// 2025.01.24. 19:00 생성자: 이학수, HTML템플릿을 리엑트로 조정
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ko } from "date-fns/locale/ko"; // 한국어 로케일 가져오기
import ChartComponent from "./components/ChartComponent";
import RecommendationList from './components/RecommendationList';
import "../../css/tour.css";
import axios from 'axios';
registerLocale("ko", ko);
interface TourData {
    num: number;
    name: string;
    rating: number;
    content: string;
    days: number;
    location: string;
    thumbnail: string;
    hit: number;
    theme: string;
    images: { img_name: string }[]; // ✅ 추가
    schedules: { day: number; place: string; content: string }[]; // ✅ 추가
}
interface RecommendationProps {
    place: string;
}

const Tour: React.FC = () => {
    const [selectedFDate, setSelectedFDate] = useState<Date | null>(null);
    const [tourList, setTourList] = useState<TourData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [recommendedPlace, setRecommendedPlace] = useState<string>("");
    const [selectedTDate, setSelectedTDate] = useState<Date | null>(null);
    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);

    useEffect(() => {
        // 요소의 [data-scrollax] 옵션을 분석 적용
        handleScroll()
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // js-halfheight 클래스를 가진 요소의 높이를 화면의 크기 반으로 갱신
        updateHalfHeight();
        window.addEventListener("resize", updateHalfHeight);
        return () => {
            window.removeEventListener("resize", updateHalfHeight);
        };
    }, []);

    useEffect(() => {
        // ftco-animate 클래스를 가진 요소에 등장 효과 적용
        appear_animate()
    }, [tourList]);

    useEffect(() => {
        axios.get<TourData[]>('http://localhost:81/userBack/api/tours')
            .then(response => {
                console.log("🔥 서버 응답 데이터:", response.data);
                
                // ✅ 응답 데이터가 배열인지 확인하고 설정
                setTourList(Array.isArray(response.data) ? response.data : []);
                
                setLoading(false);
            })
            .catch(error => {
                console.error('❌ API 요청 실패:', error);
                setTourList([]);
                setLoading(false);
            });
    }, []);
    
    useEffect(() => {
        const allDestinations = ["서울", "제주도", "부산", "강원도"];
        const randomPlace = allDestinations[Math.floor(Math.random() * allDestinations.length)];
        console.log("🔥 추천 여행지:", randomPlace); // 콘솔에서 값 확인
        setRecommendedPlace(randomPlace);
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
    const satisfactionData = { categories: ["서울", "제주도", "부산"], data: [95, 90, 88] };
    const visitData = { categories: ["서울", "부산", "강원도"], data: [5000, 4800, 4500] };
  
    return (
        <div>
            <div className="hero-wrap js-halfheight" style={{ backgroundImage: "url('/images/bg_3.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                            <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span>Tour</span></p>
                            <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>여행지</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="tour-container">
    <div className="tour-chart-container">
        <ChartComponent title="만족도가 높은 여행지 TOP 3" categories={satisfactionData.categories} data={satisfactionData.data} label="만족도" />
        <ChartComponent title="최근 많이 가는 여행지 TOP 3" categories={visitData.categories} data={visitData.data} label="방문 수" />
    </div>
    <RecommendationList place={recommendedPlace} />

</div>
            
            <section className="tour-list-user">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 sidebar ftco-animate">
                            <div className="sidebar-wrap bg-light ftco-animate">
                                <div className="form-group text-center">
                                    <Link to="/traveler/tour/recommendd" className="btn btn-info py-3 px-5 w-100" >
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
                                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
    <button style={{
        background: hover ? "transparent" : "#2f89fc",
        border: "2px solid #2f89fc",
        color: hover ? "#2f89fc" : "white",
        borderRadius: "20px",
        padding: "6px 15px",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out"
    }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
        인기 순
    </button>
    <button style={{
        background: hover2 ? "transparent" : "#2f89fc",
        border: "2px solid #2f89fc",
        color: hover2 ? "#2f89fc" : "white",
        borderRadius: "20px",
        padding: "6px 15px",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out"
        
    }}
    onMouseEnter={() => setHover2(true)}
    onMouseLeave={() => setHover2(false)}
    >
        리뷰 많은 순
    </button>
</div>
                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon" color='gray'><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                    <option value="">지역 + 테마</option>
                                                    <option value="">지역</option>
                                                    <option value="">테마</option>
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
                        {!tourList || tourList.length === 0 ? (
    <p className="text-center">여행지를 찾을 수 없습니다.</p>
) : (
    tourList.map((tour) => (
        <div key={tour.num} className="col-md-4 ftco-animate">
            <div className="destination">
                <Link to={`/traveler/tour/${tour.num}`} 
                    className="img img-2 d-flex justify-content-center align-items-center" 
                    style={{ backgroundImage: `url(/images/${tour.thumbnail})` }}>
                    <div className="icon d-flex justify-content-center align-items-center">
                        <span className="icon-search2"></span>
                    </div>
                </Link>
                <div className="text p-3">
    <h3><Link to={`/traveler/tour/${tour.num}`}>{tour.name}</Link></h3>
    
    {/* 별점 표시 */}
    <p className="rate" style={{ marginBottom: "0.5em" }}>
        {[...Array(5)].map((_, i) => (
            <i key={i} className={i < tour.rating ? "icon-star" : "icon-star-o"}></i>
        ))}
        <span style={{ color: "#f85959", fontWeight: "bold", fontSize: "11px" }}>
            {tour.rating} / 5 별점
        </span>
    </p>

    {/* 리뷰 개수를 별도의 <p> 태그로 처리 */}
    <p style={{ marginBottom: "0.5em" }}>
        <span style={{ color: "#2f89fc", fontSize: "13px", fontWeight: "bold" }}>
            리뷰 {tour.hit || 0} 개
        </span>
    </p>
    <p>{tour.content}</p>
    <p className="days"><span>{tour.days} 박</span></p>
    <hr />
    {/* 위치 및 상세보기 링크 */}
    <p className="bottom-area d-flex">
        <span><i className="icon-map-o"></i> {tour.location}</span>
        <span className="ml-auto"><Link to={`/traveler/tour/${tour.num}`}>상세보기</Link></span>
    </p>
</div>

            </div>
        </div>
    ))
)}




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
                <style>
                    {`
                        .search-input::placeholder {
                            color: lightgray !important;
                            opacity: 1;
                        }
                        .search-input {
                            color: black;
                        }
                    `}
                </style>
            </section >
        </div >
    )
}

export default Tour