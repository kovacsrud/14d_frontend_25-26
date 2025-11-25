import Jogallas from "./Jogallas";
import { useContext } from "react";
import JogallasContext from "../context/JogallasContext";

function Jogallasok() {
  const { jogallasok } = useContext(JogallasContext);

  return (
    <div>
      <div>
        <h1 className="m-5 text-3xl font-bold text-center text-amber-500">
          Jogállások:
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {jogallasok.map((jogallas, i) => (<Jogallas key={i} jogallas={jogallas} />))}
        </div>
      </div>
    </div>
  );
}

export default Jogallasok;
