import {useState,useEffect} from 'react';

function Login() {
    const[message,setMessage]=useState({});

    const login=()=>{
        fetch('https://localhost:8000/login')
        .then(res=>res.json())
        .then(adat=>setMessage(adat))
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        login();
    },[])

  return (
    <div>
        <h2 className='text-2xl font-bold text-center'>{message.message}</h2>
    </div>
  )
}

export default Login