import { InvalidFileNameException } from "../exception/InvalidFileNameException";

export const filenameValidation = function(filename){

    if (filename == undefined){
        throw new InvalidFileNameException();
    }

    if (filename.length == 0 || filename.length > 64){
        throw new InvalidFileNameException();
    }

}