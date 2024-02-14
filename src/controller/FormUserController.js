import LoginView from "../view/form/LoginView";
import SignUpView from "../view/form/SignUpView";

export const FormUserController = {

    changeFormView(view, changeView){
        if (view == "login"){
            changeView(
                {
                    "form": "signup",
                    "view": <SignUpView changeView={() => FormUserController.changeFormView("signup", changeView)}></SignUpView>,
                    "buttonChange": "Ya tengo cuenta"
                }
            );
        }else if(view == "signup"){
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