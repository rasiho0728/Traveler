// 2025.01.21. 19:35 생성자: 이학수, HTML템플릿을 리엑트로 조정
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/style.css'
import "./css/open-iconic-bootstrap.min.css"
import "./css/animate.css"
import "./css/owl.carousel.min.css"
import "./css/owl.theme.default.min.css"
import "./css/magnific-popup.css"
// import "./css/aos.css"
import "./css/ionicons.min.css"
import "./css/jquery.timepicker.css"
import "./css/flaticon.css"
import "./css/icomoon.css"
import "./css/react-datepicker.css" // 날짜 선택 모듈 css
import "react-modal-video/css/modal-video.min.css"; // 비디오 모달 css
import Test from './Test/Test';
import Header from './Comm/Header';
import Footer from './Comm/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import BlogDetail from './Pages/Blog/BlogDetail';
import ScrollToTop from './Comm/ScrollToTop';
import Contact from './Pages/Contact/Contact';
import Hotel from './Pages/Hotel/Hotel';
import HotelDetail from './Pages/Hotel/HotelDetail';
import Tour from './Pages/Tour/Tour';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Test />} />
        <Route path='/traveler/home' element={<Home />} />
        <Route path='/traveler/about' element={<About />} />
        <Route path='/traveler/tour' element={<Tour />} />
        <Route path='/traveler/hotels' element={<Hotel />} />
        <Route path='/traveler/hotels/:num' element={<HotelDetail />} />
        <Route path='/traveler/blog' element={<Blog />} />
        <Route path='/traveler/blog/:num' element={<BlogDetail />} />
        <Route path='/traveler/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
