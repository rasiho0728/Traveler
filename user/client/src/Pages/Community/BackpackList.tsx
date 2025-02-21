import React, { useEffect, useState } from 'react';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import { Link, useNavigate } from 'react-router-dom';
import { Provider, LikeButton } from "@lyket/react";
import BackpackChart from './BackpackChart'; // 차트 추가
import '../../css/BackpackList.css'
import axios from 'axios';

export interface BackPackVO {
    num: number;          // 게시글 번호
    roomNum: number;      // 방 번호
    title: string;        // 제목
    content: string;      // 내용
    cdate: string;        // 작성일 
    hit: number;          // 조회수
    heart: number;        // 좋아요 수
    img_names: string[];  // 이미지 파일 리스트
    tags: string[];       // 태그 리스트
}

const BackpackList: React.FC = () => {
    const [backpack, setBackpack] = useState<BackPackVO[]>([]);
    const [totalPages, setTotalPages] = useState(0); // 총 페이지 수
    const [currentPage, setCurrentPage] = useState(1); // 기본 1값을 초기화
    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(1);
    const [title, setTitle] = useState(''); // 제목 검색
    const [check, setCheck] = useState(false) // 검색 버튼 동작 감지
    const navigate = useNavigate();
    const itemsPerPage = 8; // 페이지당 항목 수
    const pagePerBlock = 5; // 한 블럭에 표시할 페이지 수
    const filePath = `${process.env.REACT_APP_FILES_URL}/files/logs`;

    const getBackpackList = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/api/backpack`, {
                params: {
                    page: currentPage, // 오청할 페이지 번호
                    size: itemsPerPage, // 한 페이지당 항목 수 
                    title: title, // 검색할 제목
                },
            });
            setBackpack(response.data.content); // 전체 게시글 리스트
            setTotalPages(response.data.total_pages);
        } catch (error) {
            console.log('Error Message: ' + error);
        }
    };

    useEffect(() => {
        getBackpackList();
    }, [currentPage, check]); // currentPage 또는 title가 변경된 때만 게시글 리스트을 가져오기

    // 페이지 순서 계산
    useEffect(() => {
        setStartPage((Math.floor((currentPage - 1) / pagePerBlock) * pagePerBlock) + 1); // 시작페이지 계산
        let end = (Math.floor((currentPage - 1) / pagePerBlock) + 1) * pagePerBlock; // 끝페이지 계산
        end = end > totalPages ? totalPages : end; // 총 페이지 수보다 크면 총 페이지 수로
        setEndPage(end);
    }, [backpack]);

    // 제목 클릭 시 게시글 상세페이지로 이동
    const handleTitleClick = (num: number) => {
        navigate(`/traveler/community/${num}`);
    };

    // 페이지 변경 시 호출되는 함수
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    // 검색
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value); // 검색어 입력 시 쓰는 함수(업데이트)
    };

    // 검색 버튼 클릭시 필터링된 게시글 리스트을 가져오는 함수
    const handleSearchClick = () => {
        console.log("검색 버튼 클릭됨! 검색어:", title);
        setCheck(!check);
    };

    // 차트 클릭 시 게시글 상세페이지로 이동
    // const handleChartClick = (num: number) => {
    //     navigate(`/traveler/community/${num}`);
    // };

    // const handlePageChange = (page: number) => {
    //     setCurrentPage(page);
    // }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        appear_animate();
    }, [backpack]);

    useEffect(() => {
        updateHalfHeight();
        window.addEventListener("resize", updateHalfHeight);
        return () => {
            window.removeEventListener("resize", updateHalfHeight);
        };
    }, []);

    return (
        <div className="like-container">
            {/* 헤더 */}
            <div className="hero-wrap js-halfheight" style={{ backgroundImage: "url('/images/bg_4.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs">
                                <span className="mr-2"><Link to="/traveler/home">Home</Link></span>
                                <span>커뮤니티</span>
                            </p>
                            <h1 className="mb-3 bread">나의 배낭</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="search-box">
                {/* 검색어 입력 */}
                <div className="search-container">
                    <input
                        type="text"
                        className="form-search"
                        placeholder="검색어를 입력하세요..."
                        value={title}
                        onChange={handleSearchChange} // 검색어 입력 시 상태 업데이트
                    />
                    <button className="btn btn-primary" style={{ cursor: "pointer" }} onClick={handleSearchClick}>
                        검색
                    </button>
                </div>
            </div>


            {/* 메인 컨텐츠 */}
            <section className="ftco-section bg-light megaLikeBox">
                <div className='like-BigBox'>
                    {/* ✅ 왼쪽 - 차트 위치 (크기 조정) */}
                    <div className="chart-box">
                        <div className="like-chart-container" style={{ textAlign: "center" }}>
                            <h4 className="like-chart-title">여행 스타일 분석</h4>
                            <div style={{ width: "100%", maxWidth: "500px", height: "100%", margin: "0 auto" }}>
                                <BackpackChart />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
                            <div className="megabig-backpack">
                                <div className="big-backpack">
                                    <div className="mini-backpack">
                                        {backpack.map(item => (
                                            <div className="minimini-backpack" key={item.num}>
                                                <div className="mm-backpack">
                                                    {/* 이미지 처리 */}
                                                    {item.img_names.length > 0 ? (
                                                        <Link to={`/traveler/community/${item.num}`} className="block-20"
                                                            style={{ backgroundImage: `url(${filePath + item.img_names[0]})` }}>
                                                        </Link>
                                                    ) : (
                                                        <div className="block-20" style={{ background: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center", height: "200px" }}>
                                                            <p>이미지 없음</p>
                                                        </div>
                                                    )}
                                                    {/* 게시글 정보 */}
                                                    <div className="backpack-textbox">
                                                        <span className="tag">{item.tags.length > 0 ? item.tags.join(", ") : "태그 없음"}</span> {/* 태그 표시 */}
                                                        <h3>
                                                            <Link to={`/traveler/community/${item.num}`}>{item.title}</Link>
                                                        </h3>
                                                        <p className="hit">조회수: {item.hit}</p> {/* 조회수 */}
                                                        <p className="date">작성일: {formatDate(item.cdate)}</p> {/* 작성일 */}
                                                        {/* ❤️ 좋아요 버튼 */}
                                                        <div className="meta mb-3">
                                                            <LikeButton
                                                                namespace="testing-react"
                                                                id={`like-button-${item.num}`}
                                                                hideCounterIfLessThan={0}
                                                                component={({ handlePress, totalLikes }) => (
                                                                    <button onClick={handlePress}
                                                                        style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}>
                                                                        ❤️ {totalLikes}
                                                                    </button>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Provider>


                        <div className="row mt-5">
                            <div className="col text-center">
                                <button
                                    type="submit"
                                    className="write-button"
                                    onClick={() => window.location.href = '/traveler/BackpackForm'} // 페이지 이동
                                >
                                    작성하기
                                </button>
                            </div>
                        </div>

                        {/* 페이징 */}
                        <div className='d-flex justify-content-center mt-4'>
                            <nav>
                                <ul className='pagination'>
                                    {/* _의 의미: 
                  - 변수 이름이 필요 없을 때 사용
                  - Array.prototype.map의 콜백 함수는 두 개의 매개변수 를 받지만배열의 요소 (여기서는 사용하지 않음)
                  - 오직 인덱스(i)만 사용하기 때문에 첫 번째 매개변수의 이름을 _로 설정           
                */}
                                    {startPage > 1 && (
                                        <li className="page-item">
                                            {" "}
                                            <button
                                                className="page-link"
                                                onClick={() => handlePageChange(startPage - 1)} >
                                                이전
                                            </button>
                                        </li>
                                    )}
                                    {Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage).map((currpage) => ( // 인덱스(i)를 기반으로 페이지 번호를 렌더링
                                        <li key={currpage} className={`page-item ${currpage === currentPage ?
                                            'active' : ''}`}>
                                            <button className='page-link' // 버튼을 누르면 handlePageChange(currpage) 호출
                                                onClick={() => handlePageChange(currpage)}>
                                                {currpage}
                                            </button>
                                        </li>
                                    ))}
                                    {endPage < totalPages && (
                                        <li className="page-item">
                                            <button
                                                className="page-link"
                                                onClick={() => handlePageChange(endPage + 1)}>
                                                다음
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default BackpackList;
