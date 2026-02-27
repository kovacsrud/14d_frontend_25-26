'use client'
import { useState } from "react";
import IncomeCard from "./incomecard/page";


export default function Income(){
    const [also,setAlso]=useState(0);
    const [felso,setFelso]=useState(0);
    const [customers,setCustomers]=useState([]);
    const [message,setMessage]=useState("");

    const getData=()=>{
        fetch(`http://localhost:3000/api/customers/income2?also=${also}&felso=${felso}`)
        .then(res=>res.json())
        .then(adat=>{
            if(adat.message){
                setMessage(adat.message);
            } else {
                setCustomers(adat);
            }
            
        })
        .catch(err=>alert(err));
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-red">Szűrés</h1>
            <div className="m-5 flex flex-col items-center justify-center">
                <input type="text" id="also" value={also} onChange={(e)=>setAlso(e.target.value)} placeholder="Alsó határ" className="m-5 input" />
                <input type="text" id="felso" value={felso} onChange={(e)=>setFelso(e.target.value)} placeholder="Felső határ" className="m-5 input" />
                <button onClick={()=>getData()} className="btn btn-accent m-5">Szűrés</button>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center">
                {
                    customers.length>0 ?
                     customers.map((customer)=>(<IncomeCard key={customer.customer_id} customer={customer}/>))
                      :
                     <p className="text-center font-bold text-2xl">{message}</p>

                }
            </div>


        </div>

    )

}