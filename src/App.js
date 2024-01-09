import './App.css';

import { CgBee } from "react-icons/cg";
import InputForm from './component/InputForm';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column min-vh-100 align-items-center justify-content-center">
        <CgBee className='app-icon' size={128}/>
        <InputForm type="text" placeholder="Usuario"></InputForm>
        <InputForm type="password" placeholder="Contraseña"></InputForm>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
