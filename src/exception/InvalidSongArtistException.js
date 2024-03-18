export class InvalidSongArtistException extends Error {
    constructor(){
        super("Error: El nombre del artista de la cancion no es valido.");
    }
}