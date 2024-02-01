export class EmailNoFormatException extends Error {
    constructor(){
        super("Error: El correo electronico no cumple con el formato establecido.");
    }
}