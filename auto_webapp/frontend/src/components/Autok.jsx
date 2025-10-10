import { useState,useEffect } from "react";
import Auto from "./Auto";

function Autok() {
    const[autok,setAutok]=useState([]);
    const getAutok=()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/autok`)
        .then(res=>res.json())
        .then(adatok=>setAutok(adatok))
        .catch(err=>alert(err));
    }

    useEffect(()=>{
      getAutok();
    },[])

  return (
    <div>
      <h2 className="text-3xl my-5 font-bold text-center text-indigo-800">Eladó autóink</h2>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {
          autok.map((auto,i)=>(<Auto key={i} auto={auto} />))
        }
      </div>

    </div>
  )
}

export default Autok