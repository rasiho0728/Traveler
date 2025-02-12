// 2025.02.02. 21:00 생성자: 이학수, 제휴페이지 메인 
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import Pagenation from '../../Comm/Pagenation';

interface CoalitionHotel {
  name: string;
  price: number;
  rating: number;
  contents: string;
  semi_addr: string;
  thumbnail: string;
}

const Coalition: React.FC = () => {
  const { pathname } = useLocation();
  const [hotels, setHotels] = useState<CoalitionHotel[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // 더미데이터 입력
    setHotels([...hotels,
    {
      name: "Hotel, Italy",
      price: 40,
      rating: 8,
      contents: "Far far away, behind the word mountains, far from the countries",
      semi_addr: "Miami, Fl",
      thumbnail:"/images/hotel-6.jpg",
    }
    ])
  }, [])

  useEffect(() => {
    // 현재 경로에 따라 사이드 네이게이션 버튼의 색깔이 동적 변화
    const entitys = document.querySelectorAll<HTMLLinkElement>('div.list-group .list-group-item-action');
    entitys.forEach((entity, i) => {
      const e = entity.children[0] as HTMLElement
      if (entity.getAttribute('href') === pathname) {
        e.style.color = '#f85959'
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
  }, [hotels]);

  useEffect(() => {
    // js-halfheight 클래스를 가진 요소의 높이를 화면의 크기로 갱신
    updateHalfHeight();
    window.addEventListener("resize", updateHalfHeight);
    return () => {
      window.removeEventListener("resize", updateHalfHeight);
    };
  }, []);

  const drawStar = (rating_num: number) => {
    // 별점 그리기
    const rating = []
    for(let i = 0; i < 5; i++){
      if(rating_num/2 > i){
        rating.push(<i className="icon-star"></i>)
      }else{
        rating.push(<i className="icon-star-o"></i>)
      }
    }
    rating.push(<span>{rating_num} Rating</span>)

    return React.createElement("p",{
      className: "rate",
      children: rating,
    })
  }

  return (
    <div>
      <div className="hero-wrap js-halfheight" style={{ /*backgroundImage: "url('/images/bg_5.jpg')",*/ backgroundColor: "black" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center" data-scrollax-parent="true">
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

              {
                hotels.map((item, index) => (
                  <div className="row" key={index}>
                    <div className="col-md-4 ftco-animate">
                      <div className="destination">
                        <Link to="/traveler/coalition/1" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${item.thumbnail})` }}>
                          <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search-plus"></span>
                          </div>
                        </Link>
                        <div className="text p-3">
                          <div className="d-flex">
                            <div className="one">
                              <h3><Link to="/traveler/hotels/1">{item.name}</Link></h3>
                              {drawStar(item.rating)}
                            </div>
                            <div className="two">
                              <span className="price per-price">${item.price}<br /><small>/night</small></span>
                            </div>
                          </div>
                          <p>{item.contents}</p>
                          <hr />
                          <p className="bottom-area d-flex">
                            <span><i className="icon-map-o"></i> {item.semi_addr}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
              <Pagenation page={page} totalPages={totalPages} pageChange={setPage}/>
            </div>
          </div>
        </div >
      </section >
    </div>
  )
}

export default Coalition