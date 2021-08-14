import React,{useEffect, useState} from 'react';

import {likePost, unLikePost, getCommentsForPost, replyToPost} from '../../Network'
import {CommentsList} from '../Comments'

import './Post.css'

export const Post = ({data, updatePosts}) => {
    
    const [showComments, setShowComments] = useState(false);
    const [comment, setComments] = useState([]);
    const [replyText, setReplyText] = useState("");
    
    const handlePostLikedClick = (postId) => {
        likePost(postId);
        updatePosts()
        //Api Call
    }
    
    const handlePostUnLikedClick = (postId) => {
        unLikePost(postId);
        updatePosts()
        //Api Call
    }

    const commentClickHandler = () => {
        setShowComments(!showComments);
    }

    const handleCommentChange = (event) => {
        setReplyText(event.target.value);
    }

    const handleCommentClick = (event) => {
        event.stopPropagation();
        if(replyText && replyText.length){
            replyToPost(data.id, replyText)
            updatePosts();
        }
    }

    useEffect(() => {
        if(showComments) {
            const commentList = getCommentsForPost(data.id);
            setComments(commentList)
        }
    },[showComments])

    return(
        <div className="post-div">
            {
                data.image_url && 
                <img src={data.image_url} />
            }
            <br /><br />
            <div className="like-div">
            {
                data.likes &&
                <span>{data.likes} Like(s)</span>
            }
            &nbsp;&nbsp;&nbsp;
            {
                data.hasUserLiked == true ?
                (<button onClick={() => {
                    handlePostUnLikedClick(data.id)
                }}>UnLike</button>)
                :
                (<button onClick={() => {
                    handlePostLikedClick(data.id)
                }}>Like</button>)
            }
            </div>
            <br/>
            <div className="comment-div">
            {
            Number(data.numberOfComments) > 0 && 
                <div>
                <span onClick={()=>{commentClickHandler()}}> {data.numberOfComments} Comment(s) </span>
                    {
                    showComments && comment.length > 0 &&
                        <div>
                            <CommentsList postId={data.id} commentData={comment} updatePosts={updatePosts} />
                        </div>
                    }
                </div>
            }
            <br />
            <br />
            <input type="text" defaultValue={undefined} placeholder="add a comment" value={replyText} onChange={handleCommentChange} /> <button onClick={(event)=>{handleCommentClick(event)}}>Add Comment</button>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}