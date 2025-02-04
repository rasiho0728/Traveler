// 2025.02.04. 17:45 생성자: 이학수, 제휴페이지 계정 관리 
import React, { useEffect, useState } from 'react'
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';
import { Link, useLocation } from 'react-router-dom';

const CoalitionAccount: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 현재 경로에 따라 사이드 네이게이션 버튼의 색깔이 동적 변화
    const entitys = document.querySelectorAll<HTMLLinkElement>('div.list-group .list-group-item-action');
    entitys.forEach((entity, i) => {
      const e = entity.children[0] as HTMLElement
      if (entity.getAttribute('href') === pathname) {
        e.style.color = 'orange'
      } else {
        e.style.color = 'black'
      }
    })
  }, [pathname])

  useEffect(() => {
    // 요소의 [data-scrollax] 옵션을 분석 적용
    handleScroll()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // ftco-animate 클래스를 가진 요소에 등장 효과 적용
    appear_animate()
  }, []);

  useEffect(() => {
    // js-fullheight 클래스를 가진 요소의 높이를 화면의 크기로 갱신
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div>
      <div className="hero-wrap js-fullheight" style={{ /*backgroundImage: "url('/images/bg_5.jpg')",*/ backgroundColor: "black" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
            <div className="col-md-9 ftco-animate text-center" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
              <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2"><Link to="/traveler/home">홈</Link></span> <span>제휴</span></p>
              <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>제휴</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 sidebar">
              <div className="sidebar-wrap bg-light ftco-animate">
                <h3 className="heading mb-4">제휴 업체</h3>
                <div className="fields list-group">
                  <Link to="/traveler/coalition" className='list-group-item-action'><h4><i className='ion-md-clipboard' /> 관리</h4></Link>
                  <hr />
                  <Link to="/traveler/coalition/new" className='list-group-item-action'><h4><i className='icon-plus' /> 등록</h4></Link>
                  <hr />
                  <Link to="/traveler/coalition/account" className='list-group-item-action'><h4><i className='icon-user' /> 계정 관리</h4></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="container ftco-animate">
                <div className="row d-flex mb-5 contact-info">
                  <div className="col-md-12 d-flex justify-content-between align-items-center mb-4">
                    <h2 className="h4">계정 관리</h2>
                    <button className='btn btn-secondary'>수정</button>
                  </div>
                  <div className="row">
                    <div className="col-md-3 border py-2 text-center bg-light"><span className='font-weight-bold'>회원유형</span></div>
                    <div className="col-md-9 border py-2 px-4"><span>제휴</span></div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 border py-2 text-center bg-light"><span className='font-weight-bold'>아이디</span></div>
                    <div className="col-md-9 border py-2 px-4"><span>tester1234!!</span></div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 border py-2 text-center bg-light"><span className='font-weight-bold'>업체명</span></div>
                    <div className="col-md-9 border py-2 px-4"><span>OOO호텔</span></div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 border py-2 text-center bg-light"><span className='font-weight-bold'>번호</span></div>
                    <div className="col-md-9 border py-2 px-4"><span>02)456-1215</span></div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 border py-2 text-center bg-light"><span className='font-weight-bold'>이메일</span></div>
                    <div className="col-md-9 border py-2 px-4"><span></span>tester1561@test.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoalitionAccount