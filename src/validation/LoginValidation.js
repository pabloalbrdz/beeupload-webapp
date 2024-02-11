import { InvalidUserException } from "../exception/InvalidUserException";

export const loginValidation = function(username, password){

    if (username.length == 0 || password.length == 0){
        throw new InvalidUserException();
    }

}