export class PasswordNoUpperLetterMinException extends Error {
    constructor(){
        super("Error: La contraseña debe tener al menos una letra mayuscula.");
    }
}