import React from "react";
import HignlighterCard from "../../components/Dashboard/HignlighterCard";
import GeneralChartCard from "../../components/Dashboard/GeneralChartCard";
import { TotalEmployeesChartData } from "../../components/Data/DashboardData";
import ApprovalInfo from "../../components/Dashboard/ApprovalInfo";

const MyDashboard: React.FC = () => {
  const Avatar1 = require("../../assets/images/xs/avatar1.jpg");
  return (
    <div className="container-xxl">
      <div className="row clearfix g-3">
        <div className="col-xl-8 col-lg-12 col-md-12 flex-column">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-header p-0 text-center bg-transparent">
                  <div className="mt-3">
                    <h3>로그인 정보</h3>
                    <div className="pt-4 pb-2" style={{ 
                      background: 'linear-gradient(to right,rgb(126, 178, 255),rgb(117, 211, 255),rgb(126, 178, 255))', 
                      }}>
                      <img src={Avatar1} alt="" className="border rounded-circle d-block mx-auto mb-2" width='100px' height='100px' />
                      <span className="text-white h2 text-decoration-underline">132</span>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0 my-3" >
                  <div className="row mb-2">
                    <div className="col-6">
                      <p className="h6 text-center m-0">최근 접속</p>
                    </div>
                    <div className="col-6">
                      <p className="h6 text-center m-0">123</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row mb-2">
                    <div className="col-6">
                      <p className="h6 text-center m-0">접속 IP</p>
                    </div>
                    <div className="col-6">
                      <p className="h6 text-center m-0">123</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row mb-2">
                    <div className="col-6">
                      <p className="h6 text-center m-0">입사일</p>
                    </div>
                    <div className="col-6">
                      <p className="h6 text-center m-0">123</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 px-2">
              <div className="card h-100">
                <div className="card-header p-0 bg-transparent">
                  <div className="p-3 pb-0 border-bottom">
                    <h5>공지사항</h5>
                  </div>
                </div>
                <div className="card-body p-0" >
                  <div className="row bg-primary py-2 mx-0">
                    <div className="col-6">
                      <p className="h6 m-0 text-white">제목</p>
                    </div>
                    <div className="col-3">
                      <p className="h6 text-center m-0  text-white">일자</p>
                    </div>
                    <div className="col-3">
                      <p className="h6 text-center m-0  text-white">작성자</p>
                    </div>
                  </div>
                  <div style={{maxHeight:'310px', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {
                      Array.from({ length: 10 }).map(() => (
                        <div className="row py-3 mx-0">
                          <div className="col-6">
                            <p className="h6 m-0">제목</p>
                          </div>
                          <div className="col-3">
                            <p className="h6 text-center m-0">일자</p>
                          </div>
                          <div className="col-3">
                            <p className="h6 text-center m-0">작성자</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <GeneralChartCard Title="Total Employees" data={TotalEmployeesChartData} TitleRight="423" identity="totalemployee" />
                </div>
                <div className="col-md-6">
                  <GeneralChartCard Title="Total Employees" data={TotalEmployeesChartData} TitleRight="423" identity="totalemployee" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-md-12">
          <div className="row g-3">
            <div className="col-md-6 col-lg-6 col-xl-12"><HignlighterCard /></div>
            <div className="col-md-6 col-lg-6 col-xl-12 flex-column">
              <ApprovalInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default MyDashboard;