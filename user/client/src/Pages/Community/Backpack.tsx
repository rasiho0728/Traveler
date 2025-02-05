import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';

const Backpack: React.FC = () => {
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
        <div>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/bg_4.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax='{"properties": {"translateY": "70%"}}'>
                            <p className="breadcrumbs" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>
                                <span className="mr-2"><Link to="/traveler/home">Home</Link></span> 
                                <span>Backpack</span>
                            </p>
                            <h1 className="mb-3 bread" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>Travel &amp; Gear</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="/traveler/backpack/1" className="block-20" style={{ backgroundImage: "url('/images/image_1.jpg')" }}>
                                </Link>
                                <div className="text p-4 d-block">
                                    <span className="tag">Tips, Gear</span>
                                    <h3 className="heading mt-3"><Link to="">10 Must-Have Items for Backpackers</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="">January 15, 2025</Link></div>
                                        <div><Link to="">Admin</Link></div>
                                        <div><Link to="" className="meta-chat"><span className="icon-chat"></span> 5</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="/traveler/backpack/2" className="block-20" style={{ backgroundImage: "url('/images/image_2.jpg')" }}>
                                </Link>
                                <div className="text p-4">
                                    <span className="tag">Gear</span>
                                    <h3 className="heading mt-3"><Link to="">How to Choose the Perfect Travel Backpack</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="">January 20, 2025</Link></div>
                                        <div><Link to="">Admin</Link></div>
                                        <div><Link to="" className="meta-chat"><span className="icon-chat"></span> 2</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <Link to="/traveler/backpack/3" className="block-20" style={{ backgroundImage: "url('/images/image_3.jpg')" }}>
                                </Link>
                                <div className="text p-4">
                                    <span className="tag">Travel</span>
                                    <h3 className="heading mt-3"><Link to="">Top 5 Backpacking Destinations in 2025</Link></h3>
                                    <div className="meta mb-3">
                                        <div><Link to="">February 5, 2025</Link></div>
                                        <div><Link to="">Admin</Link></div>
                                        <div><Link to="" className="meta-chat"><span className="icon-chat"></span> 8</Link></div>
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
    );
};

export default Backpack;
