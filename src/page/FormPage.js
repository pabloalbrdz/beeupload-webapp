import React, { useState } from "react";

import TextAnimatedForm from "../component/form/TextAnimatedForm";
import BackgroundAnimatedForm from "../component/form/BackgroundAnimatedForm";
import ButtonForm from "../component/form/ButtonForm";

import LoginView from "../view/form/LoginView";
import SignUpView from "../view/form/SignUpView";

import "bootstrap/dist/css/bootstrap.min.css";

function FormPage() {
  const [view, changeView] = useState(
    {
      "form": "login",
      "view": <LoginView></LoginView>
    }
  );
  function goToSignUpView(){
    changeView(
      {
        "form": "signup",
        "view": <SignUpView></SignUpView>
      }
    );
  }
  function goToLoginView(){
    changeView(
      {
        "form": "login",
        "view": <LoginView></LoginView>
      }      
    );
  }
  return (
    <div>
      <BackgroundAnimatedForm></BackgroundAnimatedForm>
      <div className="d-flex flex-column min-vh-100 align-items-center justify-content-center">
        <div className="container">
          <div className="row min-vh-100 align-items-center justify-content-center align-center">
            <div className="col-7 d-none d-md-flex flex-column">
              <TextAnimatedForm normalWord="Prueba " keyWords={["texto", "texto2", "texto3", "texto4", "texto5"]}></TextAnimatedForm>
            </div>
            <div className="col text-center">
              <div className="mt-5">
                  {view.view}
                  <ButtonForm text={view.form == "login" ? "Registrar Usuario" : "Iniciar Sesion"} onClick={view.form == "login" ? goToSignUpView : goToLoginView}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
