// import {createPostsArray} from "./mockData";
import {IPostData} from "../interface";

import {comments1, comments2, posts} from './mockData'

export const getPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts);
        },100)
    })
}

export const getCommentsForPost = (postId) => {
    return comments1.filter((comment) => comment.postId == postId)
}

export const getSubComment = (commentId) => {
    return comments1.filter((comment)=>comment.parentId == commentId)
}

export const likePost = (postId) => {
    posts.forEach(post => {
        if(post.id == postId){
            post.likes++
            post.hasUserLiked = true
        }
    })
}

export const unLikePost = (postId) => {
    posts.forEach(post => {
        if(post.id == postId){
            post.likes--
            post.hasUserLiked = false
        }
    })
}

export const likeComment = (commentId) => {
    comments1.forEach(comment => {
        if(comment.id == commentId){
            comment.likes++
            comment.hasUserLiked = true
        }
    })

}

export const unLikeComment = (commentId) => {
    comments1.forEach(comment => {
        if(comment.id == commentId){
            comment.likes--
            comment.hasUserLiked = false
        }
    })
}

export const replyToComment = (commentId, reply, postId) => {
    const replyContent = {
        id:(Math.random()*1000).toFixed(0),
        text:reply,
        likes: "0",
        user: "Abc314",
        hasComments : false,
        hasUserLiked: false,
        parentId: commentId,
    }
    comments1.push(replyContent)
    posts.forEach((post)=>{
        if(post.id === postId){
            post.numberOfComments++;
        }
    })
}

export const replyToPost = (postId, reply) => {
    const replyContent = {
        id:(Math.random()*1000).toFixed(0),
        text:reply,
        likes: "0",
        user: "Abc314",
        hasComments : false,
        hasUserLiked: false,
        postId: postId,
    }
    posts.forEach((post)=>{
        if(post.id === postId){
            post.numberOfComments++;
        }
    })
    comments1.push(replyContent)
}