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
            <div className='col-7 d-none d-md-flex'>
              <TextAnimatedForm text="Prueba ..."/>
            </div>
            <div className='col text-center'>
              <div className='mt-5'>
                <CgBee className='app-icon' size={128}/>
                <InputForm type="text" icon="user" placeholder="Usuario"/>
                <InputForm type="password" icon="password" placeholder="Contraseña"/>
                <ButtonForm text="Iniciar Sesion"/>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
