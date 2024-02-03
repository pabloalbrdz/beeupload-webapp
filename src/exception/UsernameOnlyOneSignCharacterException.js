export class UsernameOnlyOneSignCharacterException extends Error {
    constructor(){
        super("Error: El usuario solo puede tener como maximo uno de estos caracteres: ._-");
    }
}