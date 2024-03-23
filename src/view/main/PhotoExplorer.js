import React, { useEffect, useState } from "react";
import { UserController } from "../../controller/UserController";
import ImgPreview from "../../component/viewfiles/ImgPreview";
import fileserverSettings from "../../settings/fileserverSettings";
import "./PhotoExplorer.css";

function PhotoExplorer(){
    const [getAllPhotos, setGetAllPhotos] = useState([]);
    async function getPhotoFiles(){
        let data = await UserController.getAllUserPhotos(JSON.parse(sessionStorage.getItem("session")).id);
        let arrayImg = new Array();
        for (let image of data){
            arrayImg.push(<ImgPreview src={`${fileserverSettings.USER_FOLDER_ROUTE}/${image.path}`}></ImgPreview>)
        }
        setGetAllPhotos(arrayImg);
    }
    useEffect(() => {
        getPhotoFiles();
    }, []);
    return(
        <div className="main-photoexplorer-div-body d-flex flex-column text-center gap-5">
            <h2 className="mt-4">Fotos</h2>
            <div className="row d-flex flex-row gap-5 m-5">
                {getAllPhotos}
            </div>
        </div>
    );
}

export default PhotoExplorer;