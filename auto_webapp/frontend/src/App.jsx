import Autok from './components/Autok';
import Main from './components/Main';
import Menu from './components/Menu';
import UjAuto from './components/UjAuto';

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  

  return (
   
      <div>
        <BrowserRouter>
         <Menu />
         <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/autok' element={<Autok />} />
          <Route path='/ujauto' element={<UjAuto />} />
          <Route path='*' element={<Navigate to="/" />} />

         </Routes>
        </BrowserRouter>
        
      </div>
  )
}

export default App
