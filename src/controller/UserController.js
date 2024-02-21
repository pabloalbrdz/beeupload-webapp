import { UserModel } from "../model/UserModel"
import { FileServerModel } from "../model/FileServerModel";

export const UserController = {

    async login(userInput, passwordInput, setLoginState){
        try{
            let response = await UserModel.login(userInput, passwordInput);
            if (response.status == 200){
                setLoginState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Logeado con exito"});
                setTimeout(function(){
                    window.sessionStorage.setItem("session", JSON.stringify(response.data));
                    window.location.href = window.location.href;
                }, 5000);
            }else{
                setLoginState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data});
            }
        }catch(error){
            setLoginState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});   
        }
    },

    async signUp(userInput, emailInput, passwordInput, setSignUpState){
        try{
            let response = await UserModel.signUp(userInput, emailInput, passwordInput);
            if (response.status == 200){
                await FileServerModel.createUserFolder(response.data.id);
                setSignUpState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Registrado con exito"});
                setTimeout(function(){
                    window.location.href = window.location.href;
                }, 5000); 
            }else{
                setSignUpState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data});
            }
        }catch(error){
            setSignUpState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});   
        }
    },

    async getUserProfilePic(userId, setUserProfilePic){
        try{
            await FileServerModel.getUserProfilePic(userId, setUserProfilePic);
        }catch(error){
            setUserProfilePic("");
        }
    }

}