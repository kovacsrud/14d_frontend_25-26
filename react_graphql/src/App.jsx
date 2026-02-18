import BooksGQL from "./components/BooksGQL";
import AuthorsGQL from "./components/AuthorsGQL";

function App() {


  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-green-900">React Query</h1>
      <BooksGQL />
      <AuthorsGQL />
      
    </div>
     
  )
}

export default App
