import React, { useEffect, useState } from 'react';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale/ko"; // 한국어 로케일 가져오기
import '../../css/hotel.css';
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

const Hotel: React.FC = () => {
    const [hotels, setHotels] = useState<HotelType[]>([]); // 호텔 데이터를 저장할 state
    const [loading, setLoading] = useState(true); // 데이터 로딩 상태
    const [error, setError] = useState<string | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [count, setCount] = useState(1);


    // 지도 클릭 핸들러: 템플릿 리터럴 사용 시 백틱(`) 사용 필요
    const handleClick = (address: string) => {
        const formattedAddress = encodeURIComponent(address);
        window.open(`https://www.google.com/maps?q=${formattedAddress}`);
    };

    useEffect(() => {
        const fetchHotels = async () => {
            setLoading(true);
            setError(null);
            try {
                // getAllHotels API 호출
                const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/api/hotels`);

                console.log(response.data)
                // response.data가 바로 호텔 배열일 경우
                if (Array.isArray(response.data)) {
                    setHotels(response.data);
                } else {
                    // 페이징 API 사용 시 response.data.content 등으로 접근할 수 있음
                    setHotels(response.data.content || []);
                }
            } catch (error) {
                console.error('Error fetching hotels:', error);
                setError('호텔 정보를 불러오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchHotels();
    }, []);

    useEffect(() => {
        appear_animate();
    }, [hotels]);



    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        updateHalfHeight();
        window.addEventListener("resize", updateHalfHeight);
        return () => {
            window.removeEventListener("resize", updateHalfHeight);
        };
    }, []);

    const handleMinusClick = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handlePlusClick = () => {
        setCount(count + 1);
    };


    return (
        <div>
            <div className="hero-wrap js-halfheight" style={{ backgroundImage: "url('/images/bg_5.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax='{"properties": {"translateY": "70%"}}'>
                            <p className="breadcrumbs" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>
                                <span className="mr-2"><Link to="/traveler/home">Home</Link></span>
                                <span>Hotel</span>
                            </p>
                            <h1 className="mb-3 bread" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>호텔</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* 검색 영역 추가 */}
            <section className="search-section">
                <div className="container">
                    <div className="hotel-row">
                        <div className="col-lg-12">
                            <form action="#" className="hotel-search-form">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="여행지나 숙소를 검색해보세요." />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="02.19 수 - 02.20 목 (1박)" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            {/* <input type="text" className="form-control" placeholder="인원 2" /> */}
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button type="submit" className="btn btn-primary">검색</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-degree-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {loading && <p>로딩중...</p>}
                            {error && <p className="error">{error}</p>}
                            <div className="row">
                                {hotels.length > 0 ? (
                                    hotels.map((hotel) => (
                                        <div key={hotel.num} className="col-md-4 ftco-animate">
                                            <div className="destination">
                                                <Link
                                                    to={`/traveler/hotels/${hotel.num}`}
                                                    className="img img-2 d-flex justify-content-center align-items-center"
                                                    style={{
                                                        backgroundImage: `url(${process.env.REACT_APP_FILES_URL}/images/hotel/${hotel.thumbnail})`,
                                                    }}
                                                >
                                                    <div className="icon d-flex justify-content-center align-items-center">
                                                        <span className="icon-search2"></span>
                                                    </div>
                                                </Link>
                                                <div className="text p-3">
                                                    <div className="d-flex">
                                                        <div className="one">
                                                            <h3>
                                                                <Link to={`/traveler/hotels/${hotel.num}`}>
                                                                    {hotel.name}
                                                                </Link>
                                                            </h3>
                                                            <p className="rate">
                                                                {Array.from({ length: 5 }).map((_, i) =>
                                                                    i < hotel.rating ? <i key={i} className="icon-star"></i> : <i key={i} className="icon-star-o"></i>
                                                                )}
                                                                <span>{hotel.hit} 별점</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p>{hotel.content}</p>
                                                    <hr />
                                                    <p className="bottom-area d-flex">
                                                        <span>
                                                            <i className="icon-map-o" onClick={() => handleClick(hotel.location)}></i> {hotel.location}
                                                        </span>
                                                        <span className="ml-auto">
                                                            <Link to={`/traveler/hotels/${hotel.num}`}>상세정보</Link>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    !loading && <p>호텔 정보가 없습니다.</p>
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
                </div>
            </section>
        </div>
    );
};


export default Hotel;
