import { useState, useEffect } from "react";
import Character from "./Character";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);

  const getCharacters = () => {
    fetch(`${import.meta.env.VITE_BASE_URL}/character?page=${page}`)
      .then((res) => res.json())
      .then((adatok) => {
        setCharacters(adatok.results);
        setInfo(adatok.info);
      })
      .catch((err) => alert(err));
   };

   const tovabb=()=>{
        if(page<info.pages){
            setPage(prev=>prev+1);
        }

   }

   const vissza=()=>{
        if(page>1){
            setPage(prev=>prev-1);
        }

   }

  useEffect(() => {
    getCharacters();
  }, [page]);

  return (
    <div>
      <h2 className="text-3xl text-center font-bold">Characters:</h2>
      <div className="m-2 flex justify-center join">
          <button onClick={()=>vissza()} className="join-item btn">«</button>
          <button className="join-item btn">Oldal {page}</button>
          <button onClick={()=>tovabb()} className="join-item btn">»</button>
        </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        
        {characters.map((character, i) => (
          <Character key={i} character={character} />
        ))}
      </div>
      <div className="m-2 flex justify-center join">
          <button onClick={()=>vissza()} className="join-item btn">«</button>
          <button className="join-item btn">Oldal {page}</button>
          <button onClick={()=>tovabb()} className="join-item btn">»</button>
        </div>
    </div>
  );
}

export default Characters;
