import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BackpackDetail: React.FC = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            name: "Jane Doe",
            date: "March 5, 2025 at 3:30pm",
            message: "Great tips! I love backpacking and these insights are very helpful.",
            replies: [
                {
                    id: 2,
                    name: "John Smith",
                    date: "March 6, 2025 at 10:45am",
                    message: "I agree! Planning ahead is really important.",
                },
                {
                    id: 3,
                    name: "Emily Johnson",
                    date: "March 6, 2025 at 11:15am",
                    message: "Do you have any specific recommendations for beginner backpackers?",
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
            name: "Guest",
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
                        name: "Guest",
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
        <div className="p-5 mt-5">
            <h3 className="mb-5">{comments.length} Comments</h3>
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
                <h3 className="mb-5">Leave a comment</h3>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Write your comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={handleAddComment}>Post Comment</button>
                </div>
            </div>
        </div>
    );
};

export default BackpackDetail;
