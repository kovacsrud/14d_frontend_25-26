import User from "./User";
import { useState,useEffect } from "react";


function Users() {

  const [users,setUsers]=useState([]);
  const userLetolt=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(valasz=>setUsers(valasz))
    .catch(err=>alert(err));
  }
  useEffect(()=>{
    userLetolt();
  },[]);



  return (
    <div>
      <h2 className="text-3xl text-center font-bold text-sky-800 m-3">Felhasználók</h2>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {
          users.map((user,i)=>(<User key={i} user={user} />))
        }
      </div>
    </div>
  )
}

export default Users