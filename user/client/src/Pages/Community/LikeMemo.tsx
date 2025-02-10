import React, { useEffect, useState } from 'react';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor } from '@toast-ui/react-editor';
import colorPlugin from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/dist/toastui-editor.css';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Link } from 'react-router-dom';
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "prismjs/themes/prism.css";
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';

const LikeMemo: React.FC = () => {
    useEffect(() => {
        const handleResize = () => updateHeight();
        handleScroll();
        appear_animate();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // 해시태그 입력 기능 추가
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");

    // 해시태그 추가
    const handleTagKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && tagInput.trim() !== "") {
            event.preventDefault();
            if (!tags.includes(tagInput.trim())) {
                setTags([...tags, tagInput.trim()]);
            }
            setTagInput("");
        }
    };

    // 해시태그 삭제
    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
        <div className="LikeMemo">
            {/* 헤더 부분 */}
            <div 
                className="hero-wrap js-fullheight" 
                style={{ 
                    backgroundImage: "url('/images/bg_4.jpg')",
                    height: '100vh',
                    minHeight: '400px',
                    backgroundSize: 'cover',
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
                <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="mb-3 bread" style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>나의 배낭</h1>
                </div>
            </div>

            {/* 입력 폼 박스 내부 정렬 */}
            <div className="container" style={{ maxWidth: '900px', margin: '50px auto', padding: '20px' }}>
                <div className="SuggestionForm">
                    <h2 style={{ textAlign: 'center' }}>배낭 일기</h2>
                    <form>
                        {/* 제목 입력 */}
                        <div className='like-memo-input-group' style={{ marginBottom: '15px' }}>
                            <label htmlFor="title" className='col-form-label'>제목</label>
                            <input 
                                type='text' 
                                name='title' 
                                placeholder='제목을 입력해주세요'
                                required 
                                className="like-memo-input" 
                                style={{ width: '100%', height: '40px' }} 
                            />
                        </div>

                        {/* 해시태그 입력 */}
                        <div className='like-memo-input-group' style={{ marginBottom: '15px' }}>
                            <label htmlFor="tags" className='col-form-label'>해시태그</label>
                            <input 
                                type='text' 
                                name='tags'
                                placeholder='해시태그 입력 후 Enter 키를 누르세요'
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyPress={handleTagKeyPress}
                                className="like-memo-input"
                                style={{ width: '100%', height: '40px' }} 
                            />
                        </div>

                        {/* 추가된 해시태그 리스트 */}
                        <div className="tagcloud" style={{ marginBottom: '15px' }}>
                            {tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="tag-cloud-link"
                                    onClick={() => removeTag(tag)}
                                    style={{ 
                                        display: 'inline-block', 
                                        backgroundColor: '#FF5A5F', 
                                        color: 'white', 
                                        padding: '5px 10px', 
                                        borderRadius: '20px', 
                                        marginRight: '10px', 
                                        cursor: 'pointer'
                                    }}
                                >
                                    #{tag} ✕
                                </span>
                            ))}
                        </div>

                        {/* 작성자 입력 필드 */}
                        <div className='like-memo-input-group' style={{ marginBottom: '15px' }}>
                            <label htmlFor="writer" className='col-form-label'>작성자</label>
                            <input 
                                type='text' 
                                name='writer'
                                placeholder='작성자 입력'
                                required 
                                className="like-memo-input"
                                style={{ width: '100%', height: '40px' }} 
                            />
                        </div>

                        <hr />

                        {/* Toast UI Editor */}
                        <div className='edit-wrap LikeMemo'>
                            <Editor
                                previewStyle="vertical"
                                height="500px"
                                language='ko-KR'
                                initialEditType="wysiwyg"
                                usageStatistics={false}
                                hideModeSwitch={true}
                                plugins={[codeSyntaxHighlightPlugin, colorPlugin]}
                            />
                        </div>
                    </form>
                </div>

                {/* 등록하기 버튼 - 푸터 간격 조정 */}
                <div className="like-memo-button-container" style={{ textAlign: 'center', marginTop: '40px', marginBottom: '100px' }}>
                    <Link 
                        to='/traveler/community' 
                        className="like-memo-btn" 
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
                    >
                        등록하기
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LikeMemo;
