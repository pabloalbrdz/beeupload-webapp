import React, { useContext, useEffect } from "react";
import "./PhotoExplorer.css";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { AppContext } from "../../context/AppContext";

function PhotoExplorer(){

    const context = useContext(AppContext);

    useEffect(() => {
        if (sessionStorage.getItem("session") != undefined){
            context.getPhotos();
        }
    }, []);

    if (context.photos.length == 0){
        return(
            <div className="main-photoexplorer-div-body d-flex flex-column text-center gap-5">
                <h2 className="mt-4">Fotos</h2>
                <div className="row d-flex flex-row m-5" />
            </div>
        );
    }else{
        return(
            <div className="main-photoexplorer-div-body d-flex flex-column text-center gap-5">
                <h2 className="mt-4">Fotos</h2>
                <ReactImageGallery items={context.photos}></ReactImageGallery>
            </div>
        );
    }

}

export default PhotoExplorer;