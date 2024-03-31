import React, { useState } from "react";
import "./FilePreview.css";
import { Modal } from "react-bootstrap";

function FilePreview({type, src, title}){
    const [showFileModal, setShowFileModal] = useState(false);
    if (type == "video"){
        return(
            <>
                <div className="filevideo-preview-div col-12 d-flex flex-column" onClick={() => setShowFileModal(true)}>
                    <p>{title}</p>
                </div>
                <Modal className="filevideo-preview-div-modal" show={showFileModal} onHide={() => setShowFileModal(false)}>
                    <Modal.Body className="filevideo-preview-div-modal-body d-flex">
                        <video src={src} controls autoPlay></video>
                    </Modal.Body>
                </Modal>
            </>
        );
    }else if (type == "document"){
        return(
            <>
                <div className="filedocument-preview-div col-12 d-flex flex-column" onClick={() => setShowFileModal(true)}>
                    <p>{title}</p>
                </div>
                <Modal className="filedocument-preview-div-modal" show={showFileModal} onHide={() => setShowFileModal(false)}>
                    <Modal.Body className="filedocument-preview-div-modal-body d-flex">
                        <embed src={src} type="application/pdf"></embed>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default FilePreview;