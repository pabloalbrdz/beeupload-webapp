import React, { useState, useContext } from "react";

import { AppContext } from "../../context/AppContext";

import { Modal } from "react-bootstrap";
import { MdOutlineDeleteOutline } from "react-icons/md";

import "./FilePreview.css";

function FilePreview({type, id, src, title}){

    const context = useContext(AppContext);

    const [showFileModal, setShowFileModal] = useState(false);

    function deleteFile(e){
        e.preventDefault();
        if (type == "video"){

        }else if (type == "document"){

        }
    }

    if (type == "video"){
        return(
            <>
                <div className="filevideo-preview-div col-12 d-flex">
                    <p onClick={() => setShowFileModal(true)}>{title}</p>
                    <button><MdOutlineDeleteOutline /></button>
                </div>
                <Modal className="filevideo-preview-div-modal" show={showFileModal} onHide={() => setShowFileModal(false)} dialogClassName="filevideo-preview-div-modal-dialog">
                    <Modal.Body className="filevideo-preview-div-modal-body d-flex">
                        <video src={src} controls autoPlay></video>
                    </Modal.Body>
                </Modal>
            </>
        );
    }else if (type == "document"){
        return(
            <>
                <div className="filedocument-preview-div col-12 d-flex">
                    <p onClick={() => setShowFileModal(true)}>{title}</p>
                    <button><MdOutlineDeleteOutline /></button>
                </div>
                <Modal className="filedocument-preview-div-modal justify-content-center align-items-center" show={showFileModal} onHide={() => setShowFileModal(false)} dialogClassName="filedocument-preview-div-modal-dialog">
                    <Modal.Body className="filedocument-preview-div-modal-body d-flex">
                        <embed src={src} type="application/pdf"></embed>
                    </Modal.Body>
                </Modal>
            </>
        );
    }

}

export default FilePreview;