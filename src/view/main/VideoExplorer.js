import React, { useEffect, useState } from "react";
import { UserController } from "../../controller/UserController";
import "./VideoExplorer.css";
import fileserverSettings from "../../settings/fileserverSettings";
import FilePreview from "../../component/viewfiles/FilePreview";

function VideoExplorer(){
    const [getAllVideos, setGetAllVideos] = useState([]);
    async function getVideoFiles(){
        let data = await UserController.getAllUserVideos(JSON.parse(sessionStorage.getItem("session")).id);
        let arrayVideo = new Array();
        for (let video of data){
            arrayVideo.push(<FilePreview type="video" src={`${fileserverSettings.USER_FOLDER_ROUTE}/${video.path}`} title={video.name}></FilePreview>)
        }
        setGetAllVideos(arrayVideo);
    }
    useEffect(() => {
        getVideoFiles();
    }, []);
    return(
        <div className="main-videoexplorer-div-body d-flex flex-column text-center gap-5">
            <h2 className="mt-4">Videos</h2>
            <div className="row d-flex flex-row gap-1 m-5">
                {getAllVideos}
            </div>
        </div>
    );
}

export default VideoExplorer;