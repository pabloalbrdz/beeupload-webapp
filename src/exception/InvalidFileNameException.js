export class InvalidFileNameException extends Error {
    constructor(){
        super("Error: El nombre del fichero multimedia no es valido.");
    }
}