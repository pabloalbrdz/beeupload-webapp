import React, { useState, useContext } from "react";

import { AppContext } from "../../context/AppContext";

import { Modal } from "react-bootstrap";
import { MdOutlineDeleteOutline } from "react-icons/md";
import ButtonModelMain from "../../component/main/ButtonModelMain";

import "./FilePreview.css";

function FilePreview({type, id, src, title}){

    const context = useContext(AppContext);

    const [showFileModal, setShowFileModal] = useState(false);

    const [showDeleteFileModel, setShowDeleteFileModel] = useState(false);

    function deleteFile(e){
        e.preventDefault();
        if (type == "video"){
            alert("Eliminar video");
        }else if (type == "document"){
            alert("Eliminar documento");
        }
    }

    if (type == "video"){
        return(
            <>
                <div className="filevideo-preview-div col-12 d-flex">
                    <p onClick={() => setShowFileModal(true)}>{title}</p>
                    <button onClick={() => setShowDeleteFileModel(true)}><MdOutlineDeleteOutline /></button>
                </div>
                <Modal className="filevideo-preview-div-modal" show={showFileModal} onHide={() => setShowFileModal(false)} dialogClassName="filevideo-preview-div-modal-dialog">
                    <Modal.Body className="filevideo-preview-div-modal-body d-flex">
                        <video src={src} controls autoPlay></video>
                    </Modal.Body>
                </Modal>
                <Modal className="filevideo-delete-div-modal justify-content-center align-items-center" show={showDeleteFileModel} onHide={() => setShowDeleteFileModel(false)} dialogClassName="filevideo-delete-div-modal-dialog">
                    <Modal.Header className="d-flex justify-content-center">
                        <Modal.Title>Eliminar Video</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center">
                        <p className="modal-body-p">¿Desea eliminar este video?</p>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <ButtonModelMain text="Salir" onClick={() => setShowDeleteFileModel(false)}></ButtonModelMain>
                        <ButtonModelMain text="Aceptar" onClick={deleteFile}></ButtonModelMain>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }else if (type == "document"){
        return(
            <>
                <div className="filedocument-preview-div col-12 d-flex">
                    <p onClick={() => setShowFileModal(true)}>{title}</p>
                    <button onClick={() => setShowDeleteFileModel(true)}><MdOutlineDeleteOutline /></button>
                </div>
                <Modal className="filedocument-preview-div-modal justify-content-center align-items-center" show={showFileModal} onHide={() => setShowFileModal(false)} dialogClassName="filedocument-preview-div-modal-dialog">
                    <Modal.Body className="filedocument-preview-div-modal-body d-flex">
                        <embed src={src} type="application/pdf"></embed>
                    </Modal.Body>
                </Modal>
                <Modal className="filedocument-delete-div-modal justify-content-center align-items-center" show={showDeleteFileModel} onHide={() => setShowDeleteFileModel(false)} dialogClassName="filedocument-delete-div-modal-dialog">
                    <Modal.Header className="d-flex justify-content-center">
                        <Modal.Title>Eliminar Documento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center">
                        <p className="modal-body-p">¿Desea eliminar este documento?</p>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <ButtonModelMain text="Salir" onClick={() => setShowDeleteFileModel(false)}></ButtonModelMain>
                        <ButtonModelMain text="Aceptar" onClick={deleteFile}></ButtonModelMain>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

}

export default FilePreview;