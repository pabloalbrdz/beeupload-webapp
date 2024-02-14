import LoginView from "../view/form/LoginView";
import SignUpView from "../view/form/SignUpView";

export const FormUserController = {

    changeFormView(view, changeView){
        if (view.form == "login"){
            changeView(
                {
                    "form": "signup",
                    "view": <SignUpView></SignUpView>,
                    "buttonChange": "Ya tengo cuenta"
                }
            );
        }else if(view.form == "signup"){
            changeView(
                {
                    "form": "login",
                    "view": <LoginView></LoginView>,
                    "buttonChange": "No tengo cuenta"
                }
            );
        }
    }

}