import React, {useState} from 'react';

import {Comment} from './Components/Comment'

import './Comments.css'


export const CommentsList = ({commentData, updatePosts, postId}) => {
    
    return(
        <div className="comments">
            <div className="comments-list">
                {commentData.map(comment => {
                    return(
                        <div key={comment.id}>
                        <Comment postId={postId} commentData={comment} updatePosts={updatePosts} />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}