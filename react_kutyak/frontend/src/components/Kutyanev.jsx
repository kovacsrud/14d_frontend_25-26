import {useNavigate} from 'react-router-dom';
import {useContext,useState} from 'react';
import KutyaContext from '../context/KutyaContext';

function Kutyanev({ kutyanev }) {

  const navigate=useNavigate();
  const {backendMuvelet}=useContext(KutyaContext);

  const modosit=()=>{
    navigate('/kutyanevform',{state:{kutyanev}})
  }

  const torol=()=>{
    const url=`${import.meta.env.VITE_BASE_URL}/kutyanevek`;
    backendMuvelet(kutyanev,"DELETE",url);
  }


  return (
    <div className="card m-5 w-96 bg-lime-100 text-lime-800 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{kutyanev.kutyanev}</h2>
        <p>
          Id:{kutyanev.Id}
        </p>
        <div className="justify-end card-actions">
          <button onClick={()=>modosit()} className="btn btn-primary">Módosítás</button>
          <button onClick={()=>torol()} className="btn btn-primary">Törlés</button>
        </div>
        <div className="justify-end card-actions">
          
        </div>
      </div>
    </div>
  );
}

export default Kutyanev;
