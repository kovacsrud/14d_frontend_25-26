import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Vedett() {
  const navigate=useNavigate();
  const[vedettInfo,setVedettInfo]=useState(null);
  const token=sessionStorage.getItem('usertoken');

  const getVedettAdat=()=>{
    fetch(`${import.meta.env.VITE_BASE_URL}/api/user/vedett`,{
      method:"GET",
      headers:{
        "Content-type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    })
    .then(res=>res.text())
    .then(adat=>{
      if(!adat.message){
        setVedettInfo(adat);
      } else {
        alert(adat.message);
        navigate('/login');
      }
    })
    .catch(err=>alert(err));
  }

  useEffect(()=>{
    getVedettAdat();
  },[]);

  return (
    <div>Védett info:{vedettInfo}</div>
  )
}

export default Vedett