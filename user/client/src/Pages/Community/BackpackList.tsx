import React, { useEffect, useState } from 'react';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import { Link, useNavigate } from 'react-router-dom';
import { Provider, LikeButton } from "@lyket/react";
import BackpackChart from './BackpackChart'; // 차트 추가
import '../../css/BackpackList.css'
import axios from 'axios';

export interface BackPackVO{
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
    // const [backpack, setBackpack] = useState<BackPackVO>([]);
    // const [totalPages, setTotalPages] = useState(0); // 총 페이지 수
    // const [currentPage, setCurrentPage] = useState(1); // 기본 1값을 초기화
    // const [startPage, setStartPage] = useState(1);
    // const [endPage, setEndPage] = useState(1);
    // const [title, setTitle] = useState(''); // 제목 검색
    // const navigate = useNavigate();
    // const itemsPerPage = 8; // 페이지당 항목 수
    // const pagePerBlock = 5; // 한 블럭에 표시할 페이지 수
    // const filePath = `${process.env.REACT_APP_FILES_URL}/`;

    // const getBackpackList = async () => {
    //     try {
    //         const response = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/api/backpack`, {
    //             page: currentPage, // 오청할 페이지 번호
    //             size: itemsPerPage, // 한 페이지당 항목 수 
    //             title: title, // 검색할 제목
    //         });
    //     } catch (error) {
    //         setAllPosts(response.data.content);
    //         setTotalPages(response.data.total_pages);
    //     }
    // };


    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        appear_animate();
    }, []);

    useEffect(() => {
        updateHalfHeight();
        window.addEventListener("resize", updateHalfHeight);
        return () => {
            window.removeEventListener("resize", updateHalfHeight);
        };
    }, []);

    // const formatDate = (dateString: string) => {
    //     const date = new Date(dateString);
    //     return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    //   };

    const blogPosts = [
        { id: 1, title: "노을이 질 때 가면 더 예쁜 한강 야경 명소 BEST", image: "/images/image_1.jpg", category: "여행" },
        { id: 2, title: "초보부터 전문가까지, 강원도 인기 스키장 모음", image: "/images/image_2.jpg", category: "문화" },
        { id: 3, title: "벚꽃 명소부터 유채꽃밭까지, 봄 감성 폭발 여행지", image: "/images/image_3.jpg", category: "여행" },
        { id: 4, title: "바다뷰 감성! 강릉에서 꼭 들려야 할 카페", image: "/images/image_4.jpg", category: "여행" },
        { id: 5, title: "서울 경복궁 근처에서 꼭 가봐야 할 명소", image: "/images/image_5.jpg", category: "여행" },
        { id: 6, title: "북적이는 도심 속 숨겨진 힐링 산책 코스", image: "/images/image_6.jpg", category: "문화" },
        { id: 7, title: "와인 한잔하며 야경 즐기기 좋은 부산 바 리스트", image: "/images/image_7.jpg", category: "여행" },
        { id: 8, title: "수영장, 조식, 오션뷰까지! 국내 TOP 호캉스 호텔", image: "/images/image_8.jpg", category: "여행" }
    ];

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

            {/* 메인 컨텐츠 */}
            <section className="ftco-section bg-light">
                <div className='like-BigBox'>
                    {/* ✅ 왼쪽 - 차트 위치 (크기 조정) */}
                    <div className="col-md-4">
                        <div className="like-chart-container" style={{ textAlign: "center" }}>
                            <h4 className="like-chart-title">여행 스타일 분석</h4>
                            <div style={{ width: "100%", maxWidth: "500px", height: "400px", margin: "0 auto" }}>
                                <BackpackChart />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
                            <div className="row">

                                {/* ✅ 오른쪽 - 게시글 리스트 (4열 유지) */}
                                <div className="col-md-9">
                                    <div className="row">
                                        {blogPosts.map(post => (
                                            <div className="col-md-3 d-flex ftco-animate" key={post.id}>
                                                <div className="blog-entry align-self-stretch">
                                                    <Link to={`/traveler/community/${post.id}`} className="block-20"
                                                        style={{ backgroundImage: `url(${post.image})` }}>
                                                    </Link>
                                                    <div className="text p-4 d-block">
                                                        <span className="tag">{post.category}</span>
                                                        <h3 className="heading mt-3"><Link to="">{post.title}</Link></h3>
                                                        <div className="meta mb-3">
                                                            <LikeButton
                                                                namespace="testing-react"
                                                                id={`like-button-${post.id}`}
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

                        {/* 작성하기 버튼 - 왼쪽 정렬 + 크기 동일 */}
                        <div className="row mt-5">
                            <div className="col text-center">
                                <Link
                                    to='/traveler/BackpackForm'
                                    className="btn btn-primary"
                                    style={{
                                        display: 'inline-block',
                                        backgroundColor: '#FF5A5F', // 로그인 버튼과 동일한 색상
                                        color: 'white',
                                        padding: '12px 20px',
                                        borderRadius: '30px',  // 로그인 버튼처럼 둥글게
                                        textDecoration: 'none',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        transition: 'background 0.3s',
                                        cursor: 'pointer',
                                        border: 'none',
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과 추가
                                        width: '150px', // 버튼 크기를 등록하기 버튼과 동일하게
                                        textAlign: 'center', // 텍스트 중앙 정렬
                                        marginBottom: '20px' // 페이지네이션과 간격 추가
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E04848'} // hover 효과
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FF5A5F'}
                                >
                                    작성하기
                                </Link>

                                {/* 페이지네이션 */}
                                <div className="block-27 mt-4">
                                    <ul>
                                        <li><Link to="">&lt;</Link></li>
                                        <li><Link to="">1</Link></li>
                                        <li><Link to="">2</Link></li>
                                        <li><Link to="">3</Link></li>
                                        <li><Link to="">4</Link></li>
                                        <li><Link to="">5</Link></li>
                                        <li><Link to="">&gt;</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default BackpackList;
