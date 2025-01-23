import React, { useEffect, useState } from 'react'
import CardCarousel from '../Comm/CardCarousel';
import AnimatedNumber from '../Comm/AnimatedNumber';

const Test: React.FC = () => {

    return (
        <div>
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
        </div>
    )
}

export default Test