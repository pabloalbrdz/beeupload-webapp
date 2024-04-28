import React, { useContext, useEffect } from "react";
import ReactImageGallery from "react-image-gallery";

import AlertForm from "../../component/form/AlertForm";
import ButtonMain from "../../component/main/ButtonMain";
import ButtonModelMain from "../../component/main/ButtonModelMain";

import { AppContext } from "../../context/AppContext";

import "react-image-gallery/styles/css/image-gallery.css";
import "./PhotoExplorer.css";

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
            <div className="main-photoexplorer-div-body d-flex flex-column text-center">
                <h2 className="mt-4">Fotos</h2>
                <ButtonMain text="Gestionar Imagenes" onClick={() => alert("Imagenes")}></ButtonMain>
                <div className="row d-flex flex-row align-self-center">
                    <ReactImageGallery items={context.photos}></ReactImageGallery>
                </div>
            </div>
        );
    }

}

export default PhotoExplorer;