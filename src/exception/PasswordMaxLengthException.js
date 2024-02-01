export class PasswordMaxLengthException extends Error {
    constructor(){
        super("Error: La contraseña no debe tener mas de 18 caracteres.");
    }
}