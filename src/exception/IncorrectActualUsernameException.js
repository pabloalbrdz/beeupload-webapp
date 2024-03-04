export class IncorrectActualUsernameException extends Error {
    constructor(){
        super("Error: El nombre de usuario a modificar no coincide con el actual.");
    }
}