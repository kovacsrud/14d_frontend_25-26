import { UserProvider } from "./context/UserContext";
import { ImageProvider } from "./context/ImageContext";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Register from "./components/Register";
import Vedett from "./components/Vedett";
import Images from "./components/Images";
import ImageUpload from "./components/ImageUpload";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  

  return (
   
      <div>
        <UserProvider>
          <ImageProvider>
          <BrowserRouter>
            <Menu />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/vedett" element={<Vedett />} />
              <Route path="/images" element={<Images />} />
              <Route path="/imageupload" element={<ImageUpload />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
          </ImageProvider>
        </UserProvider>
        
      </div>
  )
}

export default App
