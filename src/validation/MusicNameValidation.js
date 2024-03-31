import { InvalidSongNameException } from "../exception/InvalidSongNameException";
import { InvalidSongArtistException } from "../exception/InvalidSongArtistException";

export const musicnameValidation = function(songname, artistname){

    if (songname.length == 0 || songname.length > 255){
        throw new InvalidSongNameException();
    }

    if (artistname.length == 0 || artistname.length > 255){
        throw new InvalidSongArtistException();
    }

}