import React from "react";

const TopPerformers_C = () => {
    const Avatar2 = require("../../assets/images/lg/avatar2.jpg");
    const Avatar3 = require("../../assets/images/lg/avatar3.jpg");
    const Avatar5 = require("../../assets/images/lg/avatar5.jpg");
    const Avatar8 = require("../../assets/images/lg/avatar8.jpg");
    const Avatar9 = require("../../assets/images/lg/avatar9.jpg");
    const Avatar12 = require("../../assets/images/lg/avatar12.jpg");

    return (
        <div className="card light-danger-bg">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">이달의 회원</h6>
            </div>
            <div className="card-body">
                <div className="row g-3 align-items-center">
                    <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-2">
                        <p>You have 140 <span className="fw-bold">influencers </span> in your company.</p>
                        <div className="d-flex  justify-content-between text-center">
                            <div className="">
                                <h3 className="fw-bold">350</h3>
                                <span className="small">New Task</span>
                            </div>
                            <div className="">
                                <h3 className="fw-bold">130</h3>
                                <span className="small">Task Completed</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-10">
                        <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-6 row-deck top-perfomer">
                            <div className="col">
                                <div className="card shadow">
                                    <div className="card-body text-center d-flex flex-column justify-content-center">
                                        <img className="avatar lg rounded-circle img-thumbnail mx-auto" src={Avatar2} alt="profile" />
                                        <h6 className="fw-bold my-2 small-14">Luke Short</h6>
                                        <span className="text-muted mb-2">@Short</span>
                                        <h4 className="fw-bold text-primary fs-3">80%</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow">
                                    <div className="card-body text-center d-flex flex-column justify-content-center">
                                        <img className="avatar lg rounded-circle img-thumbnail mx-auto" src={Avatar5} alt="profile" />
                                        <h6 className="fw-bold my-2 small-14">John Hard</h6>
                                        <span className="text-muted mb-2">@rdacre</span>
                                        <h4 className="fw-bold text-primary fs-3">70%</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow">
                                    <div className="card-body text-center d-flex flex-column justify-content-center">
                                        <img className="avatar lg rounded-circle img-thumbnail mx-auto" src={Avatar8} alt="profile" />
                                        <h6 className="fw-bold my-2 small-14">Paul Rees</h6>
                                        <span className="text-muted mb-2">@Rees</span>
                                        <h4 className="fw-bold text-primary fs-3">77%</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow">
                                    <div className="card-body text-center d-flex flex-column justify-content-center">
                                        <img className="avatar lg rounded-circle img-thumbnail mx-auto" src={Avatar9} alt="profile" />
                                        <h6 className="fw-bold my-2 small-14">Rachel Parr</h6>
                                        <span className="text-muted mb-2">@Parr</span>
                                        <h4 className="fw-bold text-primary fs-3">85%</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow">
                                    <div className="card-body text-center d-flex flex-column justify-content-center">
                                        <img className="avatar lg rounded-circle img-thumbnail mx-auto" src={Avatar12} alt="profile" />
                                        <h6 className="fw-bold my-2 small-14">Eric Reid</h6>
                                        <span className="text-muted mb-2">@Eric</span>
                                        <h4 className="fw-bold text-primary fs-3">95%</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow">
                                    <div className="card-body text-center d-flex flex-column justify-content-center">
                                        <img className="avatar lg rounded-circle img-thumbnail mx-auto" src={Avatar3} alt="profile" />
                                        <h6 className="fw-bold my-2 small-14">Jan Ince</h6>
                                        <span className="text-muted mb-2">@Ince</span>
                                        <h4 className="fw-bold text-primary fs-3">97%</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TopPerformers_C;