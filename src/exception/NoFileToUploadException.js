export class NoFileToUploadException extends Error {
    constructor(){
        super("Error: No se ha seleccionado ningun fichero.");
    }
}