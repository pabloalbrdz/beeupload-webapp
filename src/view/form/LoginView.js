import React, { useState } from "react";

import { UserController } from "../../controller/UserController";

import InputForm from "../../component/form/InputForm";
import ButtonForm from "../../component/form/ButtonForm";
import LogoForm from "../../component/form/LogoForm";
import AlertForm from "../../component/form/AlertForm";

import "bootstrap/dist/css/bootstrap.min.css";

function LoginView() {

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
    UserController.login(userInput, passwordInput, setLoginState);
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
