import axios from "axios";

import apiSettings from "../settings/apiSettings";

import { loginValidation } from "../validation/LoginValidation";
import { emailValidation, passwordValidation, usernameValidation } from "../validation/SignUpValidation";
import { IncorrectActualUsernameException } from "../exception/IncorrectActualUsernameException";

export const UserModel = {

  async login(inputUsername, inputPassword) {
    try {
      loginValidation(inputUsername, inputPassword);
      const response = await axios.get(
        `${apiSettings.USER_API}/login/${inputUsername}/${inputPassword}`,
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
  }


};
