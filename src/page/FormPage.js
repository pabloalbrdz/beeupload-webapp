import React, { useState } from "react";

import TextAnimatedForm from "../component/form/TextAnimatedForm";
import BackgroundAnimatedForm from "../component/form/BackgroundAnimatedForm";
import ButtonForm from "../component/form/ButtonForm";
import TextDescriptionForm from "../component/form/TextDescriptionForm";

import LoginView from "../view/LoginView";
import SignUpView from "../view/SignUpView";

import "bootstrap/dist/css/bootstrap.min.css";

function FormPage({getLogin}) {
  const [view, changeView] = useState(
    {
      "form": "login",
      "view": <LoginView sendLogin={receiveSuccessLogin}></LoginView>
    }
  );
  
  function goToSignUpView(){
    changeView(
      {
        "form": "signup",
        "view": <SignUpView signUpSuccess={signUpSuccess}></SignUpView>
      }
    );
  };

  function goToLoginView(){
    changeView(
      {
        "form": "login",
        "view": <LoginView sendLogin={receiveSuccessLogin}></LoginView>
      }      
    );
  };

  function receiveSuccessLogin(response){
    getLogin(response.data);
  }
  
  function signUpSuccess(response){
    if (response == 200){
      goToLoginView();
    }
  };
  
  return (
    <div>
      <BackgroundAnimatedForm></BackgroundAnimatedForm>
      <div className="d-flex flex-column min-vh-100 align-items-center justify-content-center">
        <div className="container">
          <div className="row min-vh-100 align-items-center justify-content-center align-center">
            <div className="col-7 d-none d-md-flex flex-column">
            <TextAnimatedForm normalWord="You can * " keyWords={["upload your files", "read your docs", "listen to your music", "see your photos", "watch your videos"]}></TextAnimatedForm>
            <TextDescriptionForm text="*at the same time"></TextDescriptionForm>
            </div>
            <div className="col text-center">
              <div className="mt-5">
                  {view.view}
                  <ButtonForm text={view.form == "login" ? "No tengo cuenta" : "Ya tengo cuenta"} onClick={view.form == "login" ? goToSignUpView : goToLoginView}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
