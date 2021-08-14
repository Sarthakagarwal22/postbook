import React, {useState} from 'react';

import {getSubComment, likeComment, unLikeComment, replyToComment} from '../../../../Network'
import { CommentsList } from '../../';

export const Comment = ({commentData, updatePosts, postId}) => {

    const [showSubComments, setShowSubComments] = useState(true);
    const [replyText, setReplyText] = useState("");
    const [subComments, setSubComments] = useState([]);

    const handleCommentLikedClick = (event, commentId) => {
        event.stopPropagation()
        likeComment(commentId);
        updatePosts()
        //Api Call
    }
    
    const handleCommentUnLikedClick = (event, commentId) => {
        event.stopPropagation()
        unLikeComment(commentId)
        updatePosts()
        //Api Call
    }

    const handleShowReplyClick = async () =>{
        const subComments = await getSubComment(commentData.id);
        setSubComments(subComments);
    }

    const commentClickHandler = (event) => {
        event.stopPropagation();
        setShowSubComments(!showSubComments);
    }

    const handleReplyChange = (event) => {
        setReplyText(event.target.value);
    }

    const handleReplyClick = (event) => {
        event.stopPropagation();
        if(replyText && replyText.length){
            replyToComment(commentData.id, replyText, postId)
            updatePosts();
        }
    }
    
    return(
        <div className="comment" key={commentData.id} >
            <h3 className="comment-user-name" onClick={commentClickHandler}>{commentData.user} commented - </h3>
            <h4 className="comment-text" onClick={commentClickHandler}>{commentData.text}</h4>
            <input type="text" defaultValue={undefined} placeholder="add a reply" value={replyText} onChange={handleReplyChange} /> <button onClick={(event)=>{handleReplyClick(event)}}>Reply</button>
            <br /><br />
            {Number(commentData.likes) > 0 && <span>{commentData.likes} like(s) &nbsp;</span>}
            {
                commentData.hasUserLiked == true ?
                (<button onClick={(event) => {
                    handleCommentUnLikedClick(event, commentData.id)
                }}>UnLike</button>)
                :
                (<button onClick={(event) => {
                    handleCommentLikedClick(event, commentData.id)
                }}>Like</button>)
            }
            {
                !subComments.length && commentData.hasComments && <button onClick={handleShowReplyClick}>Show Replies</button>
            }
            {
                showSubComments && subComments && <CommentsList commentData={subComments} updatePosts={updatePosts}/>
            }
        </div>
    )
}