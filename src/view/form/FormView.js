import React from "react";

import TextAnimatedForm from "../../component/form/TextAnimatedForm";
import BackgroundAnimatedForm from "../../component/form/BackgroundAnimatedForm";

import LoginView from "./LoginView";
import SignUpView from "./SignUpView";

import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
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
                  <SignUpView></SignUpView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
