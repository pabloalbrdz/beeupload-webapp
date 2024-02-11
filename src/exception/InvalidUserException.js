export class InvalidUserException extends Error {
    constructor(){
        super("Error: Usuario o contraseña erroneos.");
    }
}