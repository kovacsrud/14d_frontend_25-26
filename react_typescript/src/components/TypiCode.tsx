import { useState,useEffect } from "react";

type Post={
    userId:number,
    id:number,
    title:string,
    body:string
}

function TypiCode() {
    const [posts,setPosts]=useState(Array<Post>);

    const getPosts=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(adat=>setPosts(adat))
        .catch(err=>alert(err));
    }

    useEffect(()=>{
        getPosts();
    },[])

  return (
    <div>
        <h3 className="text-xl font-bold text-center">Posztok</h3>
        {
            posts.map((post)=>(<p key={post.id}>{post.id} {post.title}</p>))
        }
    </div>
  )
}

export default TypiCode