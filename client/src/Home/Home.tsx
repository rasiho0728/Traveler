// 2025.01.21. 19:35 생성자: 이학수, HTML템플릿을 리엑트로 조정
import React, { useEffect } from 'react'
import { appear_animate } from '../Comm/CommomFunc';
import GalleryCarousel from '../Comm/GalleryCarousel';
import CardCarousel from '../Comm/CardCarousel';
import AnimatedNumber from '../Comm/AnimatedNumber';

const Home: React.FC = () => {
    useEffect(() => {
        // 스크롤 이동을 감지해서 위치 변환 및 투명도 조절 함수
        const handleScroll = () => {
            const elements = document.querySelectorAll("[data-scrollax]")
            const scrollPosition = window.scrollY;
            elements.forEach((element: any) => {
                const config = JSON.parse(element.getAttribute("data-scrollax") || "{}").properties;
                const translateY = config.translateY || "0px";
                const translateX = config.translateX || "0px";
                const opacity = config.opacity || 1;

                const yValue = parseFloat(translateY) * (1 - Math.exp(-0.01 * scrollPosition));
                const xValue = parseFloat(translateX) * (1 - Math.exp(-0.01 * scrollPosition));
                const opacityValue = opacity / (opacity + scrollPosition * 0.1);

                element.style.transform = `translate(${xValue}px, ${yValue}%)`;
                element.style.opacity = opacityValue;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        // 요소의 높이를 화면의 크기로 갱신해주는 함수
        const updateHeight = () => {
            const elements = document.querySelectorAll('.js-fullheight')
            elements.forEach((element: any) => {
                element.style.height = `${window.innerHeight}px`;
            });

        };
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    useEffect(() => {
        // 등장 효과 적용 함수 호출
        appear_animate()
    }, []);

    useEffect(() => {
        // 로딩이 필요할때 로딩화면 출력, 설정한 시간만큼 출력
        setTimeout(function () {
            const ftco_loader = document.getElementById('ftco-loader')
            if (ftco_loader) {
                ftco_loader.className = 'fullscreen';
            }
        }, 1);
    }, [])

    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                            <h1 className="mb-4" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><strong>Explore <br /></strong> your amazing city</h1>
                            <p data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>Find great places to stay, eat, shop, or visit from local experts</p>
                            <div className="block-17 my-4">
                                <form action="" method="post" className="d-block d-flex">
                                    <div className="fields d-block d-flex">
                                        <div className="textfield-search one-third">
                                            <input type="text" className="form-control" placeholder="Ex: food, service, hotel" />
                                        </div>
                                        <div className="select-wrap one-third">
                                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                            <select name="" id="" className="form-control" aria-placeholder="Keyword search">
                                                <option value="">Where</option>
                                                <option value="">San Francisco USA</option>
                                                <option value="">Berlin Germany</option>
                                                <option value="">Lodon United Kingdom</option>
                                                <option value="">Paris Italy</option>
                                            </select>
                                        </div>
                                    </div>
                                    <input type="submit" className="search-submit btn btn-primary" value="Search" />
                                </form>
                            </div>
                            <p>Or browse the highlights</p>
                            <p className="browse d-md-flex">
                                <span className="d-flex justify-content-md-center align-items-md-center"><a href="#"><i className="flaticon-fork"></i>Restaurant</a></span>
                                <span className="d-flex justify-content-md-center align-items-md-center"><a href="#"><i className="flaticon-hotel"></i>Hotel</a></span>
                                <span className="d-flex justify-content-md-center align-items-md-center"><a href="#"><i className="flaticon-meeting-point"></i>Places</a></span>
                                <span className="d-flex justify-content-md-center align-items-md-	center"><a href="#"><i className="flaticon-shopping-bag"></i>Shopping</a></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section services-section bg-light">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block text-center">
                                <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-guarantee"></span></div></div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">Best Price Guarantee</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block text-center">
                                <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-like"></span></div></div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">Travellers Love Us</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block text-center">
                                <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-detective"></span></div></div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">Best Travel Agent</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services d-block text-center">
                                <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-support"></span></div></div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">Our Dedicated Support</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-destination">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate fadeInUp ftco-animated">
                            <span className="subheading">Featured</span>
                            <h2 className="mb-4"><strong>Featured</strong> Destination</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <GalleryCarousel data={[1, 2, 3, 4, 5, 6]} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate">
                            <span className="subheading">Special Offers</span>
                            <h2 className="mb-4"><strong>Top</strong> Tour Packages</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/destination-1.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">Paris, Italy</a></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price">$200</span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <p className="days"><span>2 days 3 nights</span></p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><a href="#">Discover</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/destination-2.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">Paris, Italy2</a></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price">$200</span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <p className="days"><span>2 days 3 nights</span></p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><a href="#">Discover</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/destination-3.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">Paris, Italy</a></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price">$200</span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <p className="days"><span>2 days 3 nights</span></p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><a href="#">Discover</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/destination-4.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">Paris, Italy</a></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price">$200</span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <p className="days"><span>2 days 3 nights</span></p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><a href="#">Discover</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/destination-5.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">Paris, Italy</a></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price">$200</span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <p className="days"><span>2 days 3 nights</span></p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><a href="#">Discover</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: "url(/images/bg_1.jpg)" }}>
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                            <h2 className="mb-4">Some fun facts</h2>
                            <span className="subheading">More than 100,000 websites hosted</span>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <AnimatedNumber value={100000} duration={5000} />
                                            <span>Happy Customers</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <AnimatedNumber value={40000} duration={5000} />
                                            <span>Destination Places</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <AnimatedNumber value={87000} duration={5000} />
                                            <span>Hotels</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <AnimatedNumber value={56400} duration={5000} />
                                            <span>Restaurant</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate">
                            <span className="subheading">Special Offers</span>
                            <h2 className="mb-4"><strong>Popular</strong> Hotels &amp; Rooms</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-1.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">Hotel, Italy</a></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-2.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">Hotel, Italy</a></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-3.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">Hotel, Italy</a></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-4.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">Hotel, Italy</a></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/hotel-5.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><a href="#">Hotel, Italy</a></h3>
                                            <p className="rate">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star-o"></i>
                                                <span>8 Rating</span>
                                            </p>
                                        </div>
                                        <div className="two">
                                            <span className="price per-price">$40<br /><small>/night</small></span>
                                        </div>
                                    </div>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> Miami, Fl</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section testimony-section bg-light">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-md-5 heading-section ftco-animate">
                            <span className="subheading">Best Directory Website</span>
                            <h2 className="mb-4 pb-3"><strong>Why</strong> Choose Us?</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                            <p><a href="#" className="btn btn-primary btn-outline-primary mt-4 px-4 py-3">Read more</a></p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6 heading-section ftco-animate">
                            <span className="subheading">Testimony</span>
                            <h2 className="mb-4 pb-3"><strong>Our</strong> Guests Says</h2>
                            <div className="row ftco-animate">
                                <div className="col-md-12">
                                    <CardCarousel data={[1, 2, 3]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate">
                            <span className="subheading">Special Offers</span>
                            <h2 className="mb-4"><strong>Popular</strong> Restaurants</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/restaurant-1.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <h3><a href="#">Luxury Restaurant</a></h3>
                                    <p className="rate">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star-o"></i>
                                        <span>8 Rating</span>
                                    </p>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><a href="#">Discover</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/restaurant-2.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <h3><a href="#">Luxury Restaurant</a></h3>
                                    <p className="rate">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star-o"></i>
                                        <span>8 Rating</span>
                                    </p>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/restaurant-3.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <h3><a href="#">Luxury Restaurant</a></h3>
                                    <p className="rate">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star-o"></i>
                                        <span>8 Rating</span>
                                    </p>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="destination">
                                <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(/images/restaurant-4.jpg)" }}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3">
                                    <h3><a href="#">Luxury Restaurant</a></h3>
                                    <p className="rate">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star-o"></i>
                                        <span>8 Rating</span>
                                    </p>
                                    <p>Far far away, behind the word mountains, far from the countries</p>
                                    <hr />
                                    <p className="bottom-area d-flex">
                                        <span><i className="icon-map-o"></i> San Franciso, CA</span>
                                        <span className="ml-auto"><a href="#">Book Now</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate">
                            <span className="subheading">Recent Blog</span>
                            <h2><strong>Tips</strong> &amp; Articles</h2>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('/images/image_1.jpg')" }}>
                                </a>
                                <div className="text p-4 d-block">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><a href="#">8 Best homestay in Philippines that you don't miss out</a></h3>
                                    <div className="meta mb-3">
                                        <div><a href="#">August 12, 2018</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('/images/image_2.jpg')" }}>
                                </a>
                                <div className="text p-4">
                                    <span className="tag">Culture</span>
                                    <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                    <div className="meta mb-3">
                                        <div><a href="#">August 12, 2018</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('/images/image_3.jpg')" }}>
                                </a>
                                <div className="text p-4">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                    <div className="meta mb-3">
                                        <div><a href="#">August 12, 2018</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('/images/image_4.jpg')" }}>
                                </a>
                                <div className="text p-4">
                                    <span className="tag">Tips, Travel</span>
                                    <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                    <div className="meta mb-3">
                                        <div><a href="#">August 12, 2018</a></div>
                                        <div><a href="#">Admin</a></div>
                                        <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section-parallax">
                <div className="parallax-img d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                                <h2>Subcribe to our Newsletter</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                                <div className="row d-flex justify-content-center mt-5">
                                    <div className="col-md-8">
                                        <form action="#" className="subscribe-form">
                                            <div className="form-group d-flex">
                                                <input type="text" className="form-control" placeholder="Enter email address" />
                                                <input type="submit" value="Subscribe" className="submit px-3" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* <!-- loader --> */}
            <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" /><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00" /></svg></div>
        </div >
    )
}

export default Home