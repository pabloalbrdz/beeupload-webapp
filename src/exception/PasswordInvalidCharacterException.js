export class PasswordInvalidCharacterException extends Error {
    constructor(){
        super("Error: La contraseña tiene caracteres no son validos. Validos: a-z A-Z 0-9 .!@#$%&_- ");
    }
}