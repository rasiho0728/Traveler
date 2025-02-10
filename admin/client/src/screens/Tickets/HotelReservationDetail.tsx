// 2025.02.06. 09:40 생성자: 황보도연, UI 변경 
import React, { useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import ClientProfileCard from "../../components/Clients/ClientProfileCard";
import StatusCard from "../../components/Ticket/StatusCard";



function HotelReservationDetail() {

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="예약자 프로필" />
            <div className="row g-3">
                <div className="col-xl-8 col-lg-12 col-md-12">
                    <ClientProfileCard />
                </div>
            </div>

            <div className="container-xxl">
                <PageHeader headerTitle="예약 내역" />
                <div className="row g-3">
                    <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                        <div className="row g-3 mb-3">
                            <div className="col-md-4">
                                {/* progressBg="bg-success" 컬러 변경은 bootstrap colors 변경 참고 */}
                                <StatusCard progress="예약중" progressBg="bg-success" iconClass="icofont-page fs-4" iconbg="bg-lightgreen" title="예약 상태" />
                            </div>
                            <div className="col-md-4">
                                <StatusCard progress="신라스테이" progressBg="bg-info" details="" iconClass="icofont-5-star-hotel fs-4" iconbg="bg-lightgreen" title="호텔명" />
                            </div>
                            <div className="col-md-4">
                                <StatusCard progress="2025.02.10" progressBg="bg-warning" details="" iconClass="icofont-calendar fs-4" iconbg="bg-lightgreen" title="예약 날짜" />
                            </div>
                            <div className="col-md-4">
                                <StatusCard progress="스위트" progressBg="bg-warning" details="" iconClass="icofont-bed fs-4" iconbg="bg-lightgreen" title="객실" />
                            </div>
                            <div className="col-md-4">
                                <StatusCard progress="5" progressBg="bg-primary" details="" iconClass="icofont-people fs-4" iconbg="bg-lightgreen" title="인원수" />
                            </div>
                            <div className="col-md-4">
                                <StatusCard progress="50,000" progressBg="bg-secondary" details="" iconClass="icofont-dollar fs-4" iconbg="bg-lightgreen" title="금액" />
                            </div>
                        </div>
                        <div className="row align-items-center">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HotelReservationDetail;