export const MainController = {

    closeSession(){
        window.sessionStorage.clear();
        window.location.href = window.location.href;
    }

}