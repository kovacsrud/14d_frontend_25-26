import Menu from './components/Menu';
import Main from './components/Main';
import Kutyanevek from './components/Kutyanevek';
import Kutyafajtak from './components/Kutyafajtak';
import Kutyak from './components/Kutyak';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import { KutyaProvider } from './context/KutyaContext';
import KutyanevForm from './components/Forms/KutyanevForm';
import KutyafajtaForm from './components/Forms/KutyafajtaForm';
import KutyaForm from './components/Forms/KutyaForm';

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
            <Route path='/kutyaform' element={<KutyaForm />} />
            <Route path='/kutyanevform' element={<KutyanevForm /> } />
            <Route path='/kutyafajtaform' element={<KutyafajtaForm />} />
            <Route path='*' element={<Navigate to={"/"} />} />

          </Routes>
          </BrowserRouter>
        </KutyaProvider>
        
      </div>
  )
}

export default App
