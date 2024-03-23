import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./ImgPreview.css";


function ImgPreview({src}){
    const [showImageModal, setShowImageModal] = useState(false);
    return(
        <>
            <div className="img-preview-div d-flex flex-column" onClick={() => setShowImageModal(true)}>
                <img className="img-preview-div-img" src={src}></img>
            </div>
            <Modal show={showImageModal} onHide={() => setShowImageModal(false)}>
                <Modal.Body className="img-preview-div-modal d-flex">
                    <img src={src}></img>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ImgPreview;