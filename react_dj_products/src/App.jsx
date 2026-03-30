import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Products from "./components/Products";

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {


  return (
    <div>
      <Header szoveg="Dummy.Inc" />
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
