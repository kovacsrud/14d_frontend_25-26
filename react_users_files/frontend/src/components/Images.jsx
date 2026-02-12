import { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Image from "./Image";

function Images() {
    const [images,setImages]=useState({});
    const token=sessionStorage.getItem('usertoken');
    const navigate=useNavigate();
    const {refresh}=useContext(UserContext);
    
    useEffect(()=>{
        if(token){
            fetch(`${import.meta.env.VITE_BASE_URL}/api/images`,{
                method:'GET',
                headers:{
                    "Content-type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(images=>setImages(images))
            .catch(err=>alert(err));

        } else {
            navigate('/login');
        }
    },[refresh])


  return (
    <div>
        <h2 className="text-2xl font-bold text-center text-sky-800">Feltöltött képek</h2>
        {
            token && images.images!=null && images.images.length>0 ?
        <div className="flex flex-row flex-wrap items-center justify-center">
            {
                
                images.images.map((image,i)=>(<Image key={i} path={images.path} image={image } />))

            }
        </div>
        :
        <div>
            <h2 className="text-2xl font-bold text-center text-sky-800">Nincsenek feltöltött képek</h2>
        </div>
        }
    </div>
  )
}

export default Images