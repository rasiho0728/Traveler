import React, { useEffect, useState } from 'react';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import { Link } from 'react-router-dom';
import { Provider } from "@lyket/react";
import { LikeButton } from "@lyket/react";
import '../../css/likeDetail.css';

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

    // 🔹 댓글 및 대댓글 관리
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
                    message: "방탈출은 강남에 공포로 추천합니다",
                },
                {
                    id: 3,
                    name: "박민수",
                    date: "2025년 3월 6일 오전 11시 15분",
                    message: "VR은 몬스터, 스테이션의 케이크 게임 추천이요!!",
                }
            ]
        }
    ]);

    const [newComment, setNewComment] = useState("");
    const [newReply, setNewReply] = useState<{ [key: number]: string }>({});
    const [showReplyInput, setShowReplyInput] = useState<{ [key: number]: boolean }>({});
    const [showReplies, setShowReplies] = useState<{ [key: number]: boolean }>({});

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
        setShowReplyInput({ ...showReplyInput, [parentId]: false });
    };

    // 대댓글 입력창 토글
    const handleShowReplyInput = (commentId: number) => {
        setShowReplyInput({ ...showReplyInput, [commentId]: true });
    };

    // 대댓글 표시/숨김 토글
    const toggleReplies = (commentId: number) => {
        setShowReplies((prev) => ({
            ...prev,
            [commentId]: !prev[commentId],
        }));
    };

    return (
        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
            <div className='like-detail'>

                <section className="ftco-section ftco-degree-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 ftco-animate">
                                <h2 className="mb-3">여행자를 위한 10가지 팁</h2>
                                <p>#1. 여행 전 계획 세우기</p>
                                <p><img src="/images/image_7.jpg" alt="" className="img-fluid" /></p>
                                <p>여행지의 날씨, 필수 아이템, 이동 방법 등을 미리 조사하세요</p>

                                <h2 className="mb-3 mt-5">#2. 가벼운 짐 꾸리기</h2>
                                <p><img src="/images/image_8.jpg" alt="" className="img-fluid" /></p>

                                {/* 🔹 해시태그 목록 */}
                                <div className="tag-widget post-tag-container mb-5 mt-5">
                                    <div className="tagcloud">
                                        <Link to="#" className="tag-cloud-link">체험</Link>
                                        <Link to="#" className="tag-cloud-link">문화</Link>
                                        <Link to="#" className="tag-cloud-link">교통</Link>
                                    </div>
                                </div>

                                {/* 🔹 좋아요 버튼 추가 (해시태그 아래) */}
                                <div className="like-detail-like-button">
                                    <LikeButton
                                        namespace="testing-react"
                                        id="like-button-main"
                                        hideCounterIfLessThan={0}
                                        component={({ handlePress, totalLikes }) => (
                                            <button onClick={handlePress} style={{ border: "none", background: "none", fontSize: "20px" }}>
                                                ❤️ {totalLikes}
                                            </button>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        <hr />

                        {/* 🔹 댓글 박스 */}
                        <div className="like-detail-comments-box">
                            <h4 className="mb-3 mt-3">댓글 ({comments.length})</h4>
                            <div className="like-detail-comment-list">
                                {comments.map(comment => (
                                    <div className="like-detail-comment" key={comment.id}>
                                        <h5>{comment.name}</h5>
                                        <div className="like-detail-meta">{comment.date}</div>
                                        <p>{comment.message}</p>

                                        {!showReplyInput[comment.id] && (
                                            <p>
                                                <Link to="#" className="like-detail-reply" onClick={() => handleShowReplyInput(comment.id)}>댓글 작성</Link>
                                            </p>
                                        )}

                                        {showReplyInput[comment.id] && (
                                            <div className="form-group mt-2">
                                                <textarea className="form-control" placeholder="댓글을 입력하세요" value={newReply[comment.id]}
                                                    onChange={(e) => setNewReply({ ...newReply, [comment.id]: e.target.value })} />
                                                <button className="btn btn-primary btn-sm mt-2" onClick={() => handleAddReply(comment.id)}>입력</button>
                                            </div>
                                        )}

                                        {comment.replies.length > 0 && (
                                            <button className="btn btn-link" onClick={() => toggleReplies(comment.id)}>
                                                {showReplies[comment.id] ? "대댓글 숨기기" : `대댓글 보기 (${comment.replies.length})`}
                                            </button>
                                        )}

                                        {showReplies[comment.id] && (
                                            <div className="like-detail-children">
                                                {comment.replies.map(reply => (
                                                    <div className="like-detail-comment" key={reply.id}>
                                                        <h5>{reply.name}</h5>
                                                        <div className="like-detail-meta">{reply.date}</div>
                                                        <p>{reply.message}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="내용을 입력해주세요" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                                <button className="btn btn-primary" onClick={handleAddComment}>입력</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Provider>
    );
};

export default BackpackDetail;
