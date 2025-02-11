import React, { useEffect } from 'react';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import { Link } from 'react-router-dom';
import { Provider } from "@lyket/react";
import { LikeButton } from "@lyket/react";
import '../../css/likeDetail.css';

const LikeDetail: React.FC = () => {
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

    return (
        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
            <div className='LikeDetail'>
                
                <div className="hero-wrap js-halfheight" style={{ backgroundImage: "url('/images/bg_4.jpg')" }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center" data-scrollax-parent="true">
                            <div className="col-md-9 ftco-animate text-center" data-scrollax='{"properties": {"translateY": "70%"}}'>
                                <p className="breadcrumbs" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>
                                    <span className="mr-2"><Link to="/traveler/home">Home</Link></span> 
                                    {/* <span className="mr-2"><Link to="/traveler/blog">Blog</Link></span>  */}
                                    <span>커뮤니티</span>
                                </p>
                                <h1 className="mb-3 bread" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>나의 배낭</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="ftco-section ftco-degree-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 ftco-animate">
                                <h2 className="mb-3">여행자를 위한 10가지 팁</h2>
                                <p>#1. 여행 전 계획 세우기</p>
                                <p><img src="/images/image_7.jpg" alt="" className="img-fluid" /></p>
                                <p>여행지의 날씨, 필수 아이템, 이동 방법 등을 미리 조사하세요</p>

                                

                                <h2 className="mb-3 mt-5">#2. 가벼운 짐 꾸리기</h2>
                                <p>불필요한 짐을 줄이고 다용도로 활용할 수 있는 옷과 아이템을 챙기세요</p>
                                <p><img src="/images/image_8.jpg" alt="" className="img-fluid" /></p>
                                <p>현지 대중교통, 택시, 렌터카 이용 방법을 미리 조사하세요</p>
                                <p>사진, 영상, 다이어리 등을 활용해 소중한 여행 순간을 기록하세요</p>

                                <div className="tag-widget post-tag-container mb-5 mt-5">
                                    <div className="tagcloud">
                                        <Link to="#" className="tag-cloud-link">체험</Link>
                                        <Link to="#" className="tag-cloud-link">문화</Link>
                                        <Link to="#" className="tag-cloud-link">교통</Link>
                                        <Link to="#" className="tag-cloud-link">여행</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 sidebar ftco-animate">
                                <div className="sidebar-box">

                                </div>
                            </div>
                        </div>
                        {/* 첫 번째 좋아요 버튼 */}
                        <div className="like-button-container">
                        <LikeButton
                            namespace="testing-react"
                            id="traveler-tips"
                            component={({
                                handlePress,
                                totalLikes
                            }) => (
                                <button onClick={handlePress} className="like-button">
                                    ❤️ {totalLikes}
                                </button>
                            )}
                        />
                        </div>
                    </div>
                </section>
            </div>
        </Provider>
    );
};

export default LikeDetail;