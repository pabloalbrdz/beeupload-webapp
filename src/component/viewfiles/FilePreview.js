import React, { useState, useContext } from "react";

import { AppContext } from "../../context/AppContext";

import { Modal } from "react-bootstrap";
import { MdOutlineDeleteOutline } from "react-icons/md";
import ButtonModelMain from "../../component/main/ButtonModelMain";
import AlertForm from "../../component/form/AlertForm";

import { UserController } from "../../controller/UserController";

import "./FilePreview.css";

function FilePreview({type, id, src, title}){

    const context = useContext(AppContext);

    const [showFileModal, setShowFileModal] = useState(false);
    const [showDeleteFileModel, setShowDeleteFileModel] = useState(false);
    const [deleteFileState, setDeleteFileState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});

    async function deleteFile(e){
        e.preventDefault();
        if (type == "video"){
            let deletedVideo = await UserController.deleteUserVideo(JSON.parse(sessionStorage.getItem("session")).id, id, setDeleteFileState);
            if (deletedVideo){
                setTimeout(function(){
                    setShowDeleteFileModel(false);
                    setDeleteFileState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
                    context.getVideos();
                }, 2000); 
            }
        }else if (type == "document"){
            let deletedDoc = await UserController.deleteUserDocument(JSON.parse(sessionStorage.getItem("session")).id, id, setDeleteFileState);
            if (deletedDoc){
                setTimeout(function(){
                    setShowDeleteFileModel(false);
                    setDeleteFileState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
                    context.getDocument();
                }, 2000); 
            }
        }else if (type == "music"){
            let deletedMusic = await UserController.deleteUserMusic(JSON.parse(sessionStorage.getItem("session")).id, id, setDeleteFileState);
            if (deletedMusic){
                setTimeout(function(){
                    setShowDeleteFileModel(false);
                    setDeleteFileState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
                    context.getMusic();
                }, 2000); 
            }
        }else if (type == "photo"){
            let deletedPhoto = await UserController.deleteUserImage(JSON.parse(sessionStorage.getItem("session")).id, id, setDeleteFileState);
            if (deletedPhoto){
                setTimeout(function(){
                    setShowDeleteFileModel(false);
                    setDeleteFileState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
                    context.getPhotos();
                }, 2000); 
            }
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
                <Modal className="filevideo-delete-div-modal justify-content-center align-items-center" show={showDeleteFileModel} onHide={() => { setShowDeleteFileModel(false); setDeleteFileState({"visible": "alert-form-hidden", "state": "", "message": ""}); }} dialogClassName="filevideo-delete-div-modal-dialog">
                    <Modal.Header className="d-flex justify-content-center">
                        <Modal.Title>Eliminar Video</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column justify-content-center">
                        <AlertForm visible={deleteFileState.visible} state={deleteFileState.state} message={deleteFileState.message}></AlertForm>
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
                <Modal className="filedocument-delete-div-modal justify-content-center align-items-center" show={showDeleteFileModel} onHide={() => { setShowDeleteFileModel(false); setDeleteFileState({"visible": "alert-form-hidden", "state": "", "message": ""}); }} dialogClassName="filedocument-delete-div-modal-dialog">
                    <Modal.Header className="d-flex justify-content-center">
                        <Modal.Title>Eliminar Documento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column justify-content-center">
                        <AlertForm visible={deleteFileState.visible} state={deleteFileState.state} message={deleteFileState.message}></AlertForm>
                        <p className="modal-body-p">¿Desea eliminar este documento?</p>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <ButtonModelMain text="Salir" onClick={() => setShowDeleteFileModel(false)}></ButtonModelMain>
                        <ButtonModelMain text="Aceptar" onClick={deleteFile}></ButtonModelMain>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }else if (type == "music"){
        return(
            <>
                <div className="filemusic-preview-div col-12 d-flex">
                    <p>{title}</p>
                    <button onClick={() => setShowDeleteFileModel(true)}><MdOutlineDeleteOutline /></button>
                </div>
                <Modal className="filemusic-delete-div-modal justify-content-center align-items-center" show={showDeleteFileModel} onHide={() => { setShowDeleteFileModel(false); setDeleteFileState({"visible": "alert-form-hidden", "state": "", "message": ""}); }} dialogClassName="filemusic-delete-div-modal-dialog">
                    <Modal.Header className="d-flex justify-content-center">
                        <Modal.Title>Eliminar Musica</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column justify-content-center">
                        <AlertForm visible={deleteFileState.visible} state={deleteFileState.state} message={deleteFileState.message}></AlertForm>
                        <p className="modal-body-p">¿Desea eliminar esta cancion?</p>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <ButtonModelMain text="Salir" onClick={() => setShowDeleteFileModel(false)}></ButtonModelMain>
                        <ButtonModelMain text="Aceptar" onClick={deleteFile}></ButtonModelMain>
                    </Modal.Footer>
                </Modal>
        </>
        );
    }else if (type == "photo"){
        return(
            <>
                <div className="fileimage-preview-div col-12 d-flex">
                    <div>
                        <img src={src} onClick={() => setShowFileModal(true)}></img>
                    </div>
                    <button onClick={() => setShowDeleteFileModel(true)}><MdOutlineDeleteOutline /></button>
                </div>
                <Modal className="fileimage-preview-div-modal justify-content-center align-items-center" show={showFileModal} onHide={() => setShowFileModal(false)} dialogClassName="fileimage-preview-div-modal-dialog">
                    <Modal.Body className="fileimage-preview-div-modal-body d-flex">
                        <div>
                            <img src={src}></img>
                        </div>
                    </Modal.Body>
                </Modal>
                <Modal className="fileimage-delete-div-modal justify-content-center align-items-center" show={showDeleteFileModel} onHide={() => { setShowDeleteFileModel(false); setDeleteFileState({"visible": "alert-form-hidden", "state": "", "message": ""}); }} dialogClassName="filedocument-delete-div-modal-dialog">
                    <Modal.Header className="d-flex justify-content-center">
                        <Modal.Title>Eliminar Imagen</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column justify-content-center">
                        <AlertForm visible={deleteFileState.visible} state={deleteFileState.state} message={deleteFileState.message}></AlertForm>
                        <p className="modal-body-p">¿Desea eliminar esta imagen?</p>
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