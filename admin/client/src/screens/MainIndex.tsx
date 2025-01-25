import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import Header from "../components/common/Header";
import Expenses from "./Accounts/Expenses";
import Invoices from "./Accounts/Invoices";
import Payments from "./Accounts/Payments";
import HrDashboard from "./Dashboard/HrDashboard";
import ProjectDashboard from "./Dashboard/ProjectDashboard";
import Attendance from "./Employee/Attendance";
import AttendanceEmployees from "./Employee/AttendanceEmployees";
import Departments from "./Employee/Departments";
import EmployeeProfile from "./Employee/EmployeeProfile";
import Holidays from "./Employee/Holidays";
import LeaveRequest from "./Employee/LeaveRequest";
import Members from "./Employee/Members";
import ClientProfile from "./Our Clients/ClientProfile";
import Clients from "./Our Clients/Clients";
import Salaryslip from "./Payroll/Salaryslip";
import Leaders from "./Projects/Leaders";
import Projects from "./Projects/Projects";
import Tasks from "./Projects/Tasks";
import Timesheet from "./Projects/Timesheet";
import TicketsDetail from "./Tickets/TicketsDetail";
import TicketsView from "./Tickets/TicketsView";
import Alerts from "./UIComponents/Alerts";
import Calendar from "./App/Calendar";
import ChatApp from "./App/ChatApp";
import ApexCharts from "./OtherPages/ApexCharts";
import FormsExample from "./OtherPages/FormsExample";
import TablesExample from "./OtherPages/TablesExample";
import ReviewsPage from "./OtherPages/ReviewsPage";
import Icons from "./OtherPages/Icons";
import Widgets from "./OtherPages/Widgets";
import Badges from "./UIComponents/Badges";
import Breadcrumb from "./UIComponents/Breadcrumb";
import Buttons from "./UIComponents/Buttons";
import Cards from "./UIComponents/Cards";
import Carousel from "./UIComponents/Carousel";
import Collapse from "./UIComponents/Collapse";
import Dropdowns from "./UIComponents/Dropdowns";
import ListGroup from "./UIComponents/ListGroup";
import ModalUI from "./UIComponents/ModalUI";
import NavsUI from "./UIComponents/NavsUI";
import NavbarUI from "./UIComponents/NavbarUI";
import PaginationUI from "./UIComponents/PaginationUI";
import PopoversUI from "./UIComponents/PopoversUI";
import ProgressUI from "./UIComponents/ProgressUI";
import Scrollspy from "./UIComponents/Scrollspy";
import SpinnersUI from "./UIComponents/SpinnersUI";
import ToastsUI from "./UIComponents/ToastsUI";
import StaterPage from "./Stater/StaterPage";
import PageHeader1 from "../components/common/PageHeader1";
import Documentation from "./Documentation/Documentation";
import Changelog from "./Changelog/Changelog";
import Help from "./Dashboard/Help";

const MainIndex: React.FC<{activekey:string|undefined}> = (props) => {

    const { activekey } = props;
    console.log(process.env.REACT_APP_BASE_URL)
    return (
        <div className="main px-lg-4 px-md-4">
            {activekey !== "/chat-app" ? activekey === "/documentation" ? <PageHeader1 /> : <Header /> : ""}
            <div className="body d-flex py-lg-3 py-md-2">
            <ReactRoutes>
                <Route path={`${process.env.REACT_APP_BASE_URL}/`} element={<HrDashboard/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/hr-dashboard`} element={<HrDashboard/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/project-dashboard`} element={<ProjectDashboard/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/projects`} element={<Projects/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/tasks`} element={<Tasks/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/timesheet`} element={<Timesheet/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/leaders`} element={<Leaders/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/tickets-view`} element={<TicketsView/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/tickets-detail`} element={<TicketsDetail/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/clients`} element={<Clients/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/client-profile`} element={<ClientProfile/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/members`} element={<Members/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/members-profile`} element={<EmployeeProfile/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/holidays`} element={<Holidays/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/attendance-employees`} element={<AttendanceEmployees/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/attendance`} element={<Attendance/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/leave-request`} element={<LeaveRequest/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/department`} element={<Departments/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/invoices`} element={<Invoices/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/payments`} element={<Payments/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/expenses`} element={<Expenses/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/employee-salary`} element={<Salaryslip/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/calander`} element={<Calendar/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/chat-app`} element={<ChatApp/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/apex-charts`} element={<ApexCharts/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/forms-example`} element={<FormsExample/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/table-example`} element={<TablesExample/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/reviews-page`} element={<ReviewsPage/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/icons`} element={<Icons/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/widgets`} element={<Widgets/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-alerts`} element={<Alerts/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-badge`} element={<Badges/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-breadcrumb`} element={<Breadcrumb/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-buttons`} element={<Buttons/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-card`} element={<Cards/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-carousel`} element={<Carousel/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-collapse`} element={<Collapse/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-dropdowns`} element={<Dropdowns/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-listgroup`} element={<ListGroup/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-modalui`} element={<ModalUI/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-navsui`} element={<NavsUI/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-navbarui`} element={<NavbarUI/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-paginationui`} element={<PaginationUI/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-popoversui`} element={<PopoversUI/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-progressui`} element={<ProgressUI/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-Scrollspyui`} element={<Scrollspy/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-spinnersui`} element={<SpinnersUI/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/ui-toastsui`} element={<ToastsUI/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/stater-page`} element={<StaterPage/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/documentation`} element={<Documentation/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/changelog`} element={<Changelog/>} />
                <Route path={`${process.env.REACT_APP_BASE_URL}/help`} element={<Help/>} />
            </ReactRoutes>
            </div>
        </div>
    )
}


export default MainIndex;