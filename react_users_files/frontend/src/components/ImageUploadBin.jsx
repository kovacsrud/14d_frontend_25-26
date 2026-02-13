import { useState,useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function ImageUploadBin() {
    const {update}=useContext(UserContext);
    const navigate=useNavigate();
    const [images,setImages]=useState([]);
    const token=sessionStorage.getItem('usertoken');

    useEffect(()=>{
        if(!token){
            navigate('/login');
        }
    },[token]);

    const onSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        for(let i=0;i<images.length;i++){
            formData.append("file"+i,images[i]);
        }
        kuldes(formData);
        navigate('/imagesbin');
    }

    const kuldes=(adat)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/imagesbin`,{
            method:'POST',
            headers:{
                "Authorization":`Bearer ${token}`
            },
            body:adat
        })
        .then(res=>res.json())
        .then(valasz=>{alert(valasz.message);update()})
        .catch(err=>alert(err));
    }

    const imageChange=(e)=>{
        setImages([...images,...e.target.files])
    }

  return (
    <div>
        <h2 className="m-10 text-2xl font-bold text-center text-sky-800">Képek feltöltése (bin)</h2>
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={onSubmit}>
                <input onChange={imageChange} className="file-input file-input-primary" type="file" multiple required/>
                <div>
                  <button className="btn btn-primary">Feltöltés</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ImageUploadBin