import React, { useEffect } from 'react';
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';
import { Link } from 'react-router-dom';
import { Provider, LikeButton } from "@lyket/react";

const Like: React.FC = () => {
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
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    const blogPosts = [
        { id: 1, title: "노을이 질 때 가면 더 예쁜 한강 야경 명소 BEST", image: "/images/image_1.jpg", category: "여행" },
        { id: 2, title: "초보부터 전문가까지, 강원도 인기 스키장 모음", image: "/images/image_2.jpg", category: "문화" },
        { id: 3, title: " 벚꽃 명소부터 유채꽃밭까지, 봄 감성 폭발 여행지", image: "/images/image_3.jpg", category: "여행" },
        { id: 4, title: "바다뷰 감성! 강릉에서 꼭 들려야 할 카페", image: "/images/image_4.jpg", category: "여행" },
        { id: 5, title: "서울 경복궁 근처에서 꼭 가봐야 할 명소", image: "/images/image_5.jpg", category: "여행" },
        { id: 6, title: "북적이는 도심 속 숨겨진 힐링 산책 코스", image: "/images/image_6.jpg", category: "문화" },
        { id: 7, title: " 와인 한잔하며 야경 즐기기 좋은 부산 바 리스트", image: "/images/image_7.jpg", category: "여행" },
        { id: 8, title: "수영장, 조식, 오션뷰까지! 국내 TOP 호캉스 호텔", image: "/images/image_8.jpg", category: "여행" }
    ];

    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/bg_4.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax='{"properties": {"translateY": "70%"}}'>
                            <p className="breadcrumbs" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>
                                <span className="mr-2"><Link to="/traveler/home">Home</Link></span> 
                                <span>커뮤니티</span>
                            </p>
                            <h1 className="mb-3 bread" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>나의 배낭</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section bg-light">
                <div className="container">
                    <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
                        <div className="row d-flex">
                            {blogPosts.map(post => (
                                <div className="col-md-3 d-flex ftco-animate" key={post.id}>
                                    <div className="blog-entry align-self-stretch">
                                        <Link to={`/traveler/community/${post.id}`} className="block-20" style={{ backgroundImage: `url(${post.image})` }}></Link>
                                        <div className="text p-4 d-block">
                                            <span className="tag">{post.category}</span>
                                            <h3 className="heading mt-3"><Link to="">{post.title}</Link></h3>
                                            <div className="meta mb-3">
                                                <LikeButton
                                                    namespace="testing-react"
                                                    id={`like-button-${post.id}`}
                                                    hideCounterIfLessThan={0}
                                                    component={({ handlePress, totalLikes }) => (
                                                        <button onClick={handlePress} style={{ border: "none", background: "none", fontSize: "20px" }}>
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
                    </Provider>

                    {/* 작성하기 버튼 - 왼쪽 정렬 + 크기 동일 */}
                    <div className="row mt-5">
                        <div className="col-md-12 text-left">
                            <Link 
                                to='/traveler/LikeMemo' 
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
                                    textAlign: 'center' // 텍스트 중앙 정렬
                                }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E04848'} // hover 효과
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FF5A5F'}
                            >
                                작성하기
                            </Link>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="block-27">
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
            </section>
        </div>
    )
}

export default Like;
