import * as EmailValidator from 'email-validator';

import { UsernameMinLengthException } from "../exception/UsernameMinLengthException";
import { UsernameMaxLengthException } from "../exception/UsernameMaxLengthException";
import { EmailNoFormatException } from "../exception/EmailNoFormatException";
import { PasswordMinLengthException } from "../exception/PasswordMinLengthException";
import { PasswordMaxLengthException } from "../exception/PasswordMaxLengthException";
import { PasswordNoUpperLetterMinException } from "../exception/PasswordNoUpperLetterMinException";
import { PasswordNoLowerLetterMinException } from "../exception/PasswordNoLowerLetterMinException";
import { PasswordNoSignCharacterMinException } from "../exception/PasswordNoSignCharacterMinException";
import { PasswordNoNumberMinException } from "../exception/PasswordNoNumberMinException";

export const usernameValidation = function(password){
    
    let minlength = /^.{4,}$/;
    let maxlength = /^.{0,18}$/;

    if (!minlength.test(password)){
        throw new UsernameMinLengthException();
    }

    if (!maxlength.test(password)){
        throw new UsernameMaxLengthException();
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
    let sign = /[.!@#$%&*]/;
    let num = /\d+/;

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

}