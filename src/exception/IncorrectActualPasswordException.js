export class IncorrectActualPasswordException extends Error {
    constructor(){
        super("Error: La contraseña a modificar no coincide con el actual.");
    }
}