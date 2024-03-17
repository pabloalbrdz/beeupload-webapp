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
                if (response2.status == 200){
                    setSignUpState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Registrado con exito"});
                    setTimeout(function(){
                        window.location.href = window.location.href;
                    }, 5000); 
                }else{
                    setSignUpState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response2.data});
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
    },

    getProfilePic(userId){
        try{
            return UserModel.getProfilePic(userId);
        }catch(error){
            return "";
        }
    },

    async changeProfilePic(userId, newImgPic, setChangeImageState){
        try{
            let response = await UserModel.changeProfilePic(userId, newImgPic);
            if (response.status == 200){
                setChangeImageState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Imagen modificada con exito"});
                return true;
            }else{
                setChangeImageState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
            }
        }catch(error){
            setChangeImageState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;
        }
    },

    async deleteAllUserDocs(userId, setDocDeleteState){
        try{
            let response = await FileServerModel.deleteAllUserDocuments(userId);
            if (response.status == 200){
                let response2 = await UserModel.deleteAllUserDocuments(userId);
                if (response2.status == 200){
                    setDocDeleteState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Eliminados todos los documentos"}); 
                    return true;
                }else{
                    setDocDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                    return false;
                }
            }else{
                setDocDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
        }
        }catch(error){
            setDocDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;  
        }
    },

    async deleteAllUserMusic(userId, setMusicDeleteState){
        try{
            let response = await FileServerModel.deleteAllUserMusic(userId);
            if (response.status == 200){
                let response2 = await UserModel.deleteAllUserMusic(userId);
                if (response2.status == 200){
                    setMusicDeleteState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Eliminadas todas las canciones"}); 
                    return true;
                }else{
                    setMusicDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                    return false;
                }
            }else{
                setMusicDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
        }
        }catch(error){
            setMusicDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;  
        }
    },

    async deleteAllUserPhotos(userId, setImageDeleteState){
        try{
            let response = await FileServerModel.deleteAllUserImages(userId);
            if (response.status == 200){
                let response2 = await UserModel.deleteAllUserImages(userId);
                if (response2.status == 200){
                    setImageDeleteState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Eliminadas todas las imagenes"}); 
                    return true;
                }else{
                    setImageDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                    return false;
                }
            }else{
                setImageDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
        }
        }catch(error){
            setImageDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;  
        }
    },

    async deleteAllUserVideos(userId, setVideoDeleteState){
        try{
            let response = await FileServerModel.deleteAllUserVideos(userId);
            if (response.status == 200){
                let response2 = await UserModel.deleteAllUserVideos(userId);
                if (response2.status == 200){
                    setVideoDeleteState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Eliminados todos los videos"}); 
                    return true;
                }else{
                    setVideoDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                    return false;
                }
            }else{
                setVideoDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
        }
        }catch(error){
            setVideoDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;  
        }
    },

    async deleteAllUserFiles(userId, setFileDeleteState){
        try{
            let response = await FileServerModel.deleteAllUserFiles(userId);
            if (response.status == 200){
                let response2 = await UserController.deleteAllUserDocs(userId, setFileDeleteState);
                let response3 = await UserController.deleteAllUserMusic(userId, setFileDeleteState);
                let response4 = await UserController.deleteAllUserPhotos(userId, setFileDeleteState);
                let response5 = await UserController.deleteAllUserVideos(userId, setFileDeleteState);
                setFileDeleteState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Eliminados todos los ficheros"}); 
                return true;
            }else{
                setFileDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
            }
        }catch(error){
            setFileDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;  
        }
    },

    async deleteUser(userId, setUserDeleteState){
        try{
            let response = await UserModel.deleteUser(userId);
            if (response.status == 200){
                let response2 = await FileServerModel.deleteUserFolder(userId);
                if (response2.status == 200){
                    setUserDeleteState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Usuario eliminado"}); 
                    sessionStorage.removeItem("session");
                    window.location.href = window.location.href;
                    return true;
                }
            }else{
                setUserDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
            }
        }catch(error){
            setUserDeleteState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message}); 
            return false;
        }
    }
    

}