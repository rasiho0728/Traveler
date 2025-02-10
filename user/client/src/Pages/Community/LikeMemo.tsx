import React from 'react';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor } from '@toast-ui/react-editor';
import colorPlugin from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/dist/toastui-editor.css';
<<<<<<< HEAD
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
>>>>>>> fb211b8f8d5f216e315c8cdb746230b156bcf87e
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "prismjs/themes/prism.css";

const LikeMemo: React.FC = () => {
  return (
    <div className="LikeMemoPage">
      {/* 헤더 부분 */}
      <div 
        className="hero-wrap js-fullheight" 
        style={{ backgroundImage: "url('/images/bg_4.jpg')" }}
      >
        <div className="overlay" style={{ pointerEvents: 'none' }}></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-3 bread">Write Your Memo</h1>
            </div>
          </div>
        </div>
      </div>

      {/* 페이지 레이아웃 */}
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <div className="SuggestionForm">
          <h2>배낭 일기</h2>
          <form>
            {/* 제목 입력 필드 */}
            <div className='input-group'>
              <label htmlFor="title" className='col-form-label'>제목</label>
              <input 
                type='text' 
                name='title' 
                placeholder='제목을 입력해주세요'
                required 
                className="form-control" 
                style={{ width: '100%', height: '35px', pointerEvents: 'auto' }} 
              />
            </div>

            {/* 작성자 입력 필드 - 제목과 동일한 스타일 적용 */}
            <div className='input-group'>
              <label htmlFor="writer" className='col-form-label'>작성자</label>
              <input 
                type='text' 
                name='writer'
                placeholder='작성자 입력'
                required 
                className="form-control"
                style={{ width: '100%', height: '35px', pointerEvents: 'auto' }} 
              />
            </div>

            <hr />

            {/* Toast UI Editor */}
            <div className='edit-wrap'>
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

        {/* 등록하기 버튼 - 로그인 버튼과 동일한 스타일 적용 */}
        <div className="button-container" style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link 
            to='/traveler/community' 
            className="btn btn-primary" 
            style={{
              display: 'inline-block',
              backgroundColor: '#FF5A5F', // 로그인 버튼과 동일한 색상
              color: 'white',
              padding: '12px 20px',
              borderRadius: '30px',  // 로그인 버튼처럼 둥글게
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'background 0.3s',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' // 그림자 효과 추가
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E04848'} // hover 효과
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FF5A5F'}
          >
            등록하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LikeMemo;
