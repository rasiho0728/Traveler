import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/style.css'
import "./css/open-iconic-bootstrap.min.css"
// import "./css/bootstrap-datepicker.css"
import "./css/animate.css"
import "./css/owl.carousel.min.css" // 캐러셀 조질때 확인
import "./css/owl.theme.default.min.css"
import "./css/magnific-popup.css"
import "./css/aos.css"
import "./css/ionicons.min.css"
import "./css/jquery.timepicker.css"
import "./css/flaticon.css"
import "./css/icomoon.css"
import Home from './Home/Home';
import Test from './Test/Test';
import Header from './Comm/Header';
import Footer from './Comm/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Test/>}/>
        <Route path='/traveler/home' element={<Home/>}/>        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
