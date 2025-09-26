import Menu from "./components/Menu";
import Main from "./components/Main";
import Products from "./components/Products";

import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  

  return (
   
      <div>
        <Router>
          <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Navigate to={'/'} />} />

          </Routes>

        </Router>        
      </div>
  )
}

export default App
