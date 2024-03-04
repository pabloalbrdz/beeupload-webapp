import { FileServerModel } from "../model/FileServerModel";
import { UserModel } from "../model/UserModel"

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
                let response2 = await FileServerModel.createUserFolder(response.data.id);
                if (response2 == 200){
                    setSignUpState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Registrado con exito"});
                    setTimeout(function(){
                        window.location.href = window.location.href;
                    }, 5000); 
                }
            }else{
                setSignUpState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data});
            }
        }catch(error){
            setSignUpState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});   
        }
    },

    async getUsername(userId){
        try{
            let response = await UserModel.getUsername(userId);
            return response;
        }catch(error){
            return "null";
        }
    },
    
    async changeUsername(userId, lastUsername, newUsername, setChangeUsernameState){
        try{
            let response = await UserModel.changeUsername(userId, lastUsername, newUsername);
            if (response.status == 200){
                setChangeUsernameState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Nombre de usuario modificado con exito"});
                return true;
            }else{
                setChangeUsernameState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
            }
        }catch(error){
            setChangeUsernameState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;
        }
    },

    async changeEmail(userId, lastEmail, newEmail, setChangeEmailState){
        try{
            let response = await UserModel.changeEmail(userId, lastEmail, newEmail);
            if (response.status == 200){
                setChangeEmailState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Correo electronico modificado con exito"});
                return true;
            }else{
                setChangeEmailState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
            }
        }catch(error){
            setChangeEmailState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;
        }
    },

    async changePassword(userId, lastPassword, newPassword, setChangePasswordState){
        try{
            let response = await UserModel.changePassword(userId, lastPassword, newPassword);
            if (response.status == 200){
                setChangePasswordState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Contraseña modificada con exito"});
                return true;
            }else{
                setChangePasswordState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
            }
        }catch(error){
            setChangePasswordState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;
        }
    }

}