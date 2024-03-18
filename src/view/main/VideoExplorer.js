import React, { useEffect } from "react";
import { UserController } from "../../controller/UserController";

function VideoExplorer(){
    async function getVideoFiles(){
        let data = await UserController.getAllUserVideos(JSON.parse(sessionStorage.getItem("session")).id);
        console.log(data);
    }
    useEffect(() => {
        getVideoFiles();
    }, []);
    return(
        <div>
            <h2>Videos</h2>
        </div>
    );
}

export default VideoExplorer;