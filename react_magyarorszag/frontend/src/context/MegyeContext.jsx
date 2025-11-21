import { useState,useEffect,createContext  } from "react";

const MegyeContext=createContext();

export const MegyeProvider=({children})=>{
    const[megyek,setMegyek]=useState([]);
    const[megyeTelepulesei,setMegyeTelepulesei]=useState([]);
    const[kivalasztottMegye,setKivalasztottMegye]=useState("");

    const getMegyek=()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/megyek`)
        .then(res=>res.json())
        .then(adat=>setMegyek(adat))
        .catch(err=>alert(err));

    }

    const getMegyeTelepulesek=(megye)=>{
         fetch(`${import.meta.env.VITE_BASE_URL}/megyek/megye/${megye}`)
        .then(res=>res.json())
        .then(adat=>setMegyeTelepulesei(adat))
        .catch(err=>alert(err));

    }

    useEffect(()=>{
        getMegyek();
        if(kivalasztottMegye!=""){
            getMegyeTelepulesek(kivalasztottMegye);
        }
    },[kivalasztottMegye])


    return <MegyeContext.Provider value={{
        megyek,
        megyeTelepulesei,
        kivalasztottMegye,
        setKivalasztottMegye

    }}>{children}</MegyeContext.Provider>
}



export default MegyeContext;