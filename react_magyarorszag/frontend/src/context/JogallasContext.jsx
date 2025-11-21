import { useState,useEffect,createContext  } from "react";

const JogallasContext=createContext();

export const JogallasProvider=({children})=>{



    return <JogallasContext.Provider value={{}}>{children}</JogallasContext.Provider>
}




export default JogallasContext;