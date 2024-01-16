import './App.css';

import InputForm from './component/form/InputForm';
import ButtonForm from './component/form/ButtonForm';
import TextAnimatedForm from './component/form/TextAnimatedForm';
import BackgroundAnimatedForm from './component/form/BackgroundAnimatedForm';
import LogoForm from './component/form/LogoForm';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BackgroundAnimatedForm></BackgroundAnimatedForm>
      <div className="d-flex flex-column min-vh-100 align-items-center justify-content-center">
        <div className='container'>
          <div className='row min-vh-100 align-items-center justify-content-center'>
            <div className='col-7 d-none d-md-flex flex-column'>
              <TextAnimatedForm normalWord="Prueba " keyWords={["texto", "texto2", "texto3", "texto4", "texto5"]}></TextAnimatedForm>
            </div>
            <div className='col text-center'>
              <div className='mt-5'>
                <LogoForm size={128}></LogoForm>
                <InputForm type="text" icon="user" placeholder="Usuario"/>
                {/* <InputForm type="email" icon="email" placeholder="Correo Electronico"/> */}
                <InputForm type="password" icon="password" placeholder="Contraseña"/>
                {/* <InputForm type="password" icon="password" placeholder="Repetir Contraseña"/> */}
                <ButtonForm text="Iniciar Sesion"/>
                <ButtonForm text="Registrar Usuario"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
