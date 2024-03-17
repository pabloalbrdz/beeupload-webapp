import axios from "axios";

import apiSettings from "../settings/apiSettings";
import fileserverSettings from "../settings/fileserverSettings";

import { loginValidation } from "../validation/LoginValidation";
import { emailValidation, passwordValidation, usernameValidation } from "../validation/SignUpValidation";
import { fileValidation } from "../validation/FileValidation";
import { filenameValidation } from "../validation/FileNameValidation";
import { musicnameValidation } from "../validation/MusicNameValidation";
import { IncorrectActualUsernameException } from "../exception/IncorrectActualUsernameException";
import { IncorrectActualEmailException } from "../exception/IncorrectActualEmailException";
import { IncorrectActualPasswordException } from "../exception/IncorrectActualPasswordException";

export const UserModel = {

  async login(inputUsername, inputPassword) {
    try {
      loginValidation(inputUsername, inputPassword);
      const response = await axios.post(
        `${apiSettings.USER_API}/login`,
        {
          username: inputUsername,
          password: inputPassword
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    } catch (error) {
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },
  
  async signUp(inputUsername, inputEmail, inputPassword) {
    try {
      usernameValidation(inputUsername);
      emailValidation(inputEmail);
      passwordValidation(inputPassword);
      const response = await axios.post(
        `${apiSettings.USER_API}/signup`,
        {
          username: inputUsername,
          email: inputEmail,
          password: inputPassword
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    } catch (error) {
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"data": error.message};
      }
    }
  },

  async getUsername(userId){
    try{
      const response = await axios.get(
        `${apiSettings.USER_API}/getUserUsername/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    }catch(error){
      return "null";
    }
  },

  async changeUsername(userId, lastUsernameInput, newUsernameInput){
    try{
      usernameValidation(newUsernameInput);
      let lastUsername = await this.getUsername(userId);
      if (lastUsername != lastUsernameInput){
        throw new IncorrectActualUsernameException();
      }
      const response = await axios.put(
        `${apiSettings.USER_API}/updateUserUsername/${userId}/${newUsernameInput}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    } catch (error) {
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"data": error.message};
      }
    }
  },

  async getEmail(userId){
    try{
      const response = await axios.get(
        `${apiSettings.USER_API}/getUserEmail/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    }catch(error){
      return "null";
    }
  },

  async changeEmail(userId, lastEmailInput, newEmailInput){
    try{
      emailValidation(newEmailInput);
      let lastEmail = await this.getEmail(userId);
      if (lastEmail != lastEmailInput){
        throw new IncorrectActualEmailException();
      }
      const response = await axios.put(
        `${apiSettings.USER_API}/updateUserEmail/${userId}/${newEmailInput}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    } catch (error) {
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"data": error.message};
      }
    }
  },

  async checkUserPassword(userId, passwordInput){
    try{
      const response = await axios.get(
        `${apiSettings.USER_API}/checkUserPassword/${userId}/${passwordInput}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
          }
        }
      );
      if (!response.data){
        throw new IncorrectActualPasswordException();
      }
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"data": error.message};
      }
    }
  },

  async changePassword(userId, lastPasswordInput, newPasswordInput){
    try{
      passwordValidation(newPasswordInput);
      let lastPassword = await this.checkUserPassword(userId, lastPasswordInput);
      if (lastPassword.data == true){
        const response = await axios.put(
          `${apiSettings.USER_API}/updateUserPassword/${userId}/${newPasswordInput}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin' : '*'
            }
          }
        );
        return {"status": response.status, "data": response.data};
      }else{
        throw new IncorrectActualPasswordException();
      }
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"data": error.message};
      }
    }
  },

  getProfilePic(userId){
    try{
      return `${fileserverSettings.USER_FOLDER_ROUTE}/${userId}/profilepic.jpg`;
    }catch(error){
      return "";
    }
  },

  async changeProfilePic(userId, newImgPic){
    try{
      fileValidation(newImgPic);
      const response = await axios.put(
        `${fileserverSettings.USER_PROFILE}/changeUserProfilePic?userid=${userId}`,
        newImgPic,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
          },
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async uploadDocument(userId, docName){
    try{
      filenameValidation(docName);
      const response = await axios.post(
        `${apiSettings.DOCUMENT_API}/saveDocument`,
        {
          name: docName,
          path: "",
          userid: userId
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async updateDocumentPath(documentId, docPath){
    try{
      const response = await axios.post(
        `${apiSettings.DOCUMENT_API}/updateDocumentPath`,
        {
          id: documentId,
          path: docPath
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async uploadMusic(userId, musicName, musicArtist){
    try{
      musicnameValidation(musicName, musicArtist);
      const response = await axios.post(
        `${apiSettings.MUSIC_API}/saveMusic`,
        {
          name: musicName,
          artist: musicArtist,
          path: "",
          userid: userId
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async updateMusicPath(musicId, musicPath){
    try{
      const response = await axios.post(
        `${apiSettings.MUSIC_API}/updateMusicPath`,
        {
          id: musicId,
          path: musicPath
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async uploadImage(userId){
    try{
      const response = await axios.post(
        `${apiSettings.IMAGE_API}/saveImage`,
        {
          path: "",
          userid: userId
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async updateImagePath(imageId, imagePath){
    try{
      const response = await axios.post(
        `${apiSettings.IMAGE_API}/updateImagePath`,
        {
          id: imageId,
          path: imagePath
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async uploadVideo(userId, videoName){
    try{
      filenameValidation(videoName);
      const response = await axios.post(
        `${apiSettings.VIDEO_API}/saveVideo`,
        {
          name: videoName,
          path: "",
          userid: userId
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async updateVideoPath(videoId, videoPath){
    try{
      const response = await axios.post(
        `${apiSettings.VIDEO_API}/updateVideoPath`,
        {
          id: videoId,
          path: videoPath
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async deleteAllUserDocuments(userId){
    try{
      const response = await axios.delete(
        `${apiSettings.DOCUMENT_API}/deleteAllUserDocuments/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async deleteAllUserMusic(userId){
    try{
      const response = await axios.delete(
        `${apiSettings.MUSIC_API}/deleteAllUserMusic/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async deleteAllUserImages(userId){
    try{
      const response = await axios.delete(
        `${apiSettings.IMAGE_API}/deleteAllUserImages/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async deleteAllUserVideos(userId){
    try{
      const response = await axios.delete(
        `${apiSettings.VIDEO_API}/deleteAllUserVideos/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  },

  async deleteUser(userId){
    try{
      const response = await axios.delete(
        `${apiSettings.USER_API}/deleteUser/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return {"status": response.status, "data": response.data};
    }catch(error){
      if (error.response){
        return {"status": error.response.status, "data": error.response.data};
      }else{
        return {"status": 400, "data": error.message};
      }
    }
  }


};
