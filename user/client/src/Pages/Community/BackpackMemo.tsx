import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';

const BackpackMemo: React.FC = () => {
    useEffect(() => {
        const handleResize = () => updateHalfHeight();
        handleScroll();
        appear_animate();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // 입력 필드 상태 관리
    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [content, setContent] = useState(""); 

    return (
        <div className="BackpackMemo">
            {/* 헤더 부분 - height 조정 */}
            <div 
                className="hero-wrap BackpackMemo-header js-halfheight"
                style={{ 
                    backgroundImage: "url('/images/bg_4.jpg')",
                    minHeight: '500px', // 최소 높이 설정 (400px → 500px 조정)
                    backgroundSize: 'cover', // cover 유지하여 화면에 맞춤
                    backgroundPosition: 'center', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <div className="overlay" style={{ 
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.3)',
                    pointerEvents: 'none' 
                }}></div>
                <div className="container" style={{ height: '100%' }}> 
                    <div className="row no-gutters slider-text align-items-center justify-content-center" 
                        style={{ height: '100%' }}>  
                        <div className="col-md-9 ftco-animate text-center">
                            <h1 className="mb-3 bread" style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>
                            여행 궁금증! 무엇이든 물어보세요!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* 메모 입력 */}
            <div className="backpack-memo-form-container" 
                style={{ 
                    maxWidth: '1000px', 
                    margin: '50px auto', 
                    padding: '30px', 
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
                    borderRadius: '10px', 
                    background: 'white' 
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>배낭톡</h2>
                
                <form>
                    {/* 제목 입력 */}
                    <div className='backpack-memo-input-group' style={{ marginBottom: '20px' }}>
                        <label htmlFor="title" className='backpack-memo-label'>제목</label>
                        <input 
                            type='text' 
                            name='title' 
                            placeholder='제목을 입력해주세요'
                            required 
                            className="backpack-memo-input" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ width: '100%', height: '45px', borderRadius: '5px', border: '1px solid #ccc', padding: '5px 10px' }} 
                        />
                    </div>

                    {/* 작성자 입력 */}
                    <div className='backpack-memo-input-group' style={{ marginBottom: '20px' }}>
                        <label htmlFor="writer" className='backpack-memo-label'>작성자</label>
                        <input 
                            type='text' 
                            name='writer'
                            placeholder='작성자 입력'
                            required 
                            className="backpack-memo-input"
                            value={writer}
                            onChange={(e) => setWriter(e.target.value)}
                            style={{ width: '100%', height: '45px', borderRadius: '5px', border: '1px solid #ccc', padding: '5px 10px' }} 
                        />
                    </div>

                    {/* 내용 입력 */}
                    <div className='backpack-memo-input-group' style={{ marginBottom: '30px' }}>
                        <label htmlFor="content" className='backpack-memo-label'>내용</label>
                        <textarea 
                            name='content'
                            placeholder='내용을 입력해주세요'
                            required 
                            className="backpack-memo-input"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            style={{ 
                                width: '100%', 
                                height: '200px', 
                                borderRadius: '5px', 
                                border: '1px solid #ccc', 
                                padding: '10px',
                                resize: 'vertical'
                            }} 
                        />
                    </div>
                </form>
            </div>

            {/* 등록하기 버튼 */}
            <div className="backpack-memo-button-container" style={{ textAlign: 'center', marginTop: '20px', marginBottom: '100px' }}>
                <Link 
                    to='/traveler/backpack' 
                    className="backpack-memo-btn" 
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#FF5A5F', 
                        color: 'white',
                        padding: '12px 20px',
                        borderRadius: '30px',  
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transition: 'background 0.3s',
                        cursor: 'pointer',
                        border: 'none',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E04848'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FF5A5F'}
                >
                    등록하기
                </Link>
            </div>
        </div>
    );
}

export default BackpackMemo;
