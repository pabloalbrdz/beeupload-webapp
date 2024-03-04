export class IncorrectActualEmailException extends Error {
    constructor(){
        super("Error: El correo electronico a modificar no coincide con el actual.");
    }
}