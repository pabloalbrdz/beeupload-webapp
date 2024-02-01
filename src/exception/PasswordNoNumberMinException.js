export class PasswordNoNumberMinException extends Error {
    constructor(){
        super("Error: La contraseña debe tener al menos un numero.");
    }
}