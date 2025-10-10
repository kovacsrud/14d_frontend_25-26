import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UjAuto() {

  const navigate=useNavigate();

  const [marka,setMarka]=useState("");
  const [tipus,setTipus]=useState("");
  const [rendszam,setRendszam]=useState("");
  const [gyartasiev,setGyartasiev]=useState("");
  const [szin,setSzin]=useState("");

  const onSubmit=(e)=>{
    e.preventDefault();
    adatKuldes(
      {marka,tipus,rendszam,gyartasiev,szin},
      'POST',
      `${import.meta.env.VITE_BASE_URL}/autok`
    );
  }

  const adatKuldes=(adat,method,url)=>{
    fetch(url,{
      method:method,
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(adat)
    })
    .then(res=>res.text())
    .then(valasz=>{alert(valasz);navigate('/')})
    .catch(err=>alert(err));
  }


  return (
    <div>
      <h2 className="m-5 text-3xl font-bold text-center text-indigo-800">
        Új autó felvitele
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col items-center justify-center">
        <div className="m-1">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Márka</legend>
            <input value={marka} onChange={(e)=>setMarka(e.target.value)} type="text" className="input" />
          </fieldset>
        </div>
        <div className="m-1">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Típus</legend>
            <input value={tipus} onChange={(e)=>setTipus(e.target.value)} type="text" className="input" />
          </fieldset>
        </div>
        <div className="m-1">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Rendszám</legend>
            <input value={rendszam} onChange={(e)=>setRendszam(e.target.value)} type="text" className="input" />
          </fieldset>
        </div>
        <div className="m-1">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Gyártási év</legend>
            <input value={gyartasiev} onChange={(e)=>setGyartasiev(e.target.value)} type="text" className="input" />
          </fieldset>
        </div>
        <div className="m-1">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Szín</legend>
            <input value={szin} onChange={(e)=>setSzin(e.target.value)} type="text" className="input" />
          </fieldset>
        </div>
        <div className="m-1">
          <button className="btn btn-primary" type="submit">Küldés</button>
        </div>
      </form>
    </div>
  );
}

export default UjAuto;
