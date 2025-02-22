import React from "react";


const Employeesavaibility:React.FC = () => {

    return (
        <div className="card">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Employees Availability</h6>
            </div>
            <div className="card-body">
                <div className="row g-2 row-deck">
                    <div className="col-md-6 col-sm-6">
                        <div className="card">
                            <div className="card-body ">
                                <i className="icofont-checked fs-3"></i>
                                <h6 className="mt-3 mb-0 fw-bold small-14">Attendance</h6>
                                <span className="text-muted">400</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="card">
                            <div className="card-body ">
                                <i className="icofont-stopwatch fs-3"></i>
                                <h6 className="mt-3 mb-0 fw-bold small-14">Late Coming</h6>
                                <span className="text-muted">17</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="card">
                            <div className="card-body ">
                                <i className="icofont-ban fs-3"></i>
                                <h6 className="mt-3 mb-0 fw-bold small-14">Absent</h6>
                                <span className="text-muted">06</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="card">
                            <div className="card-body ">
                                <i className="icofont-beach-bed fs-3"></i>
                                <h6 className="mt-3 mb-0 fw-bold small-14">Leave Apply</h6>
                                <span className="text-muted">14</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Employeesavaibility;