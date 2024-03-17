import { NoFileToUploadException } from "../exception/NoFileToUploadException";

export const fileValidation = function(filedata){

    if (filedata.keys.length == 0){
        throw new NoFileToUploadException();
    }

}