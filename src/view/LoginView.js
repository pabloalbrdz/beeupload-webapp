import React, { useState } from "react";

import InputForm from "../component/form/InputForm";
import ButtonForm from "../component/form/ButtonForm";
import LogoForm from "../component/form/LogoForm";
import AlertForm from "../component/form/AlertForm";

import { userLogin } from "../controller/UserController";

import "bootstrap/dist/css/bootstrap.min.css";

function LoginView({loginSuccess}) {

  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const [loginState, setLoginState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});

  function onchangeUserInput(e){
    setUserInput(e.target.value);
  };

  function onchangePasswordInput(e){
    setPasswordInput(e.target.value);
  };

  async function onClickButton(e){
    e.preventDefault();
    let response = await userLogin(userInput, passwordInput);
    if (response.status == 200){
      setLoginState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Logeado con exito"});
      setTimeout(function(){
        loginSuccess(response.status);
      }, 5000);
    }else{
      setLoginState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data});
    }
  };

  return (
    <div>
      <LogoForm size={128}></LogoForm>
      <form>
        <AlertForm visible={loginState.visible} state={loginState.state} message={loginState.message}></AlertForm>
        <InputForm type="text" icon="user" placeholder="Usuario" onChange={onchangeUserInput} />
        <InputForm type="password" icon="password" placeholder="Contraseña" onChange={onchangePasswordInput} />
        <ButtonForm text="Iniciar Sesion" onClick={onClickButton} />
      </form>
    </div>
  );
}

export default LoginView;
