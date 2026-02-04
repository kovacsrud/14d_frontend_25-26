import {useQuery} from '@tanstack/react-query'

function Users() {

    const fetchUsers=async ()=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/users');
        if(!res.ok){
            throw new Error("Hiba a letöltés során!");
        }

        return res.json();
    }

    const {
        data:users,
        isLoading,
        error
    }=useQuery({
        queryKey:['users'],
        queryFn:fetchUsers,
        staleTime:5*60*1000, //érvényesség, 5 perc
        refetchOnWindowFocus:false
    });

    if(isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error.message}</p>
    }


  return (
    <div>
        <h1 className='text-2xl font-bold text-green-700 m-5'>Users</h1>
        {
            users?.map((user)=>(<p key={user.id}>{user.name}</p>))
        }
    </div>
  )
}

export default Users