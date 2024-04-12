import React, { useContext, useEffect } from "react";
import "./VideoExplorer.css";
import { AppContext } from "../../context/AppContext";

function VideoExplorer(){

    const context = useContext(AppContext);

    useEffect(() => {
        if (sessionStorage.getItem("session") != undefined){
            context.getVideos();
        }
    }, []);

    return(
        <div className="main-videoexplorer-div-body d-flex flex-column text-center gap-5">
            <h2 className="mt-4">Videos</h2>
            <div className="row d-flex flex-row gap-1 m-5">
                {context.videos}
            </div>
        </div>
    ); 

}

export default VideoExplorer;