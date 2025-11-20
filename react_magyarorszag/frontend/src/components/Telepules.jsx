import { useContext } from "react";
import TelepulesContext from "../context/TelepulesContext";
import { useNavigate } from "react-router-dom";

function Telepules({ telepules }) {
    const navigate=useNavigate();
    const {setSelectedTelepules}=useContext(TelepulesContext);

    const buttonClick=()=>{
        setSelectedTelepules(telepules);
        navigate('/telepulesadatok');
    }

  return (
    <div>
      <div className="m-5 card bg-amber-600 text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">{telepules}</h2>
          <p>
           
          </p>
          <div className="card-actions justify-end">
            <button onClick={buttonClick} className="btn">Tovább</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Telepules;
