import React, { useEffect } from 'react';
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';
import { Link } from 'react-router-dom';
import { Provider, UpdownButton } from "@lyket/react";
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
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    return (
        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
            <div className='LikeDetail'>
                <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/bg_4.jpg')" }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                            <div className="col-md-9 ftco-animate text-center" data-scrollax='{"properties": {"translateY": "70%"}}'>
                                <p className="breadcrumbs" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>
                                    <span className="mr-2"><Link to="/traveler/home">Home</Link></span> 
                                    <span className="mr-2"><Link to="/traveler/blog">Blog</Link></span> 
                                    <span>Blog Single</span>
                                </p>
                                <h1 className="mb-3 bread" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>Tips &amp; Articles</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="ftco-section ftco-degree-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 ftco-animate">
                                <h2 className="mb-3">10 Tips For The Traveler</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                <p><img src="/images/image_7.jpg" alt="" className="img-fluid" /></p>
                                <p>Molestiae cupiditate inventore animi, maxime sapiente optio...</p>

                                

                                <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
                                <p>Temporibus ad error suscipit exercitationem hic molestiae...</p>
                                <p><img src="/images/image_8.jpg" alt="" className="img-fluid" /></p>
                                <p>Quisquam esse aliquam fuga distinctio, quidem delectus...</p>
                                <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores...</p>

                                {/* 두 번째 좋아요/싫어요 버튼
                                <div className="like-button-container">
                                    <UpdownButton namespace="testing-react" id="creative-themes" />
                                </div> */}

                                <div className="tag-widget post-tag-container mb-5 mt-5">
                                    <div className="tagcloud">
                                        <Link to="#" className="tag-cloud-link">Life</Link>
                                        <Link to="#" className="tag-cloud-link">Sport</Link>
                                        <Link to="#" className="tag-cloud-link">Tech</Link>
                                        <Link to="#" className="tag-cloud-link">Travel</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 sidebar ftco-animate">
                                <div className="sidebar-box">
                                    <form action="#" className="search-form">
                                        <div className="form-group">
                                            <span className="icon fa fa-search"></span>
                                            <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* 첫 번째 좋아요/싫어요 버튼 */}
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