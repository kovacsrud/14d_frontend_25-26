import { getAllCustomers } from "../../../../dblib/db"

export default async function Servercustomers(){

    //Saját API esetén közvetlenül is lehet hívni az adatbázis funkciót
    const customers=await getAllCustomers();
    
    //Saját API, ekkor nem feltétlenül kell a http
    //const keres=await fetch('http://localhost:3000/api/customers');
    //const customers=await keres.json();

    


    return (
        <div>
            <h1 className="text-2xl text-center font-bold text-red-800">Customers(server)</h1>
            {
                customers.map((customer)=>(<p key={customer.customer_id}>{customer.first_name} {customer.last_name}</p>))
            }

        </div>
    )
}