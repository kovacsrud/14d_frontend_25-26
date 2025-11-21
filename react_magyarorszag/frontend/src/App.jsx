import Main from "./components/Main";
import Megyek from "./components/Megyek";
import Jogallasok from "./components/Jogallasok";
import Telepulesek from "./components/Telepulesek";
import TelepulesAdatok from "./components/TelepulesAdatok";
import MegyeTelepulesek from "./components/MegyeTelepulesek";

import { TelepulesProvider } from "./context/TelepulesContext";
import { MegyeProvider } from "./context/MegyeContext";
import { JogallasProvider } from "./context/JogallasContext";

import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";


function App() {
  

  return (
   
      <div>
        <JogallasProvider>
        <MegyeProvider>
        <TelepulesProvider>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/megyek" element={<Megyek />} />
                <Route path="/jogallasok" element={<Jogallasok />} />
                <Route path="/telepulesek" element={<Telepulesek />} />
                <Route path="/telepulesadatok" element={<TelepulesAdatok />} />
                <Route path="/megyetelepulesek" element={<MegyeTelepulesek />} />
                <Route path="*" element={<Navigate to="/" />} />

            </Routes>
          </BrowserRouter>
        </TelepulesProvider>
        </MegyeProvider>
        </JogallasProvider>
        
      </div>
  )
}

export default App
