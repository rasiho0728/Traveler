import React from "react";
import GeneralChartCard from "../../components/Dashboard/GeneralChartCard";
import { EmployeeInfoChartData, TotalEmployeesChartData, TopHiringSourcesChartData } from "../../components/Data/DashboardData";
import GeneralChartCard_C from "../../components/Dashboard/GeneralChartCard_C";
import BoardAdmin from "../../components/Dashboard/BoardAdmin";
import Comm_AdminList from "../../components/Dashboard/Comm_AdminList";
import BlackList from "../../components/Dashboard/BlackList";
import BestUser from "../../components/Dashboard/BestUser";

const Community: React.FC = () => {
  return (
    <div className="container-xxl">
      <div className="row clearfix g-3">
        <div className="col-xl-8 col-lg-12 col-md-12 flex-column">
          <div className="row g-3">
            <div className="col-md-12">
              <GeneralChartCard Title="월간 사용자 수" data={EmployeeInfoChartData} />
            </div>
            <div className="community-flexBox" style={{"display" : "flex"}}>
                <div className="col-md-6">
                    <BlackList />
                </div>
                <div className="col-md-6">
                    <GeneralChartCard_C Title="가장 많이 사용된 단어" data={TotalEmployeesChartData} TitleRight="423" identity="totalemployee" />
                </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-md-12">
          <div className="row g-3">
            <div className="col-md-6 col-lg-6 col-xl-12"><BoardAdmin /></div>
            <div className="col-md-12 col-lg-12 col-xl-12"><Comm_AdminList /></div>
          </div>
        </div>
        <div className="col-md-12">
          <BestUser />
        </div>
      </div>
    </div>
  )
}


export default Community;