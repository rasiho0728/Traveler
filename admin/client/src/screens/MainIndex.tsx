import React, { useEffect, useState } from "react";
import { Route, Routes as ReactRoutes, useLocation } from "react-router-dom";
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
import SignIn from "../components/Auth/SignIn";
import Signup from "../components/Auth/Signup";
import Transport from "./Projects/Transport";
import Hotel from "./Tickets/Hotel";
import TourUpdate from "./Tour/TourUpdate";
import TourDashboard from "./Tour/TourDashboard";
import TourDiary from "./Tour/TourDiary";
import Community from "./Dashboard/Community";
import Members_C from "./Dashboard/Members_C";
import Talk from "./Dashboard/Talk";
import MailSending from "./Dashboard/MailSending";
import AiBlackList from "./Dashboard/AiBlackList";
import TourList from "./Tour/TourList";
import TourListDetail from "./Tour/TourListDetail";
import TourUpload from "./Tour/TourUpload";
import TourDiaryDetail from "./Tour/TourDiaryDetail";
import Members_U from "./Dashboard/Members_U";
import ServerManagement from "./OtherPages/ServerManagement";
import HotelReservation from "./Tickets/HotelReservation";
import HotelReservationDetail from "./Tickets/HotelReservationDetail";



const MainIndex: React.FC = () => {
    const { pathname } = useLocation();
    const [activekey, setActivekey] = useState('')

    useEffect(() => {
        const pathList = pathname.split('/')
        setActivekey('/' + pathList[pathList.length - 1])
        // console.log('/' + pathList[pathList.length - 1]) aa
    }, [pathname])

    return (
        <div className="main px-lg-4 px-md-4">
            {activekey !== "/chat-app" ? activekey === "/documentation" ? <PageHeader1 /> : <Header /> : ""}
            <div className="body d-flex py-lg-3 py-md-2">
                <ReactRoutes>
                    <Route path={`${process.env.REACT_APP_BASE_URL}/`} element={<HrDashboard />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/hr-dashboard`} element={<HrDashboard />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/community`} element={<Community />} /> {/*2025 02 07 장지원 커뮤니티 수정중 */}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/mailsending`} element={<MailSending />} /> {/*2025 02 07 장지원 블랙리스트 수정중 */}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/memberlist_user`} element={<Members_U />} /> {/*2025 02 08 장지원컴퓨터 멤버리스트_유저 수정중 */}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/memberlist`} element={<Members_C />} /> {/*2025 02 07 장지원 멤버리스트 수정중 */}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/bagtalk`} element={<Talk />} /> {/*2025 02 07 장지원 배낭톡 수정중 */}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/blacklist`} element={<AiBlackList />} /> {/*2025 02 07 장지원 배낭톡 수정중 */}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/project-dashboard`} element={<ProjectDashboard />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/projects`} element={<Projects />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/Transport`} element={<Transport />} /> {/**20250205최의진 추가 */}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/tourlist`} element={<TourList />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/tourlist/detail/:id`} element={<TourListDetail />} />{/*250207 민다빈 완료*/}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/tourlist/tour-upload`} element={<TourUpload />} />{/*250206 민다빈 완료*/}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/tourlist/tour-update`} element={<TourUpdate />} />{/*250207 민다빈 완료*/}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/tourstaus`} element={<TourDashboard />} />{/*250207 민다빈 수정*/}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/tourdiary`} element={<TourDiary />} />{/*250206 민다빈 수정*/}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/tourdiary/detail/:id`} element={<TourDiaryDetail />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/tasks`} element={<Tasks />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/timesheet`} element={<Timesheet />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/leaders`} element={<Leaders />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/HotelReservation`} element={<HotelReservation />} /> {/* 20250210 황보도연 변경 */}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/hotel`} element={<Hotel />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/HotelReservationDetail`} element={<HotelReservationDetail />} /> {/* 20250210 황보도연 변경 */}
                    <Route path={`${process.env.REACT_APP_BASE_URL}/clients`} element={<Clients />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/client-profile`} element={<ClientProfile />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/members`} element={<Members />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/members-profile`} element={<EmployeeProfile />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/holidays`} element={<Holidays />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/attendance-employees`} element={<AttendanceEmployees />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/attendance`} element={<Attendance />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/leave-request`} element={<LeaveRequest />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/department`} element={<Departments />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/invoices`} element={<Invoices />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/payments`} element={<Payments />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/expenses`} element={<Expenses />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/employee-salary`} element={<Salaryslip />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/calander`} element={<Calendar />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/chat-app`} element={<ChatApp />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/apex-charts`} element={<ApexCharts />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/forms-example`} element={<FormsExample />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/table-example`} element={<TablesExample />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/reviews-page`} element={<ReviewsPage />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/icons`} element={<Icons />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/widgets`} element={<Widgets />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-alerts`} element={<Alerts />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-badge`} element={<Badges />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-breadcrumb`} element={<Breadcrumb />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-buttons`} element={<Buttons />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-card`} element={<Cards />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-carousel`} element={<Carousel />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-collapse`} element={<Collapse />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-dropdowns`} element={<Dropdowns />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-listgroup`} element={<ListGroup />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-modalui`} element={<ModalUI />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-navsui`} element={<NavsUI />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-navbarui`} element={<NavbarUI />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-paginationui`} element={<PaginationUI />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-popoversui`} element={<PopoversUI />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-progressui`} element={<ProgressUI />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-Scrollspyui`} element={<Scrollspy />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-spinnersui`} element={<SpinnersUI />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ui-toastsui`} element={<ToastsUI />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/stater-page`} element={<StaterPage />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/documentation`} element={<Documentation />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/changelog`} element={<Changelog />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/help`} element={<Help />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/sign-in`} element={<SignIn />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/sign-up`} element={<Signup />} />
                    <Route path={`${process.env.REACT_APP_BASE_URL}/ServerManagement`} element={<ServerManagement />} /> {/* 20250210 황보도연 추가 */}

                </ReactRoutes>
            </div>
        </div>
    )
}


export default MainIndex;