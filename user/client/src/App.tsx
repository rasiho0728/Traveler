// 2025.01.21. 19:35 생성자: 이학수, HTML템플릿을 리엑트로 조정
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import "./css/magnific-popup.css" // 알수 없음. 문제가 생길시 주석을 해제해 볼 것
// import "./css/aos.css" // 알수 없음. 문제가 생길시 주석을 해제해 볼 것
// import "./css/jquery.timepicker.css" // 알수 없음. 문제가 생길시 주석을 해제해 볼 것
import './css/style.css' // 전체 스타일 관련 css
import "./css/animate.css" // 동적 UI 관련 css
import "./css/open-iconic-bootstrap.min.css" // 아이콘 관련 css
import "./css/ionicons.min.css" // 아이콘 관련 css
import "./css/flaticon.css" // 아이콘 관련 css
import "./css/icomoon.css" // 아이콘 관련 css
import "./css/owl.carousel.min.css" // 캐러셀 관련 css
import "./css/owl.theme.default.min.css" // 캐러셀 관련 css
import "./css/react-datepicker.css" // 날짜 선택 모듈 css
import "react-modal-video/css/modal-video.min.css"; // 비디오 모달 css
import Header from './Comm/Header';
import Footer from './Comm/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import BlogDetail from './Pages/Blog/BlogDetail';
import ScrollToTop from './Comm/ScrollToTop';
import Contact from './Pages/Contact/Contact';
import Hotel2 from './Pages/Hotel/Hotel2';
import HotelDetail from './Pages/Hotel/HotelDetail';
import Tour from './Pages/Tour/Tour';
import Test from './Test/Test';
import Coalition from './Pages/Coalition/Coalition';
import TourDetail from './Pages/Tour/TourDetail';
import CoalitionAccount from './Pages/Coalition/CoalitionAccount';
import Chat from './Pages/Chat/Chat';
import Like from './Pages/Community/Like';
import LikeDetail from './Pages/Community/LikeDetail';
import Backpack from './Pages/Community/Backpack';
import BackpackDetail from './Pages/Community/BackpackDetail';
import Login from './Pages/Login/Login';
import SingUp from './Pages/Login/SingUp';
import Transport from './Transport/Transport';
import CoalitionForm from './Pages/Coalition/CoalitionForm';
import TourRecommended from './Pages/Tour/TourRecommended';
import TourMusicRecommended from './Pages/Tour/TourMusicRecommended';
import RoadDetail from './Transport/RoadDetail';
import SubwayDetail from './Transport/SubwayDetail';
import ReservationForm from './Pages/Hotel/ReservationForm';
import HotelDetail2 from './Pages/Hotel/HotelDetail2';

function App() {
  return (
    <BrowserRouter>
      {/* 페이지 이동시 스크롤 상당으로 이동 시켜주는 컴포넌트 */}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Test />} />
        <Route path='/traveler/home' element={<Home />} />
        <Route path='/traveler/about' element={<About />} />
        <Route path='/traveler/tour' element={<Tour />} />
        <Route path='/traveler/tour/:num' element={<TourDetail />} />
        <Route path='/traveler/tour/recommended' element={<TourRecommended />} />
        <Route path='/traveler/tour/music' element={<TourMusicRecommended onClose={() => { }} />} />
        <Route path='/traveler/hotels' element={<Hotel2 />} />
        <Route path='/traveler/hotels/:num' element={<HotelDetail2 />} />
        <Route path='/traveler/hotels/ReservationForm' element={<ReservationForm />} />
        <Route path='/traveler/blog' element={<Blog />} />
        <Route path='/traveler/blog/:num' element={<BlogDetail />} />
        <Route path='/traveler/contact' element={<Contact />} />
        <Route path='/traveler/coalition' element={<Coalition />} />
        <Route path='/traveler/coalition/new' element={<CoalitionForm />} />
        <Route path='/traveler/coalition/account' element={<CoalitionAccount />} />
        <Route path='/traveler/community' element={<Like />} />
        <Route path='/traveler/community/:num' element={<LikeDetail />} />
        <Route path='/traveler/backpack' element={<Backpack />} />
        <Route path='/traveler/backpack/:num' element={<BackpackDetail />} />
        <Route path='/traveler/contact' element={<Contact />} />
        <Route path='/traveler/login' element={<Login />} />
        <Route path='/traveler/singup' element={<SingUp />} />
        <Route path='/traveler/Transport' element={<Transport />} />  {/*2025-02-04최의진 추가 */}
        <Route path='/traveler/Transport/Road' element={<RoadDetail />} />{/*2025-02-06최의진 추가 */}
        <Route path='/traveler/Transport/Train' element={<SubwayDetail />} />{/*2025-02-06최의진 추가 */}
      </Routes>
      <Footer />
      <Chat />
    </BrowserRouter>
  );
}

export default App;
