import FormPage from "../page/FormPage";
import MainPage from "../page/MainPage";

import LoginView from "../view/form/LoginView";
import SignUpView from "../view/form/SignUpView";

export const WindowController = {

    changeFormView(view, changeView, changePage){
        console.log(view);
        if (view == "login"){
            changeView(
                {
                    "form": "signup",
                    "view": <SignUpView changeView={() => WindowController.changeFormView("signup", changeView)}></SignUpView>,
                    "buttonChange": "Ya tengo cuenta"
                }
            );
        }else if (view == "signup"){
            changeView(
                {
                    "form": "login",
                    "view": <LoginView changeView={() => WindowController.changeFormView("login", changeView)} changePage={changePage}></LoginView>,
                    "buttonChange": "No tengo cuenta"
                }
            );
        }
    },

    changePageView(page, changePage){
        if (page == "form"){
            changePage(
                {
                    "page": "main",
                    "view": <MainPage></MainPage>
                }
            );
        }else if (page == "main"){
            changePage(
                {
                    "page": "form",
                    "view": <FormPage changePage={() => WindowController.changePageView("form", changePage)}></FormPage>
                }
            );
        }
    }

}