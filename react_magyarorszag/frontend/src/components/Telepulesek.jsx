import { useContext } from "react";
import TelepulesContext from "../context/TelepulesContext";
import Telepules from "./Telepules";

function Telepulesek() {
    const {telepulesnevek}=useContext(TelepulesContext);
  return (
    <div>
        <h1 className="text-3xl font-bold text-amber-500">Települések:</h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
            {
                telepulesnevek.map((telepules,i)=>(<Telepules key={i} telepules={telepules.nev} />))
            }
        </div>
    </div>
  )
}

export default Telepulesek