import React from "react";

import InputForm from "../../component/form/InputForm";
import ButtonForm from "../../component/form/ButtonForm";
import LogoForm from "../../component/form/LogoForm";
import SocialMediaIcon from "../../component/form/SocialMediaIcon";

import "bootstrap/dist/css/bootstrap.min.css";

function LoginView() {
  return (
    <div>
      <LogoForm size={128}></LogoForm>
      <form>
        <InputForm type="text" icon="user" placeholder="Usuario" />
        <InputForm type="email" icon="email" placeholder="Correo Electronico" />
        <InputForm type="password" icon="password" placeholder="Contraseña" />
        <ButtonForm text="Registrar Usuario" />
      </form>
      <div>
        <SocialMediaIcon></SocialMediaIcon>
        <SocialMediaIcon></SocialMediaIcon>
      </div>
      <ButtonForm text="Iniciar Sesion" />
    </div>
  );
}

export default LoginView;
