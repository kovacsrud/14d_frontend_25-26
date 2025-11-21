import { useContext } from "react";
import MegyeContext from "../context/MegyeContext";
import Telepules from "./Telepules";

function MegyeTelepulesek() {
    const{megyeTelepulesei,kivalasztottMegye}=useContext(MegyeContext);

  return (
    <div>
        <h1 className="m-5 text-3xl font-bold text-center text-amber-500">{kivalasztottMegye} települései:</h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
            {
                megyeTelepulesei.map((telepules,i)=>(<Telepules key={i} telepules={telepules.telepulesnev} />))
            }
        </div>
    </div>
  )
}

export default MegyeTelepulesek