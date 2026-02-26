'use client'
import { useState,useEffect } from "react"

export default function Posts(){
    const[posts,setPosts]=useState([]);

    const getPosts=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts') 
        .then(res=>res.json())       
        .then(posts=>setPosts(posts))
        .catch(err=>alert(err));
    }

    useEffect(()=>{
        getPosts();
    },[])

    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-red-600">Posts</h1>
            {
                posts.map((post)=>(<p key={post.id}>{post.title}</p>))
            }
        </div>
    )

}