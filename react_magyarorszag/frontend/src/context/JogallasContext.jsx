import { useState,useEffect,createContext  } from "react";

const JogallasContext=createContext();

export const JogallasProvider=({children})=>{
    const[jogallasok,setJogallasok]=useState([]);
    const[jogallasTelepulesek,setJogallasTelepulesek]=useState([]);
    const[kivalasztottJogallas,setKivalasztottJogallas]=useState("");

    const getJogallasok=()=>{
         fetch(`${import.meta.env.VITE_BASE_URL}/jogallasok`)
        .then(res=>res.json())
        .then(adat=>setJogallasok(adat))
        .catch(err=>alert(err));

    }

    const getJogallasTelepulesei=(jogallas)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/jogallasok/jogallas/${jogallas}`)
        .then(res=>res.json())
        .then(adat=>setJogallasTelepulesek(adat))
        .catch(err=>alert(err));

    }

     useEffect(()=>{
        getJogallasok();
        if(kivalasztottJogallas!=""){
            getJogallasTelepulesei(kivalasztottJogallas);
        }
    },[kivalasztottJogallas])

    return <JogallasContext.Provider value={{
        jogallasok,
        jogallasTelepulesek,
        kivalasztottJogallas,
        setKivalasztottJogallas
    }}>{children}</JogallasContext.Provider>
}

export default JogallasContext;