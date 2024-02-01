import axios from "axios";

export const userLogin = async (inputUsername, inputPassword) => {
  try {
    const response = await axios.get(
      "http://localhost:8090/api/user/login/"+inputUsername+"/"+inputPassword,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return {"status": response.status, "data": response.data};
  } catch (error) {
    return {"status": error.response.status, "data": error.response.data};
  }
};

export const userSignUp = async (inputUsername, inputEmail, inputPassword) => {
  try {
    const response = await axios.post(
      "http://localhost:8090/api/user/signup",
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
    return {"status": error.response.status, "data": error.response.data};
  }
};

