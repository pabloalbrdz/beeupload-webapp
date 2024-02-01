export class PasswordNoLowerLetterMinException extends Error {
    constructor(){
        super("Error: La contraseña debe tener al menos una letra minuscula.");
    }
}