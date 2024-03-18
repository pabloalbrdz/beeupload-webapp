import React, { useEffect } from "react";
import { UserController } from "../../controller/UserController";

function PhotoExplorer(){
    async function getPhotoFiles(){
        let data = await UserController.getAllUserPhotos(JSON.parse(sessionStorage.getItem("session")).id);
        console.log(data);
    }
    useEffect(() => {
        getPhotoFiles();
    }, []);
    return(
        <div>
            <h2>Fotos</h2>
        </div>
    );
}

export default PhotoExplorer;