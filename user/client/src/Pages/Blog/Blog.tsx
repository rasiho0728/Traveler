// 2025.01.24. 08:30 생성자: 이학수, HTML템플릿을 리엑트로 조정
import React, { useEffect } from 'react'
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {

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
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/bg_4.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                            <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span>Blog</span></p>
                            <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>Tips &amp; Articles</h1>
                        </div>
                    </div>
                </div>
            </div>


            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="/traveler/blog/1" className="block-20" style={{ backgroundImage: "url('/images/image_1.jpg')" }}>
                                </Link>
                                <div className="text p-4 d-block">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><Link to="">8 Best homestay in Philippines that you don't miss out</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="">August 12, 2018</Link></div>
                                        <div><Link to="">Admin</Link></div>
                                        <div><Link to="" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="/traveler/blog/1" className="block-20" style={{ backgroundImage: "url('/images/image_2.jpg')" }}>
                                </Link>
                                <div className="text p-4">
                                    <span className="tag">Culture</span>
                                    <h3 className="heading mt-3"><Link to="">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="">August 12, 2018</Link></div>
                                        <div><Link to="">Admin</Link></div>
                                        <div><Link to="" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="/traveler/blog/1" className="block-20" style={{ backgroundImage: "url('/images/image_3.jpg')" }}>
                                </Link>
                                <div className="text p-4">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><Link to="">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="">August 12, 2018</Link></div>
                                        <div><Link to="">Admin</Link></div>
                                        <div><Link to="" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="/traveler/blog/1" className="block-20" style={{ backgroundImage: "url('/images/image_4.jpg')" }}>
                                </Link>
                                <div className="text p-4">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><Link to="">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="">August 12, 2018</Link></div>
                                        <div><Link to="">Admin</Link></div>
                                        <div><Link to="" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="/traveler/blog/1" className="block-20" style={{ backgroundImage: "url('/images/image_5.jpg')" }}>
                                </Link>
                                <div className="text p-4 d-block">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><Link to="">8 Best homestay in Philippines that you don't miss out</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="">August 12, 2018</Link></div>
                                        <div><Link to="">Admin</Link></div>
                                        <div><Link to="" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="/traveler/blog/1" className="block-20" style={{ backgroundImage: "url('/images/image_6.jpg')" }}>
                                </Link>
                                <div className="text p-4">
                                    <span className="tag">Culture</span>
                                    <h3 className="heading mt-3"><Link to="">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="">August 12, 2018</Link></div>
                                        <div><Link to="">Admin</Link></div>
                                        <div><Link to="" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="/traveler/blog/1" className="block-20" style={{ backgroundImage: "url('/images/image_7.jpg')" }}>
                                </Link>
                                <div className="text p-4">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><Link to="">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="">August 12, 2018</Link></div>
                                        <div><Link to="">Admin</Link></div>
                                        <div><Link to="" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="/traveler/blog/1" className="block-20" style={{ backgroundImage: "url('/images/image_8.jpg')" }}>
                                </Link>
                                <div className="text p-4">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><Link to="">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="">August 12, 2018</Link></div>
                                        <div><Link to="">Admin</Link></div>
                                        <div><Link to="" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="block-27">
                                <ul>
                                    <li><Link to="">&lt;</Link></li>
                                    <li className="active"><span>1</span></li>
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

export default Blog