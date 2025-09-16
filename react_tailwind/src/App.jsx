import Header from "./components/Header";
import Box from "./components/Box";
import Posts from "./components/Posts";

function App() {
  

  return (
   
      <div>
        <Header headerText="Tailwind+React" />
        <div className="flex flex-wrap flex-row justify-center">
          <Box start={5} />
          <Box start={10} />
          <Box start={15} />          
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          <Box start={5} />
          <Box start={10} />
          <Box start={15} />
          <Box start={20} />
        </div>
        <Posts />
      
        
      </div>
  )
}

export default App
