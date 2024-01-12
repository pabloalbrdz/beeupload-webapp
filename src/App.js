import './App.css';

import { CgBee } from "react-icons/cg";
import InputForm from './component/form/InputForm';
import ButtonForm from './component/form/ButtonForm';
import TitleAnimatedForm from './component/form/TitleAnimatedForm';
import TextAnimatedForm from './component/form/TextAnimatedForm';
import BackgroundAnimatedForm from './component/form/BackgroundAnimatedForm';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BackgroundAnimatedForm></BackgroundAnimatedForm>
      <div className="d-flex flex-column min-vh-100 align-items-center justify-content-center">
        <div className='container'>
          <div className='row min-vh-100 align-items-center justify-content-center'>
            <div className='col-7 d-none d-md-flex flex-column'>
              {/* <TitleAnimatedForm text="Prueba ..."/> */}
              <TextAnimatedForm normalWord="Prueba " keyWords={["hola", "prueba", "buenas", "adios"]}></TextAnimatedForm>
              <TextAnimatedForm normalWord="Prueba " keyWords={["hola", "prueba", "buenas", "adios"]}></TextAnimatedForm>
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
      </div>
    </div>
  );
}

export default App;
