import React, { useState } from "react";
import "./MainPage.css";

import Sidebar from "../component/main/Sidebar";

import DocumentExplorer from "../view/main/DocumentExplorer";
import MusicExplorer from "../view/main/MusicExplorer";
import PhotoExplorer from "../view/main/PhotoExplorer";
import VideoExplorer from "../view/main/VideoExplorer";

import "bootstrap/dist/css/bootstrap.min.css";

function MainPage({closeSession}){

    const [view, changeView] = useState(
        {
            "explorer": "document",
            "view": <DocumentExplorer></DocumentExplorer> 
        }
    );

    function goToDocumentExplorer(){
        changeView(
            {
                "explorer": "document",
                "view": <DocumentExplorer></DocumentExplorer> 
            }
        );
    }
    function goToMusicExplorer(){
        changeView(
            {
                "explorer": "music",
                "view": <MusicExplorer></MusicExplorer> 
            }
        );
    }
    function goToPhotoExplorer(){
        changeView(
            {
                "explorer": "photo",
                "view": <PhotoExplorer></PhotoExplorer> 
            }
        );
    }
    function goToVideoExplorer(){
        changeView(
            {
                "explorer": "video",
                "view": <VideoExplorer></VideoExplorer> 
            }
        );
    }

    function closeSessionResponse(){
        closeSession();
    }

    return(
        <div className="main-page d-flex">
            <Sidebar documentExplorer={goToDocumentExplorer} musicExplorer={goToMusicExplorer} photoExplorer={goToPhotoExplorer} videoExplorer={goToVideoExplorer} closeSessionAction={closeSessionResponse}></Sidebar>
            <div className="main p-3">
                <div className="text-center">
                    {view.view}
                </div>
            </div>
        </div>
    );
}

export default MainPage;

