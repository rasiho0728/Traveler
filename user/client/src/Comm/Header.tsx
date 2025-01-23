// 2025.01.22. 11:00 생성자: 이학수, 헤더 분리 
import React, { useEffect } from 'react'

const Header: React.FC = () => {

    // 스크롤에 따라 헤더 상단 고정 및 스타일 변경을 위한 함수
    const navPosition = () => {
        const naviBar = document.getElementById('ftco-navbar')
        const scrollPosition = window.scrollY;
        if (!naviBar) return;

        if (scrollPosition > 150) {
            if (!naviBar.className.includes('scrolled')) {
                naviBar.className += ' scrolled';
            }
        }
        if (scrollPosition < 150) {
            if (naviBar.className.includes('scrolled')) {
                naviBar.className = naviBar.className.replace(' scrolled', '').replace(' sleep','');
            }
        }
        if (scrollPosition > 350) {
            if (!naviBar.className.includes('awake')) {
                naviBar.className += ' awake';
            }
        }
        if (scrollPosition < 350) {
            if (naviBar.className.includes('awake')) {
                naviBar.className = naviBar.className.replace(' awake', '');
                if (!naviBar.className.includes('sleep')){
                    naviBar.className += ' sleep';
                }
            }
        }
    }

    useEffect(() => {
        navPosition();
        window.addEventListener("scroll", navPosition);
        return () => {
            window.removeEventListener("scroll", navPosition);
        };
    }, [])

    return (
        <div id='header'>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">dirEngine.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="tour.html" className="nav-link">Tour</a></li>
                            <li className="nav-item"><a href="hotel.html" className="nav-link">Hotels</a></li>
                            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                            <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                            <li className="nav-item cta"><a href="contact.html" className="nav-link"><span>Add listing</span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header