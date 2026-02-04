import Users from "./components/Users";
import Posts from "./components/Posts";
import RandomUsers from "./components/RandomUsers";

function App() {


  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-green-900">React Query</h1>
      <Users />
      <Posts />
      <RandomUsers />
      
    </div>
     
  )
}

export default App
