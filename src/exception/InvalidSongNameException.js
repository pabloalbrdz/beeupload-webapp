export class InvalidSongNameException extends Error {
    constructor(){
        super("Error: El nombre de la cancion no es valida.");
    }
}