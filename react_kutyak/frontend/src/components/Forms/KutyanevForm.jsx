import { useContext,useState } from "react";
import KutyaContext from "../../context/KutyaContext";
import { useLocation,useNavigate } from "react-router-dom";

function KutyanevForm() {
    const {backendMuvelet}=useContext(KutyaContext);
    let cim="Új kutyanév rögzítése";
    const navigate=useNavigate();
    const{state}=useLocation();
    let formObj={};
    let url=`${import.meta.env.VITE_BASE_URL}/kutyanevek`;
    let method="POST";

    if(state!==null){
        const{kutyanev}=state;
        cim="Kutyanév módosítása";
        method="PUT";
        formObj={
            Id:kutyanev.Id,
            kutyanev:kutyanev.kutyanev
        }
    } else {
        formObj={
            kutyanev:""
        }
    }

    const[formData,setFormData]=useState(formObj);

    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        backendMuvelet(formData,method,url);
        navigate('/kutyanevek');
    }


  return (
    <div>
        <h1 className="text-2xl text-center m-10">{cim}</h1>
        <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 justify-items-center">
                <input id="kutyanev" type="text" required value={formData.kutyanev} onChange={writeData} placeholder="kutya neve" className="input input-success" />
                <button className="m-5 btn btn-success">Küldés</button>

            </div>
        </form>
    </div>
  )
}

export default KutyanevForm