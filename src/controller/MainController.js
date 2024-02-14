import DocumentExplorer from "../view/main/DocumentExplorer";
import MusicExplorer from "../view/main/MusicExplorer";
import PhotoExplorer from "../view/main/PhotoExplorer";
import VideoExplorer from "../view/main/VideoExplorer";

export const MainController = {

    changeExplorer(explorer, changeView){
        if (explorer == "document"){
            changeView(
                {
                    "explorer": "document",
                    "view": <DocumentExplorer></DocumentExplorer>
                }
            );
        }else if (explorer == "music"){
           changeView(
                {
                    "explorer": "music",
                    "view": <MusicExplorer></MusicExplorer>
                }
           ); 
        }else if (explorer == "photo"){
           changeView(
                {
                    "explorer": "photo",
                    "view": <PhotoExplorer></PhotoExplorer>
                }
           ); 
        }else if (explorer == "video"){
           changeView(
                {
                    "explorer": "video",
                    "view": <VideoExplorer></VideoExplorer>
                }
           ); 
        }
    },

    closeSession(){
        window.sessionStorage.clear();
        window.location.href = window.location.href;
    }

}