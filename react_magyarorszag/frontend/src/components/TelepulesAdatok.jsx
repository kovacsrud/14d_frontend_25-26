import { useContext } from "react";
import TelepulesContext from "../context/TelepulesContext";

function TelepulesAdatok() {
    const {telepules,selectedTelepules}=useContext(TelepulesContext);
  return (
    <div>
        <h1 className="m-5 text-3xl text-center font-bold text-amber-700">{selectedTelepules} {telepules.telepulesnev}</h1>
    </div>
  )
}

export default TelepulesAdatok