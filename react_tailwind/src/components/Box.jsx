import { useState } from "react";

function Box({start}) {
    const[szam,setSzam]=useState(start);

    const noveles=()=>{
        setSzam(prev=>prev+1);
    }
  return (
    <div  className="w-28 m-5 p-2 bg-amber-200">
        <p onClick={()=>noveles()} className="text-2xl font-bold text-center">{szam}</p>
    </div>
  )
}

export default Box