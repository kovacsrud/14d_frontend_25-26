import Main from "./components/Main";
import Megyek from "./components/Megyek";
import Jogallasok from "./components/Jogallasok";
import Telepulesek from "./components/Telepulesek";

import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";

function App() {
  

  return (
   
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/megyek" element={<Megyek />} />
          <Route path="/jogallasok" element={<Jogallasok />} />
          <Route path="/telepulesek" element={<Telepulesek />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
        </BrowserRouter>
        
      </div>
  )
}

export default App
