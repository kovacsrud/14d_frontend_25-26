import { createContext,useContext } from "react";
import UserContext from "./UserContext";


const ImageContext=createContext();

export const ImageProvider=({children})=>{
    const {update}=useContext(UserContext);
    const token=sessionStorage.getItem('usertoken');

    const imgDelete=(imageId)=>{

    }



    return <ImageContext.Provider value={{imgDelete}}>{children}</ImageContext.Provider>
}



export default ImageContext;