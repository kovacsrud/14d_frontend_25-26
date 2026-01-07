import { useState,useEffect } from "react";

type Name={
    title:string,
    first:string,
    last:string
}
type Street={
    number:number,
    name:string
}

type Coordinates={
    latitude:string,
    longitude:string
}

type TimeZone={
    offset:string,
    description:string
}

type Location={
    street:Street,
    city:string,
    state:string,
    country:string,
    postcode:string,
    coordinates:Coordinates,
    timezone:TimeZone
}

type Login={
    uuid:string,
    username:string,
    password:string,
    salt:string,
    md5:string,
    sha1:string,
    sha256:string
}

type DateAge={
    date:string,
    age:number
}

type Id={
    name:string,
    value:string
}

type Picture={
    large:string,
    medium:string,
    thumbnail:string
}

type Result={
    gender:string,
    name:Name,
    location:Location,
    email:string,
    login:Login,
    dob:DateAge,
    registered:DateAge,
    phone:string,
    cell:string,
    id:Id,
    picture:Picture,
    nat:string
}



function RandomUser() {
    const[users,setUsers]=useState(Array<Result>);

    const getUsers=()=>{
        fetch("https://randomuser.me/api/?results=10")
        .then(res=>res.json())
        .then(adat=>setUsers(adat.results))
        .catch(err=>alert(err));
    }

    useEffect(()=>{
        getUsers();
    },[])

  return (
    <div>
         <h3 className="text-xl font-bold text-center">Users:</h3>
         {
            users.map((user)=>(<p key={user.id.value}>{user.name.title} {user.name.first} {user.name.last}</p>))
         }
    </div>
  )  
}

export default RandomUser