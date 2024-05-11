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
    
    async changeUsername(userId, lastUsername, newUsername, setChangeUsernameState, token){
        try{
            let response = await UserModel.changeUsername(userId, lastUsername, newUsername, token);
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

    async changeEmail(userId, lastEmail, newEmail, setChangeEmailState, token){
        try{
            let response = await UserModel.changeEmail(userId, lastEmail, newEmail, token);
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

    async changePassword(userId, lastPassword, newPassword, setChangePasswordState, token){
        try{
            let response = await UserModel.changePassword(userId, lastPassword, newPassword, token);
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

    async uploadDocument(userId, docName, docFile, setUploadDocumentState, token){
        try{
            let response = await UserModel.uploadDocument(userId, docName, token);
            if (response.status == 200){
                let response2 = await FileServerModel.uploadDocument(userId, response.data.id, docFile, token);
                if (response2.status == 200){
                    let response3 = await UserModel.updateDocumentPath(response.data.id, `${JSON.parse(sessionStorage.getItem("session")).id}\\document\\${response.data.id}.pdf`, token);
                    if (response3.status == 200){
                        setUploadDocumentState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Documento subido con exito"});
                        return true;
                    }else{
                        setUploadDocumentState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response3.data});  
                        return false;
                    }
                }else{
                    setUploadDocumentState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response2.data});  
                    return false;
                }
            }else{
                setUploadDocumentState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data});  
                return false;
            }
        }catch(error){
            setUploadDocumentState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false; 
        }
    },

    async updateDocument(docId, newDocName, setUpdateDocumentState, token){
        try{
            let response = await UserModel.updateDocument(docId, newDocName, token);
            if (response.status == 200){
                setUpdateDocumentState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Documento modificado con exito"});
                return true;
            }else{
                setUpdateDocumentState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data});  
                return false;
            }
        }catch(error){
            setUpdateDocumentState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false; 
        }
    },

    async getAllUserDocuments(userId, token){
        try{
            let response = await UserModel.getAllUserDocument(userId, token);
            if (response.status == 200){
                let files = new Array();
                for (let file of response.data){
                    if (file.path.length > 0){
                        files.push(file);
                    }
                }
                return files;
            }
        }catch(error){
            return [];
        }
    },

    async uploadMusic(userId, musicName, musicArtist, musicFile, setUploadMusicState, token){
        try{
            let response = await UserModel.uploadMusic(userId, musicName, musicArtist, token);
            if (response.status == 200){
                let response2 = await FileServerModel.uploadMusic(userId, response.data.id, musicFile, token);
                if (response2.status == 200){
                    let response3 = await UserModel.updateMusicPath(response.data.id, `${JSON.parse(sessionStorage.getItem("session")).id}\\music\\${response.data.id}.mp3`, token);
                    if (response3.status == 200){
                        setUploadMusicState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Música subida con éxito"});
                        return true;
                    }else{
                        setUploadMusicState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response3.data});  
                        return false;
                    }
                }else{
                    setUploadMusicState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response2.data});  
                    return false;
                }
            }else{
                setUploadMusicState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data});  
                return false;
            }
        }catch(error){
            setUploadMusicState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false; 
        }
    },

    async updateMusic(musicId, newMusicName, newMusicArtist, setUpdateMusicState, token){
        try{
            let response = await UserModel.updateMusic(musicId, newMusicName, newMusicArtist, token);
            if (response.status == 200){
                setUpdateMusicState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Música modificada con exito"});
                return true;
            }else{
                setUpdateMusicState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data});  
                return false;
            }
        }catch(error){
            setUpdateMusicState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false; 
        }
    },

    async getAllUserMusic(userId, token){
        try{
            let response = await UserModel.getAllUserMusic(userId, token);
            if (response.status == 200){
                let files = new Array();
                for (let file of response.data){
                    if (file.path.length > 0){
                        files.push(file);
                    }
                }
                return files;
            }
        }catch(error){
            return [];
        }
    },

    async uploadPhoto(userId, photoFile, photoExtension ,setUploadPhotoState, token){
        try{
            let response = await UserModel.uploadImage(userId, token);
            if (response.status == 200){
                let response2 = await FileServerModel.uploadImage(userId, response.data.id, photoFile, token);
                if (response2.status == 200){
                    let response3 = await UserModel.updateImagePath(response.data.id, `${JSON.parse(sessionStorage.getItem("session")).id}\\image\\${response.data.id}.${photoExtension}`, token);
                    if (response3.status == 200){
                        setUploadPhotoState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Foto subida con éxito"});
                        return true;
                    }else{
                        setUploadPhotoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response3.data});  
                        return false;
                    }
                }else{
                    setUploadPhotoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response2.data});  
                    return false;
                }
            }else{
                setUploadPhotoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data});  
                return false;
            }
        }catch(error){
            setUploadPhotoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false; 
        }
    },

    async getAllUserPhotos(userId, token){
        try{
            let response = await UserModel.getAllUserImage(userId, token);
            if (response.status == 200){
                let files = new Array();
                for (let file of response.data){
                    if (file.path.length > 0){
                        files.push(file);
                    }
                }
                return files;
            }
        }catch(error){
            return [];
        }
    },

    async uploadVideo(userId, videoName, videoFile, setUploadVideoState, token){
        try{
            let response = await UserModel.uploadVideo(userId, videoName, token);
            if (response.status == 200){
                let response2 = await FileServerModel.uploadVideo(userId, response.data.id, videoFile, token);
                if (response2.status == 200){
                    let response3 = await UserModel.updateVideoPath(response.data.id, `${JSON.parse(sessionStorage.getItem("session")).id}\\video\\${response.data.id}.mp4`, token);
                    if (response3.status == 200){
                        setUploadVideoState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Video subido con éxito"});
                        return true;
                    }else{
                        setUploadVideoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response3.data});  
                        return false;
                    }
                }else{
                    setUploadVideoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response2.data});  
                    return false;
                }
            }else{
                setUploadVideoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data});  
                return false;
            }
        }catch(error){
            setUploadVideoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false; 
        }
    },

    async updateVideo(videoId, newVideoName, setUpdateVideoState, token){
        try{
            let response = await UserModel.updateVideo(videoId, newVideoName, token);
            if (response.status == 200){
                setUpdateVideoState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Video modificado con exito"});
                return true;
            }else{
                setUpdateVideoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data});  
                return false;
            }
        }catch(error){
            setUpdateVideoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false; 
        }
    },

    async getAllUserVideos(userId, token){
        try{
            let response = await UserModel.getAllUserVideo(userId, token);
            if (response.status == 200){
                let files = new Array();
                for (let file of response.data){
                    if (file.path.length > 0){
                        files.push(file);
                    }
                }
                return files;
            }
        }catch(error){
            return [];
        }
    },

    async deleteUserDocument(userId, docId, setDeleteDocumentState, token){
        try{
            let response = await FileServerModel.deleteUserDocument(userId, docId, token);
            if (response.status == 200){
                let response2 = await UserModel.deleteUserDocument(docId, token);
                if (response2.status == 200){
                    setDeleteDocumentState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Documento eliminado"}); 
                    return true;
                }else{
                    setDeleteDocumentState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                    return false;
                }
            }else{
                setDeleteDocumentState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
            }
        }catch(error){
            setDeleteDocumentState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;  
        }
    },
  
    async deleteUserMusic(userId, musicId, setDeleteMusicState, token){
        try{
            let response = await FileServerModel.deleteUserMusic(userId, musicId, token);
            if (response.status == 200){
                let response2 = await UserModel.deleteUserMusic(musicId, token);
                if (response2.status == 200){
                    setDeleteMusicState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Musica eliminada"}); 
                    return true;
                }else{
                    setDeleteMusicState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                    return false;
                }
            }else{
                setDeleteMusicState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
            }
        }catch(error){
            setDeleteMusicState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;  
        }      
    },
  
    async deleteUserImage(userId, imgId, setDeletePhotoState, token){
        try{
            let response = await FileServerModel.deleteUserImage(userId, imgId, token);
            if (response.status == 200){
                let response2 = await UserModel.deleteUserImage(imgId, token);
                if (response2.status == 200){
                    setDeletePhotoState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Imagen eliminada"}); 
                    return true;
                }else{
                    setDeletePhotoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                    return false;
                }
            }else{
                setDeletePhotoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
            }
        }catch(error){
            setDeletePhotoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;  
        }  
    },
  
    async deleteUserVideo(userId, videoId, setDeleteVideoState, token){
        try{
            let response = await FileServerModel.deleteUserVideo(userId, videoId, token);
            if (response.status == 200){
                let response2 = await UserModel.deleteUserVideo(videoId, token);
                if (response2.status == 200){
                    setDeleteVideoState({"visible": "alert-form-visible", "state": "alert-form-ok", "message": "Video eliminado"}); 
                    return true;
                }else{
                    setDeleteVideoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                    return false;
                }
            }else{
                setDeleteVideoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": response.data}); 
                return false;
            }
        }catch(error){
            setDeleteVideoState({"visible": "alert-form-visible", "state": "alert-form-error", "message": error.message});  
            return false;  
        }
    },

    async deleteAllUserDocs(userId, setDocDeleteState, token){
        try{
            let response = await FileServerModel.deleteAllUserDocuments(userId, token);
            if (response.status == 200){
                let response2 = await UserModel.deleteAllUserDocuments(userId, token);
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

    async deleteAllUserMusic(userId, setMusicDeleteState, token){
        try{
            let response = await FileServerModel.deleteAllUserMusic(userId, token);
            if (response.status == 200){
                let response2 = await UserModel.deleteAllUserMusic(userId, token);
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

    async deleteAllUserPhotos(userId, setImageDeleteState, token){
        try{
            let response = await FileServerModel.deleteAllUserImages(userId, token);
            if (response.status == 200){
                let response2 = await UserModel.deleteAllUserImages(userId, token);
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

    async deleteAllUserVideos(userId, setVideoDeleteState, token){
        try{
            let response = await FileServerModel.deleteAllUserVideos(userId, token);
            if (response.status == 200){
                let response2 = await UserModel.deleteAllUserVideos(userId, token);
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

    async deleteAllUserFiles(userId, setFileDeleteState, token){
        try{
            let response = await FileServerModel.deleteAllUserFiles(userId, token);
            if (response.status == 200){
                let response2 = await UserController.deleteAllUserDocs(userId, setFileDeleteState, token);
                let response3 = await UserController.deleteAllUserMusic(userId, setFileDeleteState, token);
                let response4 = await UserController.deleteAllUserPhotos(userId, setFileDeleteState, token);
                let response5 = await UserController.deleteAllUserVideos(userId, setFileDeleteState, token);
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

    async deleteUser(userId, setUserDeleteState, token){
        try{
            let response = await UserModel.deleteUser(userId, token);
            if (response.status == 200){
                let response2 = await FileServerModel.deleteUserFolder(userId, token);
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