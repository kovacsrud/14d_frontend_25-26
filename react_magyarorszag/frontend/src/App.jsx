import Main from "./components/Main";
import Megyek from "./components/Megyek";
import Jogallasok from "./components/Jogallasok";
import Telepulesek from "./components/Telepulesek";
import TelepulesAdatok from "./components/TelepulesAdatok";
import { TelepulesProvider } from "./context/TelepulesContext";


import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { MegyeProvider } from "./context/MegyeContext";

function App() {
  

  return (
   
      <div>
        <MegyeProvider>
        <TelepulesProvider>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/megyek" element={<Megyek />} />
                <Route path="/jogallasok" element={<Jogallasok />} />
                <Route path="/telepulesek" element={<Telepulesek />} />
                <Route path="/telepulesadatok" element={<TelepulesAdatok />} />
                <Route path="*" element={<Navigate to="/" />} />

            </Routes>
          </BrowserRouter>
        </TelepulesProvider>
        </MegyeProvider>
        
      </div>
  )
}

export default App
