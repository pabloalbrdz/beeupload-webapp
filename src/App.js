import './App.css';

import { CgBee } from "react-icons/cg";
import InputForm from './component/InputForm';
import Footer from './component/Footer';
import ButtonForm from './component/ButtonForm';
import TextAnimatedForm from './component/TextAnimatedForm';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column min-vh-100 align-items-center justify-content-center">
        <div className='container'>
          <div className='row mt-5 align-items-center'>
            <div className='col-8'>
              <TextAnimatedForm text="Prueba ..."></TextAnimatedForm>
            </div>
            <div className='col text-center'>
              <CgBee className='app-icon' size={128}/>
              <InputForm type="text" placeholder="Usuario"></InputForm>
              <InputForm type="password" placeholder="Contraseña"></InputForm>
              <ButtonForm text="Iniciar Sesion"></ButtonForm>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
