import { useState,useEffect } from "react";
import Author from "./Author";

function AuthorsGQL() {
    const [authors,setAuthors]=useState([]);

    const query=()=>{
        fetch('http://localhost:8000/graphql',{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                 query:`
                {
                   authors{
                        id,
                        name,
                        books{
                            id,
                            title
                        }
    
                    }
                }
                `
            })
            
        })
        .then(res=>res.json())
        .then(adat=>setAuthors(adat.data.authors))
        .catch(err=>alert(err))

    };

    useEffect(()=>{
        query();
    },[])

  return (
    <div>
        <h2 className="text-2xl text-center font-bold">AuthorsGQL</h2>
        <div className="flex flex-row flex-wrap items-center justify-center">
            {
                //authors.map((author)=>(<p key={author.id}>{author.name}</p>))
                authors.map((author)=>(<Author author={author} />))
            }
        </div>

    </div>
  )
}

export default AuthorsGQL