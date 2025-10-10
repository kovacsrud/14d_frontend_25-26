import { useNavigate } from "react-router-dom";


function Auto({ auto }) {

  const navigate=useNavigate();
  
  const modositas=(auto)=>{
    navigate('/modauto',{state:{auto}});    
  }

  const torles=(id)=>{
     fetch(`${import.meta.env.VITE_BASE_URL}/autok/${id}`,{
      method:'DELETE',
      headers:{
        'Content-type':'application/json'
      }      
    })
    .then(res=>res.text())
    .then(valasz=>{alert(valasz);navigate('/')})
    .catch(err=>alert(err));
  }


  return (
    <div className="card card-border bg-indigo-200 m-5 w-96">
      <div className="card-body">
        <h2 className="card-title">{auto.marka} {auto.tipus}</h2>
        <p>
          {auto.rendszam}
        </p>
        <p>{auto.gyartasiev}</p>
        <p>{auto.szin}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>modositas(auto)} className="btn btn-primary">Módosítás</button>
          <button onClick={()=>torles(auto.id)} className="btn btn-primary">Törlés</button>
        </div>
      </div>
    </div>
  );
}

export default Auto;
