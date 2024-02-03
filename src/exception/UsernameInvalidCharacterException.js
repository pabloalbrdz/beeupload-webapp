export class UsernameInvalidCharacterException extends Error {
    constructor(){
        super("Error: El nombre de usuario tiene caracteres no son validos. Validos: a-z A-Z 0-9 ._-");
    }
}