import {useQuery} from '@tanstack/react-query';

function RandomUsers() {
    const fetchRandomUsers=async()=>{
        const res=await fetch('https://randomuser.me/api/?results=10');
        if(!res.ok){
            throw new Error("Hiba a letöltés során!");
        }

        return res.json();
    }

    const {
        data:randomusers,
        isLoading,
        error
    }=useQuery({
        queryKey:['randomusers'],
        queryFn:fetchRandomUsers
    });

    if(isLoading){
        <p>Loading...</p>
    }
    if(error){
        <p>{error.message}</p>
    }


  return (
    <div>
        <h1 className='text-2xl font-bold text-green-700 m-5'>Randomusers</h1>
        {
            randomusers?.results.map((user,i)=>(<p key={i}>{user.name.title} {user.name.first} {user.name.last}</p>))
        }
        {
            <p>{randomusers?.info.seed}</p>
        }

    </div>
  )
}

export default RandomUsers