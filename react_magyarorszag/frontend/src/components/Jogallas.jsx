import { useContext } from "react";
import JogallasContext from "../context/JogallasContext";
import { useNavigate } from "react-router-dom";

function Jogallas({ jogallas }) {
  const navigate = useNavigate();
  const { setKivalasztottJogallas } = useContext(JogallasContext);

  const buttonClick = () => {
    setKivalasztottJogallas(jogallas.jogallas);
    navigate("/jogallastelepulesek");
  };

  return (
    <div>
      <div className="m-5 card bg-amber-600 text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">{jogallas.jogallas}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <button onClick={buttonClick} className="btn">
              Tovább
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jogallas;
