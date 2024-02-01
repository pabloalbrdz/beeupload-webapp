export class PasswordMinLengthException extends Error {
    constructor(){
        super("Error: La contraseña no debe tener menos de 6 caracteres.");
    }
}