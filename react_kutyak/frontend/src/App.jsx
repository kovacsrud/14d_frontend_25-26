import Menu from './components/Menu';
import Main from './components/Main';
import Kutyanevek from './components/Kutyanevek';
import Kutyafajtak from './components/Kutyafajtak';
import Kutyak from './components/Kutyak';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import { KutyaProvider } from './context/KutyaContext';

function App() {
  
  return (
   
      <div>
        <KutyaProvider>
          <BrowserRouter>
          <Menu />
          <Routes>
            
            <Route path='/' element={<Main />} />
            <Route path='/kutyanevek' element={<Kutyanevek />} />
            <Route path='/kutyafajtak' element={<Kutyafajtak />} />
            <Route path='/kutyak' element={<Kutyak />} />
            <Route path='*' element={<Navigate to={"/"} />} />

          </Routes>
          </BrowserRouter>
        </KutyaProvider>
        
      </div>
  )
}

export default App
