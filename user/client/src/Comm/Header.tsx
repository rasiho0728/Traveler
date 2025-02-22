// 2025.01.22. 11:00 생성자: 이학수, 헤더 분리 
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const { pathname } = useLocation();

    // 2025.01.24. 19:50 추가: 이학수, 현재 경로에 따라 네이게이션 버튼의 색깔이 동적이 되도록 추가
    useEffect(() => {
        const entity = document.querySelectorAll<HTMLLinkElement>('div#header nav ul li a');
        entity.forEach((e, i) => {
            // console.log(e.innerHTML)
            if (pathname.includes((e.getAttribute('href') as string))) {
                e.parentElement?.classList.add('active')
                // console.log(pathname)
            } else {
                e.parentElement?.classList.remove('active')
            }
        })
    }, [pathname])

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
                naviBar.className = naviBar.className.replace(' scrolled', '').replace(' sleep', '');
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
                if (!naviBar.className.includes('sleep')) {
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
                    <Link to="/traveler/home" className="navbar-brand">dirEngine.</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            {/* <li className="nav-item active"><Link to="/traveler/home" className="nav-link">홈</Link></li> */}
                            {/* <li className="nav-item"><Link to="/traveler/about" className="nav-link">소개</Link></li> */}
                            <li className="nav-item"><Link to="/traveler/tour" className="nav-link">여행</Link></li>
                            <li className="nav-item"><Link to="/traveler/backpack" className="nav-link">여행해듀오</Link></li>
                            <li className="nav-item"><Link to="/traveler/diary" className="nav-link">여행다이어리</Link></li>
                            <li className="nav-item"><Link to="/traveler/hotels" className="nav-link">숙박</Link></li>
                            {/* <li className="nav-item"><Link to="/traveler/blog" className="nav-link">블로그</Link></li> */}
                            <li className="nav-item"><Link to="/traveler/Transport" className="nav-link">대중교통</Link></li>
                            <li className="nav-item"><Link to="/traveler/community" className="nav-link">나의 배낭</Link></li>
                            {/* <li className="nav-item">
                                <Link to="/traveler/contact" className="nav-link">Contact</Link>
                                <a href='#' className="nav-link">커뮤니티</a>
                                <ul className='sub-menu'>
                                    <li className="nav-item"><Link to="/traveler/community" className="nav-link sub-list">나의 배낭</Link></li>
                                    <li className="nav-item"><Link to="/traveler/backpack" className="nav-link sub-list">여행해듀오</Link></li>
                                    <li className="nav-item"><Link to="/traveler/tourdiary" className="nav-link sub-list">여행다이어리</Link></li>
                                </ul>
                            </li> */}
                            <li className="nav-item"><Link to="/traveler/coalition" className="nav-link">제휴</Link></li>
                            <li className="nav-item"><Link to="/traveler/contact" className="nav-link">문의하기</Link></li>
                            <li className="nav-item"><Link to="/traveler/mypage" className="nav-link">마이페이지</Link></li>
                            <li className="nav-item cta"><Link to="/traveler/login" className="nav-link"><span>로그인</span></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header