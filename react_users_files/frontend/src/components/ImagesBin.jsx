import {useState,useContext,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Image from './Image';
import UserContext from '../context/UserContext';


function ImagesBin() {
    const{update,refresh}=useContext(UserContext);
    const[images,setImages]=useState([]);
    const[binImages,setBinImages]=useState([]);
    const navigate=useNavigate();
    const token=sessionStorage.getItem('usertoken');

    useEffect(()=>{
        if(token){
            fetch(`${import.meta.env.VITE_BASE_URL}/api/imagesbin`,{
                method:'GET',
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(adatok=>{
                let tempimages=[];
                adatok.forEach(image=>{
                    let arrayBuffer=new Uint8Array(image.imageData.data);
                    const blob=new Blob([arrayBuffer],{type:"image/png"});
                    const img=URL.createObjectURL(blob);
                    tempimages.push(img);
                });
                setImages(adatok);
                setBinImages(tempimages);
            })
            .catch(err=>alert(err))

        } else {
            navigate('/login');
        }
    },[refresh]);



  return (
    <div>
        <h2 className='text-2xl text-center font-bold'>Képek (bin)</h2>
        {
            binImages.map((image,i)=>(<img key={i} className='w-48' src={image} />))
        }
    </div>
  )
}

export default ImagesBin