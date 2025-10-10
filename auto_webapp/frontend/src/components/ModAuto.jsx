import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";

function ModAuto() {
    const{state}=useLocation();
    const navigate=useNavigate();

    let id="";
    let marka="";
    let tipus="";
    let gyartasiev="";
    let rendszam="";
    let szin="";

    if(state!==null){
        const{auto}=state;
        id=auto.id,
        marka=auto.marka,
        tipus=auto.tipus,
        gyartasiev=auto.gyartasiev,
        rendszam=auto.rendszam,
        szin=auto.szin
    }

    let formObj={
        id,
        marka,
        tipus,
        gyartasiev,
        rendszam,
        szin
    }

    const [formData,setFormData]=useState(formObj);
    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}))
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

    const onSubmit=(e)=>{
        e.preventDefault();
         adatKuldes(
      formData,
      'PUT',
      `${import.meta.env.VITE_BASE_URL}/autok/${id}`
    );

    }


  return (
    <div>
          <h2 className="m-5 text-3xl font-bold text-center text-indigo-800">Módosítás</h2>

      <form onSubmit={onSubmit} className="flex flex-col items-center justify-center">
        <div className="m-1">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Márka</legend>
            <input id="marka" value={formData.marka} onChange={writeData} type="text" className="input" />
          </fieldset>
        </div>
        <div className="m-1">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Típus</legend>
            <input id="tipus" value={formData.tipus} onChange={writeData} type="text" className="input" />
          </fieldset>
        </div>
        <div className="m-1">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Rendszám</legend>
            <input id="rendszam" value={formData.rendszam} onChange={writeData} type="text" className="input" />
          </fieldset>
        </div>
        <div className="m-1">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Gyártási év</legend>
            <input id="gyartasiev" value={formData.gyartasiev} onChange={writeData} type="text" className="input" />
          </fieldset>
        </div>
        <div className="m-1">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Szín</legend>
            <input id="szin" value={formData.szin} onChange={writeData} type="text" className="input" />
          </fieldset>
        </div>
        <div className="m-1">
          <button className="btn btn-primary" type="submit">Küldés</button>
        </div>
      </form>
    </div>
  )
}

export default ModAuto