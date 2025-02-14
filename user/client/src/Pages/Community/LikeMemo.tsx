import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor } from '@toast-ui/react-editor';
import colorPlugin from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/dist/toastui-editor.css';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Link } from 'react-router-dom';
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "prismjs/themes/prism.css";
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import { Trie } from '../../Comm/Trie';


const LikeMemo: React.FC = () => {
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

    // Trie 자동완성 기능 추가
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number } | null>(null);
    const editorRef = useRef<Editor>(null);

    const trie = new Trie();
    const words = [
        "배낭여행", "국내여행", "혼자여행", "1박2일 여행", "2박3일 여행", "여행코스", "여행일정", "여행후기",
        "숙소추천", "호텔리뷰", "펜션추천", "게스트하우스", "한옥스테이", "캠핑장 추천", "리조트 후기",
        "서울여행", "부산여행", "제주도 여행", "강릉여행", "속초여행", "경주여행", "여수여행",
        "맛집투어", "카페투어", "브런치카페", "야시장 먹방", "야경카페", "루프탑카페",
        "기차여행", "KTX 여행", "버스여행", "렌터카 여행", "자전거 대여", "전동킥보드 여행",
        "등산코스", "캠핑 후기", "서핑 여행", "스쿠버다이빙", "패러글라이딩", "한옥체험"
    ];
    words.forEach((word) => trie.insert(word));

    // 입력 감지하여 자동완성 실행
    const handleEditorInput = () => {
        if (editorRef.current) {
            // const content = editorRef.current.getInstance().getMarkdown();
            const instance = editorRef.current.getInstance();
            const content = instance.getMarkdown();
            const words = content.split(/\s+/);
            const lastWord = words[words.length - 1];

            if (lastWord.length > 1) {
                setSuggestions(trie.searchPrefix(lastWord));

                // 커서 위치 가져오기
                const selection = window.getSelection();
                if (selection && selection.rangeCount > 0) {
                    const range = selection.getRangeAt(0);
                    const rect = range.getBoundingClientRect();
                    // setCursorPosition({ x: rect.left, y: rect.bottom + 5});
                    const editorScrollTop = instance.getScrollTop();
                    setCursorPosition({
                        x: rect.left,
                        y: rect.top + editorScrollTop + 25 // 커서 아래로 여유 공간 추가
                    });
                }
            } else {
                setSuggestions([]);
            }
        }
    };

    // 자동완성 단어 클릭 시: 기존 단어를 대체하고 삽입
    const handleSuggestionClick = (word: string) => {
        if (editorRef.current) {
            const instance = editorRef.current.getInstance();
            const content = instance.getMarkdown();
            const words = content.split(/\s+/);
            words[words.length - 1] = word; // 기존 단어를 새로운 단어로 대체
            instance.setMarkdown(words.join(" ") + " "); // 업데이트

            setTimeout(() => {
                setSuggestions([]); // 자동완성 목록 닫기 (딜레이 적용)
                instance.focus(); // 강제 포커스 유지
            }, 100); // 클릭 이벤트가 먼저 실행되도록 조정
        }
    };

    // 해시태그 입력 기능 추가
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");

    // 해시태그 추가 (5개 제한, 10자 이하 제한)
    const handleTagKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && tagInput.trim() !== "") {
            event.preventDefault();

            // 해시태그 개수 제한 (최대 5개)
            if (tags.length >= 5) {
                alert("해시태그는 최대 5개까지 추가할 수 있습니다.");
                return;
            }

            // 해시태그 길이 제한 (최대 10자)
            if (tagInput.length > 10) {
                alert("해시태그는 최대 10자까지 입력할 수 있습니다.");
                return;
            }

            // 중복 태그 방지
            if (!tags.includes(tagInput.trim())) {
                setTags([...tags, tagInput.trim()]);
            } else {
                alert("이미 추가된 태그입니다.");
            }
            setTagInput("");
        }
    };

    // 해시태그 삭제
    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
        <div className="like-memo">
            {/* 헤더 부분 */}
            <div className="like-memo-hero-wrap js-halfheight"
                style={{
                    backgroundImage: "url('/images/bg_4.jpg')",
                    minHeight: '400px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}>
                <div className="like-memo-overlay"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.3)',
                        pointerEvents: 'none'
                    }}></div>
                <div className="like-memo-container text-center"
                    style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="like-memo-title mb-3 bread"
                        style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }}>나의 배낭</h1>
                </div>
            </div>

            {/* 입력 폼 박스 내부 정렬 */}
            <div className="like-memo-container"
                style={{ maxWidth: '900px', margin: '50px auto', padding: '20px' }}>
                <div className="like-memo-suggestion-form">
                    <h2 style={{ textAlign: 'center' }}>배낭 후기</h2>
                    <form>
                        {/* 제목 입력 */}
                        <div className='like-memo-input-group' style={{ marginBottom: '15px' }}>
                            <label htmlFor="title" className='like-memo-label'>제목</label>
                            <input type='text' name='title' placeholder='제목을 입력해주세요'
                                required className="like-memo-input"
                                style={{ width: '100%', height: '40px' }} />
                        </div>

                        {/* 해시태그 입력 */}
                        <div className='like-memo-input-group' style={{ marginBottom: '15px' }}>
                            <label htmlFor="tags" className='like-memo-label'>해시태그 (최대 5개, 10자 제한)</label>
                            <input type='text' name='tags' placeholder='해시태그 입력 후 Enter 키를 누르세요'
                                value={tagInput} onChange={(e) => setTagInput(e.target.value)}
                                onKeyPress={handleTagKeyPress} className="like-memo-input"
                                style={{ width: '100%', height: '40px' }} />
                        </div>

                        {/* 추가된 해시태그 리스트 */}
                        <div className="like-memo-tagcloud" style={{ marginBottom: '15px' }}>
                            {tags.map((tag, index) => (
                                <span key={index} className="like-memo-tag" onClick={() => removeTag(tag)}
                                    style={{
                                        display: 'inline-block',
                                        backgroundColor: '#FF5A5F',
                                        color: 'white',
                                        padding: '5px 10px',
                                        borderRadius: '20px',
                                        marginRight: '10px',
                                        cursor: 'pointer'
                                    }}>
                                    #{tag} ✕
                                </span>
                            ))}
                        </div>

                        <hr />

                        {/* Toast UI Editor */}
                        <div className="like-memo-edit-wrap" style={{ position: "relative" }}>
                            <Editor
                                ref={editorRef}
                                previewStyle="vertical"
                                height="500px"
                                language='ko-KR'
                                initialEditType="wysiwyg"
                                usageStatistics={false}
                                hideModeSwitch={true}
                                plugins={[codeSyntaxHighlightPlugin, colorPlugin]}
                                onChange={handleEditorInput} />

                            {/* 🔹 자동완성 드롭다운 */}
                            {suggestions.length > 0 && cursorPosition && (
                                <div className="like-memo-autocomplete-dropdown"
                                    style={{
                                        position: "fixed",
                                        top: cursorPosition.y + "px",
                                        left: cursorPosition.x + "px",
                                        background: "white",
                                        border: "1px solid #ddd",
                                        borderRadius: "5px",
                                        padding: "5px",
                                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                        zIndex: 9999 // 자동완성 목록이 다른 요소 위에 올라오도록 설정
                                    }}
                                    onMouseDown={(e) => e.stopPropagation()} // 자동완성 목록 클릭 방해 방지
                                >
                                    {suggestions.map((word, index) => (
                                        <div key={index}
                                            onMouseDown={(e) => {
                                                e.preventDefault(); // 기본 클릭 이벤트 방지
                                                e.stopPropagation(); // 자동완성 목록이 사라지는 것을 방지

                                                handleSuggestionClick(word);
                                                setTimeout(() => {
                                                    if (editorRef.current) {
                                                        editorRef.current.getInstance().focus(); // 강제 포커스 유지
                                                    }
                                                }, 0);
                                            }}
                                            style={{
                                                padding: "10px",
                                                cursor: "pointer",
                                                transition: "background 0.2s ease-in-out",
                                                userSelect: "none" // 클릭 후 텍스트 자동 선택 방지
                                            }}
                                        >
                                            {word}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </form>
                </div>

                {/* 등록하기 버튼 */}
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
};

export default LikeMemo;
