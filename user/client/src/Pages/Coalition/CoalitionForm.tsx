// 2025.02.02. 21:00 생성자: 이학수, 제휴업체 호텔 등록 폼 
import React, { useEffect, useRef, useState } from 'react'
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';
import { Link, useLocation } from 'react-router-dom';
import ModalVideo from 'react-modal-video';

const CoalitionForm: React.FC = () => {
    const { pathname } = useLocation();
    // input에 연결해주기 위한 useRef 훅 사용
    const imageInputRef = useRef<HTMLInputElement | null>(null);

    const [isOpen, setIsOpen] = useState(true);

    // 버튼 클릭 시 호출하는 함수 (클릭 이벤트) 
    const onCickImageUploadHandler = (): void => {
        imageInputRef.current?.click();
    };

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
                            <div className='testimony-wrap ftco-animate'>
                                <div className='row mb-4'>
                                    <div className='col-md-3'>
                                        <p>대표사진</p>
                                        <button
                                            className='btn border'
                                            onClick={() => {
                                                onCickImageUploadHandler();
                                            }}
                                            style={{
                                                width: "150px",
                                                height: "150px"
                                            }}
                                        >
                                            <i className='icon-plus'></i>
                                            <input
                                                // input의 ref 속성을 이용해 버튼 클릭 이벤트를 input과 연결
                                                ref={imageInputRef}
                                                type="file"
                                                name="file"
                                                // onChange={handleFileChange}
                                                style={{ display: "none" }}
                                            />
                                        </button>
                                    </div>
                                    <div className='col-md-9 pt-4'>
                                        <div className='row'>
                                            <div className='col-md-2'>
                                                <label htmlFor="name" className='col-form-label-lg'>이름</label>
                                            </div>
                                            <div className='col-md-9'>
                                                <input type="text" name='name' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-2'>
                                                <label htmlFor="name" className='col-form-label-lg'>1박당<br />가격</label>
                                            </div>
                                            <div className='col-md-9 d-flex align-items-center'>
                                                <input type="number" name='name' className='form-control' step={1000} min={0} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-2'>
                                                <label htmlFor="name" className='col-form-label-lg'>위치</label>
                                            </div>
                                            <div className='col-md-9'>
                                                <input type="text" name='name' className='form-control' placeholder='누르면 위치 찍도록 변경' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row '>
                                    <p>세부 내용</p>
                                    <div className='col-md-11'>
                                        <textarea name="" id="" className='w-100 form-control-lg' style={{ height: "200px", resize: "none" }} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <p>영상링크</p>

                                    <div className='col-md-2 text-center'>
                                        <label htmlFor="name" className='col-form-label-lg'>링크</label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="url" name='name' className='form-control'  />
                                    </div>
                                    <div className='col-md-11'>
                                        <ModalVideo
                                            channel="youtube" // vimeo 플랫폼 설정
                                            isOpen={isOpen}
                                            videoId="DSH3mBWpfqQ" // Vimeo의 비디오 ID
                                            onClose={() => setIsOpen(false)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default CoalitionForm