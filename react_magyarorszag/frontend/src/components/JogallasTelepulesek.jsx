import { useContext } from "react";
import JogallasContext from "../context/JogallasContext";
import Telepules from "./Telepules";

function JogallasTelepulesek() {
    const{jogallasTelepulesek,kivalasztottJogallas}=useContext(JogallasContext);


  return (
   <div>
        <h1 className="m-5 text-3xl font-bold text-center text-amber-500">{kivalasztottJogallas} települései:</h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
            {
                jogallasTelepulesek.map((jogallas,i)=>(<Telepules key={i} telepules={jogallas.telepulesnev} />))
            }
        </div>
    </div>
  )
}

export default JogallasTelepulesek