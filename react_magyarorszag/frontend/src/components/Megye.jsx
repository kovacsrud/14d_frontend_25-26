import { useContext } from "react";
import MegyeContext from "../context/MegyeContext";
import { useNavigate } from "react-router-dom";

function Megye({megye}) {
    const navigate=useNavigate();
    const {setKivalasztottMegye}=useContext(MegyeContext);

     const buttonClick=()=>{
        setKivalasztottMegye(megye.megyenev);
        navigate('/megyetelepulesek');
    }



  return (
     <div>
      <div className="m-5 card bg-amber-600 text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">{megye.megyenev}</h2>
          <p>
           
          </p>
          <div className="card-actions justify-end">
            <button onClick={buttonClick} className="btn">Tovább</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Megye