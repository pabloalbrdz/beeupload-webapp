import React from "react";

import InputForm from "../../component/form/InputForm";
import ButtonForm from "../../component/form/ButtonForm";
import LogoForm from "../../component/form/LogoForm";

import "bootstrap/dist/css/bootstrap.min.css";

function LoginView() {
  return (
    <div>
      <LogoForm size={128}></LogoForm>
      <form>
        <InputForm type="text" icon="user" placeholder="Usuario" />
        <InputForm type="text" icon="email" placeholder="Correo Electronico" />
        <InputForm type="password" icon="password" placeholder="Contraseña" />
        <ButtonForm text="Registrar Usuario" />
      </form>
    </div>
  );
}

export default LoginView;
