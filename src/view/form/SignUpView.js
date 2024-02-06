import React, { useState } from "react";

import InputForm from "../../component/form/InputForm";
import ButtonForm from "../../component/form/ButtonForm";
import LogoForm from "../../component/form/LogoForm";
import AlertForm from "../../component/form/AlertForm";

import { userSignUp } from "../../controller/UserController";
import { usernameValidation, emailValidation, passwordValidation } from "../../validation/SignUpValidation";

import "bootstrap/dist/css/bootstrap.min.css";

function SignUpView({signUpSuccess}) {

  const [userInput, setUserInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const [signupState, setSignupState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});

  function onchangeUserInput(e){
    setUserInput(e.target.value);
  };

  function onchangeEmailInput(e){
    setEmailInput(e.target.value);
  };

  function onchangePasswordInput(e){
    setPasswordInput(e.target.value);
  };

  async function onClickButton(e){
    e.preventDefault();
    try{
      usernameValidation(userInput);
      emailValidation(emailInput);
      passwordValidation(passwordInput);
      let response = await userSignUp(userInput, emailInput, passwordInput);
      if (response.status == 200){
        setSignupState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Registrado con exito"});
        setTimeout(function(){
          signUpSuccess(response.status);
        }, 2000);
      }else{
        setSignupState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data});
      }
    }catch(error){
      setSignupState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});
    }
  };

  return (
    <div>
      <LogoForm size={128}></LogoForm>
      <form>
        <AlertForm visible={signupState.visible} state={signupState.state} message={signupState.message}></AlertForm>
        <InputForm type="text" icon="user" placeholder="Usuario" onChange={onchangeUserInput} />
        <InputForm type="text" icon="email" placeholder="Correo Electronico" onChange={onchangeEmailInput} />
        <InputForm type="password" icon="password" placeholder="Contraseña" onChange={onchangePasswordInput} />
        <ButtonForm text="Registrar Usuario" onClick={onClickButton} />
      </form>
    </div>
  );
  
}

export default SignUpView;