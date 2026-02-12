import { createContext,useContext } from "react";
import UserContext from "./UserContext";


const ImageContext=createContext();

export const ImageProvider=({children})=>{
    const {update}=useContext(UserContext);
    const token=sessionStorage.getItem('usertoken');

    const imgDelete=(imageId)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/images`,{
            method:'DELETE',
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify({"imageId":imageId})
        })
        .then(res=>res.json())
        .then(valasz=>{update();alert(valasz.message)})
        .catch(err=>alert(err));

    }



    return <ImageContext.Provider value={{imgDelete}}>{children}</ImageContext.Provider>
}



export default ImageContext;