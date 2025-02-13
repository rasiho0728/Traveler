import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/backpackDetail.css';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';

const BackpackDetail: React.FC = () => {
    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        appear_animate();
    }, []);

    useEffect(() => {
        updateHalfHeight();
        window.addEventListener("resize", updateHalfHeight);
        return () => {
            window.removeEventListener("resize", updateHalfHeight);
        };
    }, []);

    const [comments, setComments] = useState([
        {
            id: 1,
            name: "김지수",
            date: "2025년 3월 5일 오후 3시 30분",
            message: "방탈출 카페, VR 게임 유명해요",
            replies: [
                {
                    id: 2,
                    name: "이유진",
                    date: "2025년 3월 6일 오전 10시 45분",
                    message: "방탈출은 강남에 공포로 추천 합니다",
                },
                {
                    id: 3,
                    name: "박민수",
                    date: "2025년 3월 6일 오전 11시 15분",
                    message: "VR은 몬스터, 스테이션이에 케이크 게임 추천이요!! ",
                }
            ]
        }
    ]);

    const [newComment, setNewComment] = useState("");
    const [newReply, setNewReply] = useState<{ [key: number]: string }>({});
    const [showReplyInput, setShowReplyInput] = useState<{ [key: number]: boolean }>({});
    const [showReplies, setShowReplies] = useState<{ [key: number]: boolean }>({}); // 🔹 대댓글 표시 여부 상태 추가

    // 새로운 댓글 추가
    const handleAddComment = () => {
        if (newComment.trim() === "") return;
        const newEntry = {
            id: comments.length + 1,
            name: "사용자",
            date: new Date().toLocaleString(),
            message: newComment,
            replies: []
        };
        setComments([...comments, newEntry]);
        setNewComment("");
    };

    // 대댓글 추가
    const handleAddReply = (parentId: number) => {
        if (!newReply[parentId] || newReply[parentId].trim() === "") return;
        const updatedComments = comments.map(comment => {
            if (comment.id === parentId) {
                return {
                    ...comment,
                    replies: [...comment.replies, {
                        id: comment.replies.length + 1,
                        name: "사용자",
                        date: new Date().toLocaleString(),
                        message: newReply[parentId]
                    }]
                };
            }
            return comment;
        });

        setComments(updatedComments);
        setNewReply({ ...newReply, [parentId]: "" });
        setShowReplyInput({ ...showReplyInput, [parentId]: false }); // 입력 완료 후 숨김
    };

    // REPLY 버튼을 숨기고 대댓글 입력 폼을 보이게 함
    const handleShowReplyInput = (commentId: number) => {
        setShowReplyInput({ ...showReplyInput, [commentId]: true });
    };

    // 대댓글 표시 토글 함수
    const toggleReplies = (commentId: number) => {
        setShowReplies((prev) => ({
            ...prev,
            [commentId]: !prev[commentId], // 현재 상태 반전 (true → false, false → true)
        }));
    };

    return (
        <div className='backpackDetail'>

            <div 
                className="hero-wrap js-halfheight" 
                style={{ backgroundImage: "url('/images/bg_4.jpg')" }}
            >
                <div className="overlay" style={{ pointerEvents: 'none' }}></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center">
                            <h1 className="mb-3 bread">여러분의 답변을 기다립니다 :D</h1>
                        </div>
                    </div>
                </div>
            </div>
         

            <div className='inner'>
                <div className='backpack-box'>
                    <div className='question'>
                        <img src='/images/person_1.jpg' alt='User'/>
                        <div className='profile'>
                            <p>여름봄</p>
                            <span>2025년 3월 5일 오후 1시 30분 </span>
                        </div>
                    </div>
                    <div className='text-box'>
                        <h2>서울 경복궁 근처에 유명한 맛집이 있을까요?</h2>
                        <p>2월초 서울여행을 가는데 실내위주 갈만한곳 추천좀요</p>
                    </div>
                </div>
                <div className="comments-box">
                <h3 className="mb-3 mt-3">댓글 ({comments.length})</h3>
                    <ul className="comment-list">
                        {comments.map(comment => (
                            <li className="comment" key={comment.id}>
                                <div className="vcard bio">
                                    <img src="/images/person_1.jpg" alt="User" />
                                </div>
                                <div className="comment-body">
                                    <h3>{comment.name}</h3>
                                    <div className="meta">{comment.date}</div>
                                    <p>{comment.message}</p>

                                    {!showReplyInput[comment.id] && (
                                        <p>
                                            <Link to="#" className="reply" onClick={() => handleShowReplyInput(comment.id)}>댓글작성</Link>
                                        </p>
                                    )}

                                    {/* 대댓글 입력 폼 */}
                                    {showReplyInput[comment.id] && (
                                        <div className="form-group mt-2">
                                            <textarea
                                                className="form-control"
                                                placeholder="댓글을 입력하세요"
                                                value={newReply[comment.id]}
                                                onChange={(e) => setNewReply({ ...newReply, [comment.id]: e.target.value })}
                                            />
                                            <button className="btn btn-primary btn-sm mt-2" onClick={() => handleAddReply(comment.id)}>입력</button>
                                        </div>
                                    )}

                                    {/* 대댓글 표시/숨김 버튼 */}
                                    {comment.replies.length > 0 && (
                                        <button 
                                            className="btn btn-link"
                                            onClick={() => toggleReplies(comment.id)}
                                            style={{ padding: '5px', fontSize: '14px' }}
                                        >
                                            {showReplies[comment.id] ? "대댓글 숨기기" : `대댓글 보기 (${comment.replies.length})`}
                                        </button>
                                    )}

                                    {/*  대댓글 리스트 (기본 숨김, 버튼 클릭 시 표시) */}
                                    {showReplies[comment.id] && (
                                        <ul className="children">
                                            {comment.replies.map(reply => (
                                                <li className="comment" key={reply.id}>
                                                    <div className="vcard bio">
                                                        <img src="/images/person_1.jpg" alt="User" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <h3>{reply.name}</h3>
                                                        <div className="meta">{reply.date}</div>
                                                        <p>{reply.message}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* ✅ 댓글 입력 폼 (이미지와 동일하게 유지) */}
                    <div className="comment-form-wrap pt-5">
                        <h3 className="mb-5">댓글</h3>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                placeholder="내용을 입력해주세요"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={handleAddComment}>입력</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackpackDetail;
