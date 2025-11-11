import {useNavigate} from 'react-router-dom';
import {useContext,useState} from 'react';
import KutyaContext from '../context/KutyaContext';
import Modal2 from './Modal2';

function Kutyafajta({kutyafajta}) {

  const navigate=useNavigate();
  const {backendMuvelet}=useContext(KutyaContext);

  const[isDelete,setIsDelete]=useState(false);
  const[isModify,setIsModify]=useState(false);

  const openDelete=()=>{
    setIsDelete(true);
  }

  const closeDelete=()=>{
    setIsDelete(false);
  }

  const openModify=()=>{
    setIsModify(true);
  }

  const closeModify=()=>{
    setIsModify(false);
  }

  const modosit=()=>{
    navigate('/kutyafajtaform',{state:{kutyafajta}})
  }

  const torol=()=>{
    const url=`${import.meta.env.VITE_BASE_URL}/kutyafajtak`;
    backendMuvelet(kutyafajta,"DELETE",url);
  }

  return (
    <div className="card m-5 w-96 bg-lime-100 text-lime-800 card-md shadow-sm">
      {
        isModify && (<Modal2 title="Módosítás" body="Biztosan módosítja?" commitFunction={()=>modosit()} closeFunction={()=>closeModify()} />)
      }
      {
        isDelete && (<Modal2 title="Törlés" body="Biztosan törli?" commitFunction={()=>torol()} closeFunction={()=>closeDelete()} />)
      }
      <div className="card-body">
        <h2 className="card-title">{kutyafajta.nev}</h2>
        <p>
          Id:{kutyafajta.Id}
        </p>
        <p>
          Eredeti név:{kutyafajta.eredetinev}
        </p>
        <div className="justify-end card-actions">
          <button onClick={openModify} className="btn btn-primary">Módosítás</button>
          <button onClick={openDelete} className="btn btn-primary">Törlés</button>
        </div>
        <div className="justify-end card-actions">
          
        </div>
      </div>
    </div>
  )
}

export default Kutyafajta