// 2025.02.04. 17:45 생성자: 이학수, 제휴페이지 계정 관리 
import React, { useEffect, useState } from 'react'
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFuncAd';
import { Link, useLocation } from 'react-router-dom';

interface CoalitionData {
    userType: string;
    id: string;
    name: string;
    tel: string;
    email: string;
}

const CoalitionAccount: React.FC = () => {
    const { pathname } = useLocation();
    const [isUpdate, setIsUpdate] = useState(false)
    const [coalitionData, setCoalitionData] = useState<CoalitionData | null>(null)
    const [c_name, setC_name] = useState("")
    const [tel1, setTel1] = useState("")
    const [tel2, setTel2] = useState("")
    const [tel3, setTel3] = useState("")
    const [emailId, setEmailId] = useState("")
    const [emailDomain, setEmailDomain] = useState("")

    useEffect(() => {
        setCoalitionData({
            userType: "제휴",
            id: "tester1231!!",
            name: "OOO호텔",
            tel: "02-456-1234",
            email: "tester@test.com"
        })
    }, [])

    useEffect(() => {
        if (coalitionData) {
            setC_name(coalitionData.name)

            const tel = coalitionData.tel.split("-")
            setTel1(tel[0])
            setTel2(tel[1])
            setTel3(tel[2])

            const email = coalitionData.email.split("@")
            setEmailId(email[0])
            setEmailDomain(email[1])
        }
    }, [coalitionData, isUpdate])

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
    }, [pathname, coalitionData])

    useEffect(() => {
        // 요소의 [data-scrollax] 옵션을 분석 적용
        handleScroll()
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [coalitionData]);

    useEffect(() => {
        // ftco-animate 클래스를 가진 요소에 등장 효과 적용
        appear_animate()
    }, [coalitionData]);

    useEffect(() => {
        // js-fullheight 클래스를 가진 요소의 높이를 화면의 크기로 갱신
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, [coalitionData]);

    const handelAccountChange = () => {
        if (c_name && tel1 && tel2 && tel3 && emailId && emailDomain && coalitionData) {
            setCoalitionData({...coalitionData,
                name: c_name,
                tel: `${tel1}-${tel2}-${tel3}`,
                email: `${emailId}@${emailDomain}`,
            })
            setIsUpdate(false)
        }else{
            alert('빈칸을 채워주세요')
        }
    }

    if (!coalitionData) {
        return <div>로딩 중</div>
    }

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
                                        {
                                            isUpdate ?
                                                <div className="d-flex justify-content-end">
                                                    <button className='btn btn-white border mx-4' onClick={_ => setIsUpdate(false)}>취소</button>
                                                    <button className='btn btn-warning' onClick={handelAccountChange}>변경</button>
                                                </div>
                                                : <button className='btn btn-secondary' onClick={_ => setIsUpdate(true)}>수정</button>
                                        }
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col-md-3 border py-2 text-center bg-light"><span className='font-weight-bold'>회원유형</span></div>
                                            <div className="col-md-9 border py-2 px-4"><span>{coalitionData.userType}</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 border py-2 text-center bg-light"><span className='font-weight-bold'>아이디</span></div>
                                            <div className="col-md-9 border py-2 px-4"><span>{coalitionData.id}</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 border py-2 text-center bg-light"><span className='font-weight-bold'>업체명</span></div>
                                            <div className="col-md-9 border py-2 px-4">{isUpdate ? <input type='text' value={c_name} onChange={e => setC_name(e.target.value)} /> : <span>{coalitionData.name}</span>}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 border py-2 text-center bg-light"><span className='font-weight-bold'>번호</span></div>
                                            <div className="col-md-9 border py-2 px-4">
                                                {isUpdate ?
                                                    <>
                                                        <input type='text' value={tel1} onChange={e => setTel1(e.target.value)} />
                                                        &nbsp;-&nbsp;
                                                        <input type='text' value={tel2} onChange={e => setTel2(e.target.value)} />
                                                        &nbsp;-&nbsp;
                                                        <input type='text' value={tel3} onChange={e => setTel3(e.target.value)} />
                                                    </>
                                                    : <span>{coalitionData.tel}</span>}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 border py-2 text-center bg-light"><span className='font-weight-bold'>이메일</span></div>
                                            <div className="col-md-9 border py-2 px-4">
                                                {isUpdate ?
                                                    <>
                                                        <input type='text' value={emailId} onChange={e => setEmailId(e.target.value)} /> @ <input type='text' value={emailDomain} onChange={e => setEmailDomain(e.target.value)} />
                                                        &nbsp;&nbsp;
                                                        <select onChange={e => setEmailDomain(e.target.value)}>
                                                            <option value="">직접입력</option>
                                                            <option value="naver.com">naver.com</option>
                                                        </select>
                                                    </>
                                                    : <span>{coalitionData.email}</span>}
                                            </div>
                                        </div>
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