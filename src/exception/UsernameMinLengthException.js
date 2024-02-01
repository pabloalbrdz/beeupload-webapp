export class UsernameMinLengthException extends Error {
    constructor(){
        super("Error: El nombre de usuario no debe tener menos de 4 caracteres.");
    }
}