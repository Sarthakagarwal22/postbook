import React, { useState, useEffect } from 'react';
import {getPosts} from './Network'
import {Post} from './Components/Post'

export const PostBook = () => {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPostData();
    },[])

    const getPostData = async() => {
        setLoading(true);
        let response = await getPosts();
        setPosts(response);
        setLoading(false);
    }

    if(loading){
        return <div>Loading...</div>
    }
    else{
        return (
            <div>
            <h2>POSTBOOK</h2>
            {
                posts.map((post, index) => (
                    <div key={`${post.id}-${index}`}>
                        <Post data={post} updatePosts={getPostData}/>
                    </div>
                ))
            }
            </div>
        )
    }

}