import * as EmailValidator from 'email-validator';

import { UsernameMinLengthException } from "../exception/UsernameMinLengthException";
import { UsernameMaxLengthException } from "../exception/UsernameMaxLengthException";
import { UsernameOnlyOneSignCharacterException } from '../exception/UsernameOnlyOneSignCharacterException';
import { UsernameInvalidCharacterException } from "../exception/UsernameInvalidCharacterException";
import { EmailNoFormatException } from "../exception/EmailNoFormatException";
import { PasswordMinLengthException } from "../exception/PasswordMinLengthException";
import { PasswordMaxLengthException } from "../exception/PasswordMaxLengthException";
import { PasswordNoUpperLetterMinException } from "../exception/PasswordNoUpperLetterMinException";
import { PasswordNoLowerLetterMinException } from "../exception/PasswordNoLowerLetterMinException";
import { PasswordNoSignCharacterMinException } from "../exception/PasswordNoSignCharacterMinException";
import { PasswordNoNumberMinException } from "../exception/PasswordNoNumberMinException";
import { PasswordInvalidCharacterException } from '../exception/PasswordInvalidCharacterException';

export const usernameValidation = function(username){
    
    let minlength = /^.{4,}$/;
    let maxlength = /^.{0,18}$/;
    let sign = /^[^._\-]*[._\-]?[^._\-]*$/;
    let allowedCharacters = /^[a-zA-Z0-9._\-]+$/;

    if (!minlength.test(username)){
        throw new UsernameMinLengthException();
    }

    if (!maxlength.test(username)){
        throw new UsernameMaxLengthException();
    }

    if (!sign.test(username)){
        throw new UsernameOnlyOneSignCharacterException();
    }

    if (!allowedCharacters.test(username)){
        throw new UsernameInvalidCharacterException();
    }

}

export const emailValidation = function(email){
    
    if (!EmailValidator.validate(email)){
        throw new EmailNoFormatException();
    }

}

export const passwordValidation = function(password){
    
    let minlength = /^.{6,}$/;
    let maxlength = /^.{0,18}$/;
    let upperletter = /[A-Z]/;
    let lowerletter = /[a-z]/;
    let sign = /[.!@#$%&_\-]/;
    let num = /\d+/;
    let allowedCharacters = /^[a-zA-Z0-9.!@#$%&_\-]+$/;

    if (!minlength.test(password)){
        throw new PasswordMinLengthException();
    }

    if (!maxlength.test(password)){
        throw new PasswordMaxLengthException();
    }

    if (!upperletter.test(password)){
        throw new PasswordNoUpperLetterMinException();
    }

    if (!lowerletter.test(password)){
        throw new PasswordNoLowerLetterMinException();
    }

    if (!num.test(password)){
        throw new PasswordNoNumberMinException();
    }

    if (!sign.test(password)){
        throw new PasswordNoSignCharacterMinException();
    }

    if (!allowedCharacters.test(password)){
        throw new PasswordInvalidCharacterException();
    }

}