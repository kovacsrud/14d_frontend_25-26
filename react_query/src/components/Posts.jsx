import {useQuery} from '@tanstack/react-query'

function Posts() {
    const fetchPosts=async()=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!res.ok){
            throw new Error("Hiba a letöltés során!");
        }
        return res.json();
    }

    const {
        data:posts,
        isLoading,
        error
    }=useQuery({
        queryKey:['posts'],
        queryFn:fetchPosts
    });

    if(isLoading){
        <p>Loading...</p>
    }
    if(error){
        return <p>{error.message}</p>
    }

  return (
    <div>
        <h1 className='text-2xl font-bold text-green-700 m-5'>Posts</h1>
        {
            posts?.map((post)=>(<p key={post.id}>{post.title}</p>))
        }
    </div>
  )
}

export default Posts