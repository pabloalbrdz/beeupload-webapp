import React, { useState } from "react";

import { WindowController } from "../controller/WindowController";

import TextAnimatedForm from "../component/form/TextAnimatedForm";
import BackgroundAnimatedForm from "../component/form/BackgroundAnimatedForm";
import ButtonForm from "../component/form/ButtonForm";
import TextDescriptionForm from "../component/form/TextDescriptionForm";

import LoginView from "../view/form/LoginView";
import SignUpView from "../view/form/SignUpView";

import "bootstrap/dist/css/bootstrap.min.css";

function FormPage({changePage}) {
  const [view, changeView] = useState(
    {
      "form": "login",
      "view": <LoginView changeView={() => WindowController.changeFormView("login", changeView)} changePage={changePage}></LoginView>,
      "buttonChange": "No tengo cuenta"
    }
  );
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
                  <ButtonForm text={view.buttonChange} onClick={() => WindowController.changeFormView(view.form, changeView, changePage)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default FormPage;
