import './App.css';

import { CgBee } from "react-icons/cg";
import InputForm from './component/InputForm';
import Footer from './component/Footer';
import ButtonForm from './component/ButtonForm';
import TextForm from './component/TextForm';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column min-vh-100 align-items-center justify-content-center">
        <CgBee className='app-icon' size={128}/>
        <TextForm text="Upload ..."></TextForm>
        <InputForm type="text" placeholder="Usuario"></InputForm>
        <InputForm type="password" placeholder="Contraseña"></InputForm>
        <ButtonForm text="Iniciar Sesion"></ButtonForm>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
