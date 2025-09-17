import { useState,useEffect } from "react";
import RandomUser from "./RandomUser";
import UserSelect from "./UserSelect";

function RandomUsers() {
    const[users,setUsers]=useState([]);
    const[info,setInfo]=useState({});
    const[userNum,setUserNum]=useState(5);

    const getRandomUsers=()=>{
        fetch(`https://randomuser.me/api/?results=${userNum}`)
        .then(res=>res.json())
        .then(valasz=>{
            setUsers(valasz.results);
            setInfo(valasz.info);
        })
        .catch(err=>alert(err));
    }

    useEffect(()=>{
        getRandomUsers();
    },[userNum]);

  return (
    <div>
        <h2 className="text-center font-bold text-blue-700">Random user lista</h2>
        <UserSelect setUserNum={setUserNum}/>
        <div className="flex flex-row flex-wrap items-center justify-center">
            {
                users.map((user,i)=>(<RandomUser key={i} user={user} />))
            }
        </div>
        
    </div>
  )
}

export default RandomUsers