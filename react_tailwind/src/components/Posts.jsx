import { useState,useEffect } from "react";
import Post from "./Post";

function Posts() {
    const[posts,setPosts]=useState([]);

    const downloadPosts=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(adat=>setPosts(adat))
        .catch(err=>alert(err));
    }

    const downloadPostsAsync=async ()=>{
        try {
            const keres=await fetch("https://jsonplaceholder.typicode.com/posts");
            const valasz=await keres.json();
            setPosts(valasz);
            
        } catch (error) {
            alert(err);
        }
        
    }

    //Akkor fut le, amikor a komponens létrejön, vagy amikor a függő változó értéke megváltozik
    useEffect(()=>{
       // downloadPosts();
        downloadPostsAsync();

    },[])


  return (
    <div>
        <h2 className="text-2xl text-center font-bold text-yellow-600">Posztok</h2>
        <p className="text-center">Adatok száma:{posts.length}</p>
        <div className="flex flex-row flex-wrap items-center justify-center">
        {
           posts.map((post)=>(<Post post={post} />))
        }
        </div>
    </div>
  )
}

export default Posts