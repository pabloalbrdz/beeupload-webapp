import axios from "axios";

import apiSettings from "../settings/apiSettings";

import { loginValidation } from "../validation/LoginValidation";
import { emailValidation, passwordValidation, usernameValidation } from "../validation/SignUpValidation";

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
  }

};
