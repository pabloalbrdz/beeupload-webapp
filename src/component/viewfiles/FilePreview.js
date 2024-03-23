import React, { useState } from "react";
import "./FilePreview.css";
import { Modal } from "react-bootstrap";

function FilePreview({type, src, title}){
    const [showFileModal, setShowFileModal] = useState(false);
    if (type == "video"){
        return(
            <>
                <div className="filevideo-preview-div col-12 d-flex flex-column" onClick={() => setShowFileModal(true)}>
                    <h2>{title}</h2>
                </div>
                <Modal show={showFileModal} onHide={() => setShowFileModal(false)}>
                    <Modal.Body className="filevideo-preview-div-modal d-flex">
                        <video src={src} controls autoPlay></video>
                    </Modal.Body>
                </Modal>
            </>
        );
    }else if (type == "document"){
        return(
            <>
                <div>
                    
                </div>
            </>
        );
    }
}

export default FilePreview;