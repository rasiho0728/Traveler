import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/backpackDetail.css';


const BackpackDetail: React.FC = () => {
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
    };
    // 댓글 열기닫기 div 추가
    return (
        <div className='backpackDetail'>
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
                    <h3 className="mb-3 mt-3">{comments.length} Comments</h3>
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
                                    <p><Link to="#" className="reply" onClick={() => setNewReply({ ...newReply, [comment.id]: "" })}>Reply</Link></p>

                                    {/* 대댓글 입력 폼 */}
                                    {newReply[comment.id] !== undefined && (
                                        <div className="form-group mt-2">
                                            <textarea
                                                className="form-control"
                                                placeholder="Write a reply..."
                                                value={newReply[comment.id]}
                                                onChange={(e) => setNewReply({ ...newReply, [comment.id]: e.target.value })}
                                            />
                                            <button className="btn btn-primary btn-sm mt-2" onClick={() => handleAddReply(comment.id)}>Reply</button>
                                        </div>
                                    )}

                                    {/* 대댓글 리스트 */}
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
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* 새로운 댓글 입력 폼 */}
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
