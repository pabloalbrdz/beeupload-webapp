import React, { useEffect, useState } from "react";
import { UserController } from "../../controller/UserController";
import fileserverSettings from "../../settings/fileserverSettings";
import "./PhotoExplorer.css";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function PhotoExplorer(){
    const [getAllPhotos, setGetAllPhotos] = useState([]);
    async function getPhotoFiles(){
        let data = await UserController.getAllUserPhotos(JSON.parse(sessionStorage.getItem("session")).id);
        let arrayImg = new Array();
        for (let image of data){
            arrayImg.push(
                {
                    original: `${fileserverSettings.USER_FOLDER_ROUTE}/${image.path}`,
                    thumbnail: `${fileserverSettings.USER_FOLDER_ROUTE}/${image.path}`
                }
            );
        }
        setGetAllPhotos(arrayImg);
    }
    useEffect(() => {
        getPhotoFiles();
    }, []);
    if (getAllPhotos.length == 0){
        return(
            <div className="main-photoexplorer-div-body d-flex flex-column text-center gap-5">
                <h2 className="mt-4">Fotos</h2>
                <div className="row d-flex flex-row m-5">
                </div>
            </div>
        );
    }else{
        return(
            <div className="main-photoexplorer-div-body d-flex flex-column text-center gap-5">
                <h2 className="mt-4">Fotos</h2>
                <ReactImageGallery items={getAllPhotos}></ReactImageGallery>
            </div>
        );
    }
}

export default PhotoExplorer;