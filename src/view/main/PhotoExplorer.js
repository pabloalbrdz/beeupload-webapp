import React, { useContext, useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";

import AlertForm from "../../component/form/AlertForm";
import ButtonMain from "../../component/main/ButtonMain";
import ButtonModelMain from "../../component/main/ButtonModelMain";
import { Modal } from "react-bootstrap";

import { AppContext } from "../../context/AppContext";

import "react-image-gallery/styles/css/image-gallery.css";
import "./PhotoExplorer.css";

function PhotoExplorer(){

    const context = useContext(AppContext);

    const [showPhotoListModal, setShowPhotoListModal] = useState(false);

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
            <>
                <div className="main-photoexplorer-div-body d-flex flex-column text-center">
                    <h2 className="mt-4">Fotos</h2>
                    <ButtonMain text="Gestionar Imagenes" onClick={() => setShowPhotoListModal(true)}></ButtonMain>
                    <div className="row d-flex flex-row align-self-center">
                        <ReactImageGallery items={context.photos}></ReactImageGallery>
                    </div>
                </div>
                <Modal className="filephoto-preview-div-modal justify-content-center align-items-center" show={showPhotoListModal} onHide={() => setShowPhotoListModal(false)} dialogClassName="filephoto-preview-div-modal-dialog">
                    <Modal.Body className="filephoto-preview-div-modal-body">
                        <div className="d-flex flex-column gap-1">
                            {context.photoList}
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        );
    }

}

export default PhotoExplorer;