export class UsernameMaxLengthException extends Error {
    constructor(){
        super("Error: El nombre de usuario no debe tener mas de 18 caracteres.");
    }
}