export class PasswordNoSignCharacterMinException extends Error {
    constructor(){
        super("Error: La contraseña debe tener al menos uno de estos caracteres: .!@#$%&* .");
    }
}