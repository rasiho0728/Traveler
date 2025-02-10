// 2025.02.02. 21:00 생성자: 이학수, 제휴업체 호텔 등록 폼 
import React, { useEffect, useRef, useState } from 'react'
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';
import { Link, useLocation, useParams } from 'react-router-dom';
import ModalVideo from 'react-modal-video';

const CoalitionForm: React.FC = () => {
    // const {num} = useParams();
    const { pathname } = useLocation();
    // input에 연결해주기 위한 useRef 훅 사용
    const imgInputRef = useRef<HTMLInputElement | null>(null);
    const imgsInputRef = useRef<HTMLInputElement | null>(null);
    const [thumbnailFile, setThumbnailFile] = useState<File>();
    const [thumbnailImg, setThumbnailImg] = useState<string | ArrayBuffer | null>();
    const [imgFiles, setImgFiles] = useState<File[]>([]);
    const [imgs, setImgs] = useState<string[]>([]);
    // const [videoLink, setVideoLink] = useState('')
    // const [videoId, setVideoId] = useState('')
    // const [isOpen, setIsOpen] = useState(false);

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

    // useEffect(() => {
    //     if (videoId !== '') {
    //         setIsOpen(true);
    //     }
    // }, [videoId])

    // 버튼 클릭 시 호출하는 함수 (클릭 이벤트) 
    const onCickImageUploadHandler = (): void => {
        imgInputRef.current?.click();
    };

    // 버튼 클릭 시 호출하는 함수 (클릭 이벤트) 
    const onCickImagesUploadHandler = (): void => {
        imgsInputRef.current?.click();
    };

    // 단일 이미지 업로드
    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files && files.length > 0) {
            setThumbnailFile(files[0])
            const reader = new FileReader();
            reader.readAsDataURL(files[0])
            reader.onloadend = () => {
                setThumbnailImg(reader.result)
            }
        }
    }

    // 다중 이미지 업로드
    const handleImgsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files && files.length > 0) {
            const fileArray = Array(...files)
            setImgFiles(fileArray)
            fileArray.forEach((file, _) => {
                const reader = new FileReader();
                reader.readAsDataURL(file)
                reader.onloadend = () => {
                    const img = reader.result as string
                    setImgs((prev) => {
                        const images = prev ? [...prev, img] : [img]
                        return images
                    })
                }
            })
        }
    }

    // 이미지 제거 이벤트트
    const onCickImageDeleteHandler = (idx: number) => {
        const imageFiles = imgFiles
        const images = imgs
        setImgFiles(imageFiles.slice(0, idx).concat(imageFiles.slice(idx + 1, imageFiles.length)))
        setImgs(images.slice(0, idx).concat(images.slice(idx + 1, images.length)))
    }

    // // 영상 링크를 분석해서 비디오 아이디 추출하기
    // const handelShowVideo = () => {
    //     const options = videoLink.split('?')[1].split('&');
    //     const video = options.filter((option, _) => { return option.split('=').includes('v') })[0].split('=')[1];
    //     setVideoId(video);
    // }

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
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <p>대표사진</p>
                                        <div className='d-inline-block position-relative'>
                                            <button
                                                className={`btn position-relative ${thumbnailImg ? "" : "border"}`}
                                                onClick={() => {
                                                    onCickImageUploadHandler();
                                                }}
                                                style={{
                                                    width: "150px",
                                                    height: "150px"
                                                }}
                                                title={thumbnailImg ? '대표이미지 변경' : '대표이미지 추가'}
                                            >
                                                {
                                                    thumbnailImg ? (
                                                        <img src={thumbnailImg as string} alt="" width={'100%'} height={'100%'} />
                                                    ) : (
                                                        <i className='icon-plus' />
                                                    )
                                                }
                                                <input
                                                    // input의 ref 속성을 이용해 버튼 클릭 이벤트를 input과 연결
                                                    ref={imgInputRef}
                                                    type="file"
                                                    name="file"
                                                    accept='image/*'
                                                    onChange={handleThumbnailChange}
                                                    style={{ display: "none" }}
                                                />
                                            </button>
                                            {
                                                thumbnailImg && <>
                                                    <i
                                                        className='icon-plus btn border-danger bg-danger rounded-circle p-1 text-white position-absolute'
                                                        style={{
                                                            bottom: -10,
                                                            right: 0
                                                        }}
                                                        onClick={onCickImagesUploadHandler}
                                                        title='이미지 추가'
                                                    />
                                                    <input
                                                        // input의 ref 속성을 이용해 버튼 클릭 이벤트를 input과 연결
                                                        ref={imgsInputRef}
                                                        type="file"
                                                        name="file"
                                                        accept='image/*'
                                                        multiple
                                                        onChange={handleImgsChange}
                                                        style={{ display: "none" }}
                                                    />
                                                </>
                                            }
                                        </div>
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
                                {
                                    imgs.length > 0 && (
                                        <>
                                            <p>이미지</p>
                                            <div className='row flex-nowrap'
                                                style={{
                                                    overflowX: "auto"
                                                }}
                                            >
                                                {
                                                    imgs.map((img, idx) => (
                                                        <div key={idx}
                                                            className='border rounded mx-2 position-relative'
                                                            style={{
                                                                width: "150px",
                                                                height: "150px"
                                                            }}
                                                        >
                                                            <i
                                                                className='icon-remove btn text-danger h5 position-absolute p-0'
                                                                style={{
                                                                    top: 0,
                                                                    right: 0
                                                                }}
                                                                onClick={_ => onCickImageDeleteHandler(idx)}
                                                                title='이미지 제거'
                                                            />
                                                            <img src={img} alt="" width={'100%'} height={'100%'} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </>
                                    )
                                }
                                <div className='row my-4'>
                                    <p>세부 내용</p>
                                    <div className='col-md-11'>
                                        <textarea name="" id="" className='w-100 form-control-lg' style={{ height: "200px", resize: "none" }} />
                                    </div>
                                </div>
                                {/* <div className='row'>
                                    <p>영상링크</p>

                                    <div className='col-md-2 text-center'>
                                        <label htmlFor="name" className='col-form-label-lg'>링크</label>
                                    </div>
                                    <div className='col-md-8'>
                                        <input type="url" name='name' value={videoLink} onChange={e => setVideoLink(e.target.value)} className='form-control'
                                            placeholder='Youtube 링크를 입력해 주세요' />
                                    </div>
                                    <div className='col-md-2 align-content-center'>
                                        <button className='btn' onClick={handelShowVideo}><i className='icon-play' /> 재생</button>
                                    </div>
                                    <ModalVideo
                                        channel="youtube" // 플랫폼 설정
                                        isOpen={isOpen}
                                        videoId={videoId} // 비디오 ID
                                        onClose={() => { setIsOpen(false); setVideoId(''); }}
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default CoalitionForm