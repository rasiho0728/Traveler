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
        { id: 1, title: "8 Best homestay in Philippines that you don't miss out", image: "/images/image_1.jpg", category: "Tips, Travel" },
        { id: 2, title: "Even the all-powerful Pointing has no control about the blind texts", image: "/images/image_2.jpg", category: "Culture" },
        { id: 3, title: "Even the all-powerful Pointing has no control about the blind texts", image: "/images/image_3.jpg", category: "Tips, Travel" },
        { id: 4, title: "Even the all-powerful Pointing has no control about the blind texts", image: "/images/image_4.jpg", category: "Tips, Travel" },
        { id: 5, title: "8 Best homestay in Philippines that you don't miss out", image: "/images/image_5.jpg", category: "Tips, Travel" },
        { id: 6, title: "Even the all-powerful Pointing has no control about the blind texts", image: "/images/image_6.jpg", category: "Culture" },
        { id: 7, title: "Even the all-powerful Pointing has no control about the blind texts", image: "/images/image_7.jpg", category: "Tips, Travel" },
        { id: 8, title: "Even the all-powerful Pointing has no control about the blind texts", image: "/images/image_8.jpg", category: "Tips, Travel" }
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
                                <span>Blog</span>
                            </p>
                            <h1 className="mb-3 bread" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>Tips &amp; Articles</h1>
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
                                        <Link to={`/traveler/community/${post.id}`} className="block-20" style={{ backgroundImage: `url(${post.image})` }}>
                                        </Link>
                                        <div className="text p-4 d-block">
                                            <span className="tag">{post.category}</span>
                                            <h3 className="heading mt-3"><Link to="">{post.title}</Link></h3>
                                            <div className="meta mb-3">
                                                <LikeButton
                                                    namespace="testing-react"
                                                    id={`like-button-${post.id}`}
                                                    hideCounterIfLessThan={0}
                                                    component={({
                                                        handlePress,
                                                        totalLikes
                                                    }) => (
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
                    <div className="row mt-5">
                    <Link to='/traveler/LikeMemo' className='write-button'>작성하기</Link>
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
