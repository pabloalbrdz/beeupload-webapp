import React, { useState } from "react";
import "./MainPage.css";

import { MainController } from "../controller/MainController";

import DocumentExplorer from "../view/main/DocumentExplorer";
import MusicExplorer from "../view/main/MusicExplorer";
import PhotoExplorer from "../view/main/PhotoExplorer";
import VideoExplorer from "../view/main/VideoExplorer";

import Sidebar from "../component/main/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";


function MainPage(){
    const [view, changeView] = useState(
        {
            "explorer": "document",
            "view": <DocumentExplorer></DocumentExplorer>
        }
    );
    return(
        <div className="main-page d-flex">
            <Sidebar 
                documentExplorer={() => MainController.changeExplorer("document", changeView)}
                musicExplorer={() => MainController.changeExplorer("music", changeView)}
                photoExplorer={() => MainController.changeExplorer("photo", changeView)}
                videoExplorer={() => MainController.changeExplorer("video", changeView)}
                closeSession={() => MainController.closeSession()}
            />
            <div className="main p-3">
                <div className="text-center">
                    {view.view}
                </div>
            </div>
        </div>
    );
}

export default MainPage;

