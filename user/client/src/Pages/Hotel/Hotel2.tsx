import React, { useEffect, useState } from 'react';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import { Link } from 'react-router-dom';
import { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale/ko"; // 한국어 로케일 가져오기
import '../../css/hotel.css';
import axios from 'axios';
import Pagenation from '../../Comm/Pagenation';
import { Modal, Button } from 'react-bootstrap';


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
    const [size, setSize] = useState(9); // 한 페이지 당 항목 수
    const [totalPages, setTotalPages] = useState(0); // 총 페이지 수
    const [startPage, setStartPage] = useState(1);
    const [page, setPage] = useState(1);
    const [endPage, setEndPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchKeyword, setSearchKeyword] = useState(''); // 실제 검색에 사용될 값
    const [startDate, setStartDate] = useState(new Date()); // 시작 날짜 상태
    const [endDate, setEndDate] = useState(new Date());   // 종료 날짜 상태
    const [totalCount, setTotalCount] = useState(1);
    const [countButtonsVisible, setCountButtonsVisible] = useState(false); // + - 버튼 표시/숨김 상태
    const [showModal, setShowModal] = useState(false);  // 모달 상태
    const toggleModal = () => setShowModal(!showModal);
    const increaseCount = () => setTotalCount((prev) => Math.min(prev + 1, 4));
    const decreaseCount = () => setTotalCount((prev) => Math.max(prev - 1, 1));


    const pagePerBlock = 5; // 한 블럭에 표시할 페이지 수

    const handleClick = (address: string) => {
        const formattedAddress = encodeURIComponent(address);
        window.open(`https://www.google.com/maps?q=${formattedAddress}`);
    };

    const getHotelList = async (page: number, searchQuery: string) => {
        const [name, location] = searchQuery.split(" ");
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/api/hotels`, {
                params: {
                    page: page,
                    size: size,
                    searchQuery: searchQuery
                }
            });
            console.log(response.data);
            setHotels(response.data.content);
            setTotalPages(response.data.total_pages);
        } catch (error) {
            console.log('Error Message: ' + error);
        }
    }

    // 페이지 블록 계산
    useEffect(() => {
        setStartPage((Math.floor((page - 1) / pagePerBlock) * pagePerBlock) + 1);
        let end = (Math.floor((page - 1) / pagePerBlock) + 1) * pagePerBlock;
        end = end > totalPages ? totalPages : end;
        setEndPage(end);
    }, [page, totalPages]);

    // 페이지나 검색어 변경
    useEffect(() => {
        getHotelList(page, searchKeyword);
    }, [page, searchKeyword]);

    // 검색어 변경
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    // 검색 버튼 클릭 시
    const handleSearchClick = () => {
        setSearchKeyword(searchQuery);
        setPage(1);
    }

    // 페이지 변경
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    }

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

    const toggleCountButtons = () => {
        setCountButtonsVisible(!countButtonsVisible);
    };


    useEffect(() => {
        const totalCountNumber = document.getElementById('totalCountNumber');
        if (totalCountNumber) {
            totalCountNumber.textContent = totalCount.toString();
        }
    }, [totalCount]);


    return (
        <div>
            <div className="hero-wrap js-halfheight" style={{ backgroundImage: "url('/images/hotels/hotelbackground2.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax='{"properties": {"translateY": "70%"}}'>
                            <p className="breadcrumbs" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>
                                <span className="mr-2"><Link to="/traveler/home">Home</Link></span>
                                <span>Hotel</span>
                            </p>
                            <h1 className="mb-3 bread" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>숙박</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* 검색 영역 추가 */}
            <section className="search-section">
                <div className="container">
                    <div className="hotel-row">
                        <div className="col-lg-12">
                            <form className="hotel-search-form">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="여행지나 숙소를 검색해보세요." value={searchQuery} onChange={handleSearchChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="02.19 수 - 02.20 목 (1박)" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <div className="total-count-display" onClick={toggleCountButtons}>
                                                <i className="fas fa-user"></i>
                                                <span>인원 </span>
                                                <span id="totalCountNumber">{totalCount}</span>
                                            </div>
                                            <div className="count-buttons" style={{ display: countButtonsVisible ? 'block' : 'none' }}>
                                                <button type="button" onClick={decreaseCount}>-</button>
                                                <button type="button" onClick={increaseCount}>+</button>
                                            </div>
                                            <select
                                                className='form-control'
                                                style={{ display: 'none' }}
                                                id="totalCount"
                                                value={totalCount}
                                                onChange={(e) => {
                                                    setTotalCount(Number(e.target.value));
                                                }}
                                            >
                                                {Array.from({ length: 4 }, (_, i) => (
                                                    <option key={i + 1} value={i + 1}>
                                                        {i + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button type="button" className='btn btn-primary py-3 px-5' onClick={handleSearchClick}>검색</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* 모달 창 */}
            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>인원 수</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="count-buttons">
                        <Button variant="secondary" onClick={decreaseCount}>-</Button>
                        <span style={{ margin: "0 10px" }}>{totalCount}</span>
                        <Button variant="secondary" onClick={increaseCount}>+</Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={toggleModal}>확인</Button>
                </Modal.Footer>
            </Modal>
            <section className="ftco-section ftco-degree-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                {hotels.length > 0 ? (
                                    hotels.map((hotel) => (
                                        <div key={hotel.num} className="col-md-4 ftco-animate">
                                            <div className="destination">
                                                <Link
                                                    to={`/traveler/hotels/${hotel.num}`}
                                                    className="img img-2 d-flex justify-content-center align-items-center"
                                                    style={{
                                                        backgroundImage: `url(/images/hotels/hotelbackground1.webp)`,
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
                                                            <p className="hotel-rate">
                                                                <i className="hotel-icon-star fa fa-star"></i>
                                                                <span className="hotel-rating-value">{hotel.rating.toFixed(1)}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p>{hotel.content}</p>
                                                    <hr />
                                                    <p className="bottom-area d-flex">
                                                        <span>
                                                            <i className="icon-map-o" onClick={() => handleClick(hotel.location)}></i> {hotel.location}
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
                            {totalPages > 0 && (
                                <Pagenation
                                    page={page}
                                    totalPages={totalPages}
                                    pageChange={handlePageChange}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Hotel;
