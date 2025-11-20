import { useState,useEffect,createContext } from "react";

const TelepulesContext=createContext();

export const TelepulesProvider=({children})=>{
    const[telepulesnevek,setTelepulesNevek]=useState([]);
    const[selectedTelepules,setSelectedTelepules]=useState("");
    const[telepules,setTelepules]=useState({});

    const getTelepulesek=()=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/telepulesek`)
        .then(res=>res.json())
        .then(adat=>setTelepulesNevek(adat))
        .catch(err=>alert(err));
    }

    const getTelepules=(telepulesnev)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/telepulesek/telepulesnev/${telepulesnev}`)
        .then(res=>res.json())
        .then(adat=>setTelepules(adat))
        .catch(err=>alert(err));
    }

    useEffect(()=>{
        getTelepulesek();
        if(selectedTelepules!=""){
            getTelepules(selectedTelepules);
        }
    },[selectedTelepules])



    return <TelepulesContext.Provider value={{
        telepulesnevek,
        telepules,
        setSelectedTelepules,
        selectedTelepules
    }}>{children}</TelepulesContext.Provider>
}


export default TelepulesContext;
