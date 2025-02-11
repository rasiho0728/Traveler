// 2025.01.24. 08:05 생성자: 이학수, HTML템플릿을 리엑트로 조정
import React, { useEffect } from 'react'
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc'
import { Link } from 'react-router-dom';

const About: React.FC = () => {
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
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 text-center ftco-animate" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                            <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span>About</span></p>
                            <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>회사 소개</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section">
                <div className="container">
                    <div className="row d-md-flex">
                        <div className="col-md-6 ftco-animate img about-image" style={{ backgroundImage: "url(/images/about.jpg)" }}>
                        </div>
                        <div className="col-md-6 ftco-animate p-md-5">
                            <div className="row">
                                <div className="col-md-12 nav-link-wrap mb-5">
                                    <div className="nav ftco-animate nav-pills nav-fill" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button className="nav-link active" id="v-pills-whatwedo-tab" data-bs-toggle="pill" data-bs-target="#v-pills-whatwedo" role="tab" aria-controls="v-pills-whatwedo" aria-selected="true">가능성</button>

                                        <button className="nav-link" id="v-pills-mission-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mission" role="tab" aria-controls="v-pills-mission" aria-selected="false">지금 하는 일</button>

                                        <button className="nav-link" id="v-pills-goal-tab" data-bs-toggle="pill" data-bs-target="#v-pills-goal" role="tab" aria-controls="v-pills-goal" aria-selected="false">이뤄낸 것</button>
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex align-items-center">

                                    <div className="tab-content ftco-animate" id="v-pills-tabContent">

                                        <div className="tab-pane fade show active" id="v-pills-whatwedo" role="tabpanel" aria-labelledby="v-pills-whatwedo-tab">
                                            <div>
                                                <h2 className="mb-4">Offering Reliable Hosting</h2>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="v-pills-mission" role="tabpanel" aria-labelledby="v-pills-mission-tab">
                                            <div>
                                                <h2 className="mb-4">Exceptional Web Solutions</h2>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="v-pills-goal" role="tabpanel" aria-labelledby="v-pills-goal-tab">
                                            <div>
                                                <h2 className="mb-4">Help Our Customer</h2>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                                            </div>
                                        </div>
                                    </div>
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
                            <span className="subheading">FAQ</span>
                            <h2 className="mb-4"><strong>자주묻는 질문</strong> </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ftco-animate">
                            <div id="accordion">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <a className="card-link" data-bs-toggle="collapse" href="#menuone" aria-expanded="true" aria-controls="menuone">When she reached the first hills? <span className="collapsed"><i className="icon-plus-circle"></i></span><span className="expanded"><i className="icon-minus-circle"></i></span></a>
                                            </div>
                                            <div id="menuone" className="collapse show">
                                                <div className="card-body">
                                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <a className="card-link" data-bs-toggle="collapse" href="#menutwo" aria-expanded="false" aria-controls="menutwo">Italic Mountains, she had a last <span className="collapsed"><i className="icon-plus-circle"></i></span><span className="expanded"><i className="icon-minus-circle"></i></span></a>
                                            </div>
                                            <div id="menutwo" className="collapse">
                                                <div className="card-body">
                                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <a className="card-link" data-bs-toggle="collapse" href="#menu3" aria-expanded="false" aria-controls="menu3"> Bookmarksgrove, the headline? <span className="collapsed"><i className="icon-plus-circle"></i></span><span className="expanded"><i className="icon-minus-circle"></i></span></a>
                                            </div>
                                            <div id="menu3" className="collapse">
                                                <div className="card-body">
                                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <a className="card-link" data-bs-toggle="collapse" href="#menu4" aria-expanded="false" aria-controls="menu4">Alphabet Village and the subline of her own? <span className="collapsed"><i className="icon-plus-circle"></i></span><span className="expanded"><i className="icon-minus-circle"></i></span></a>
                                            </div>
                                            <div id="menu4" className="collapse">
                                                <div className="card-body">
                                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <a className="card-link" data-bs-toggle="collapse" href="#menu5" aria-expanded="false" aria-controls="menu5">Then she continued her way? <span className="collapsed"><i className="icon-plus-circle"></i></span><span className="expanded"><i className="icon-minus-circle"></i></span></a>
                                            </div>
                                            <div id="menu5" className="collapse">
                                                <div className="card-body">
                                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <a className="card-link" data-bs-toggle="collapse" href="#menu6" aria-expanded="false" aria-controls="menu6">Skyline of her hometown Bookmarksgrove? <span className="collapsed"><i className="icon-plus-circle"></i></span><span className="expanded"><i className="icon-minus-circle"></i></span></a>
                                            </div>
                                            <div id="menu6" className="collapse">
                                                <div className="card-body">
                                                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About