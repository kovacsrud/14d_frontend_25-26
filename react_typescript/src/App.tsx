import Header from "./components/Header"
import SubHeader from "./components/SubHeader"

function App() {
 

  return (
    <div>
      <h1 className="text-3xl text-center text-sky-800">React+TypeScript</h1>            
      <Header headerText="TypeScript H1" id={4} />
      <SubHeader>
         <p>Bekezdés 1.</p>
         <p>Bekezdés 2.</p>
      </SubHeader>
    </div>
  )
}

export default App
