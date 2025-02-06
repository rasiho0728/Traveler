import React, { useEffect, useRef, useState } from 'react';
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor } from '@toast-ui/react-editor';
import colorPlugin from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/dist/toastui-editor.css';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Link } from 'react-router-dom';
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "prismjs/themes/prism.css";
import axios from 'axios';

const LikeMemo: React.FC = () => {
    const [mNum, setMNum] = useState('');
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState<File>();
    const [images, setImages] = useState<File[]>([]);
    const [imageName, setImageName] = useState<string>();
    const [imageNames, setImageNames] = useState<string[]>([]);
    const editorRef = useRef<Editor>(null);

    const handleEditorChange = () => {
        const data = document.getElementsByClassName('ProseMirror')[1].innerHTML;
        setContent(data);
    };

    useEffect(() => {
        const htmlString = '';
        editorRef.current?.getInstance().setHTML(htmlString);
    }, []);

    useEffect(() => {
        if (image !== undefined) setImages([...images, image]);
    }, [image]);

    useEffect(() => {
        if (imageName !== undefined) setImageNames([...imageNames, imageName]);
    }, [imageName]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title || !writer || !content) {
            alert('모든 항목을 입력해주세요.');
            return;
        }
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("writer", writer);
            formData.append("content", content);
            formData.append("mnum", mNum);
            images.forEach((file) => {
                formData.append("images", file);
            });
            await axios.post(`${process.env.REACT_APP_BACK_END_URL}/api/suggestion`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
        } catch (error) {
            console.log('Error Message: ' + error);
        }
    };

    return (
        <div className="LikeMemoPage">
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/bg_4.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center">
                            <h1 className="mb-3 bread">Write Your Memo</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="SuggestionForm">
                <h2>제안 신청</h2>
                <form onSubmit={handleSubmit}>
                    <div className='center'>
                        <label htmlFor="title" className='col-sm-1 col-form-label'>제목</label>
                        <input type='text' name='title' value={title} placeholder='제목을 입력해주세요'
                            onChange={e => setTitle(e.target.value)} required style={{ width: '500px', height: '35px' }} />
                    </div>
                    <div className='writer'>
                        <label htmlFor="title" className='col-sm-1 col-form-label'>작성자</label>
                        <input type='text' value={writer} readOnly required style={{ width: '500px', height: '35px' }} />
                    </div>
                    <hr />
                    <div className='edit-wrap'>
                        <Editor
                            ref={editorRef}
                            previewStyle="vertical"
                            height="500px"
                            language='ko-KR'
                            initialEditType="wysiwyg"
                            usageStatistics={false}
                            hideModeSwitch={true}
                            plugins={[codeSyntaxHighlightPlugin, colorPlugin]}
                            onChange={handleEditorChange}
                        />
                    </div>
                </form>
            </div>
            <div className="button-container">
                <Link to='/traveler/community' className='write-button'>작성하기</Link>
            </div>
        </div>
    );
};

export default LikeMemo;
