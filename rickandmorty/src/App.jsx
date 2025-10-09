import Main from "./components/Main";
import Menu from "./components/Menu";
import Characters from "./components/Characters";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  

  return (
   
      <div>
        <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        </BrowserRouter>
       
      </div>
  )
}

export default App
