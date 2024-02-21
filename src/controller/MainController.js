import DocumentExplorer from "../view/main/DocumentExplorer";
import MusicExplorer from "../view/main/MusicExplorer";
import PhotoExplorer from "../view/main/PhotoExplorer";
import VideoExplorer from "../view/main/VideoExplorer";
import UserSettingsExplorer from "../view/main/UserSettingsExplorer";

export const MainController = {

    changeExplorer(explorer, changeView){
        switch (explorer){
            case "document":
                changeView(
                    {
                        "explorer": "document",
                        "view": <DocumentExplorer></DocumentExplorer>
                    }
                );
            break;
            case "music":
                changeView(
                    {
                        "explorer": "music",
                        "view": <MusicExplorer></MusicExplorer>
                    }
                );
            break;
            case "photo":
                changeView(
                    {
                        "explorer": "photo",
                        "view": <PhotoExplorer></PhotoExplorer>
                    }
                );
            break;
            case "video":
                changeView(
                    {
                        "explorer": "video",
                        "view": <VideoExplorer></VideoExplorer>
                    }
                ); 
            break;
            case "usersettings":
                changeView(
                    {
                        "explorer": "usersettings",
                        "view": <UserSettingsExplorer></UserSettingsExplorer>
                    }
                ); 
            break;
        }
    },

    closeSession(){
        window.sessionStorage.clear();
        window.location.href = window.location.href;
    }

}