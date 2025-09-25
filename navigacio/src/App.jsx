import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Menu from './components/Menu';
import Posts from './components/Posts';
import Users from './components/Users';

function App() {
  

  return (
   
      <div>
        
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={ <Main />} />
            <Route path='/users' element={<Users />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>

        </BrowserRouter>
        
      </div>
  )
}

export default App
