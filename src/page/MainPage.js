import React, { useState } from "react";
import "./MainPage.css";

import { MainController } from "../controller/MainController";

import DocumentExplorer from "../view/main/DocumentExplorer";
import MusicExplorer from "../view/main/MusicExplorer";
import PhotoExplorer from "../view/main/PhotoExplorer";
import VideoExplorer from "../view/main/VideoExplorer";

import Sidebar from "../component/main/Sidebar";
import { Modal } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import InputModelMain from "../component/main/InputModelMain";
import ButtonModelMain from "../component/main/ButtonModelMain";
import AlertForm from "../component/form/AlertForm";


function MainPage(){

    const [view, changeView] = useState(
        {
            "explorer": "document",
            "view": <DocumentExplorer></DocumentExplorer>
        }
    );

    const [showPopUpUploadDocument, setShowPopUpUploadDocument] = useState(false);
    const [showPopUpUploadMusic, setShowPopUpUploadMusic] = useState(false);
    const [showPopUpUploadImage, setShowPopUpUploadImage] = useState(false);
    const [showPopUpUploadVideo, setShowPopUpUploadVideo] = useState(false);

    const [changeDocumentNameInput, setChangeDocumentNameInput] = useState(null);
    const [changeDocumentFileInput, setChangeDocumentFileInput] = useState(null);
    function onChangeDocumentNameInput(e){
        setChangeDocumentNameInput(e.target.value);
    };
    function onChangeDocumentFileInput(e){
        setChangeDocumentFileInput(e.target.files[0]);
    };

    const [changeVideoNameInput, setChangeVideoNameInput] = useState(null);
    const [changeVideoFileInput, setChangeVideoFileInput] = useState(null);
    function onChangeVideoNameInput(e){
        setChangeVideoNameInput(e.target.value);
    };
    function onChangeVideoFileInput(e){
        setChangeVideoFileInput(e.target.files[0]);
    };

    const [changeMusicNameInput, setChangeMusicNameInput] = useState(null);
    const [changeMusicArtistInput, setChangeMusicArtistInput] = useState(null);
    const [changeMusicFileInput, setChangeMusicFileInput] = useState(null);
    function onChangeMusicNameInput(e){
        setChangeMusicNameInput(e.target.value);
    };
    function onChangeMusicArtistInput(e){
        setChangeMusicArtistInput(e.target.value);
    };
    function onChangeMusicFileInput(e){
        setChangeMusicFileInput(e.target.files[0]);
    };

    const [changeImageFile, setChangeImageFile] = useState(null);
    function onChangeImageFileInput(e) {
        setChangeImageFile(e.target.files[0]);
    }

    return(
        <div className="main-page d-flex">
            <Sidebar 
                documentExplorer={() => MainController.changeExplorer("document", changeView)}
                popUpUploadDocument={() => setShowPopUpUploadDocument(true)}
                musicExplorer={() => MainController.changeExplorer("music", changeView)}
                popUpUploadMusic={() => setShowPopUpUploadMusic(true)}
                photoExplorer={() => MainController.changeExplorer("photo", changeView)}
                popUpUploadPhoto={() =>setShowPopUpUploadImage(true)}
                videoExplorer={() => MainController.changeExplorer("video", changeView)}
                popUpUploadVideo={() => setShowPopUpUploadVideo(true)}
                userSettings={() => MainController.changeExplorer("usersettings", changeView)}
                closeSession={() => MainController.closeSession()}
            />
            <div className="main p-3">
                {view.view}
            </div>

            <Modal show={showPopUpUploadDocument} onHide={() => setShowPopUpUploadDocument(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Subir Documento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <AlertForm visible={changeImageState.visible} state={changeImageState.state} message={changeImageState.message}></AlertForm> */}
                    <InputModelMain type="text" placeholder="Nombre Documento" onChange={onChangeDocumentNameInput}></InputModelMain>
                    <InputModelMain type="file" placeholder="Documento" onChange={onChangeDocumentFileInput}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowPopUpUploadDocument(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={null}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showPopUpUploadMusic} onHide={() => setShowPopUpUploadMusic(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Subir Cancion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <AlertForm visible={changeImageState.visible} state={changeImageState.state} message={changeImageState.message}></AlertForm> */}
                    <InputModelMain type="text" placeholder="Nombre Cancion" onChange={onChangeMusicNameInput}></InputModelMain>
                    <InputModelMain type="text" placeholder="Artista" onChange={onChangeMusicArtistInput}></InputModelMain>
                    <InputModelMain type="file" placeholder="Cancion" onChange={onChangeMusicFileInput}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowPopUpUploadMusic(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={null}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showPopUpUploadImage} onHide={() => setShowPopUpUploadImage(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Subir Imagen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <AlertForm visible={changeImageState.visible} state={changeImageState.state} message={changeImageState.message}></AlertForm> */}
                    <InputModelMain type="file" placeholder="Imagen" onChange={onChangeImageFileInput}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowPopUpUploadImage(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={null}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showPopUpUploadVideo} onHide={() => setShowPopUpUploadVideo(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Subir Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <AlertForm visible={changeImageState.visible} state={changeImageState.state} message={changeImageState.message}></AlertForm> */}
                    <InputModelMain type="text" placeholder="Nombre Video" onChange={onChangeVideoNameInput}></InputModelMain>
                    <InputModelMain type="file" placeholder="Video" onChange={onChangeVideoFileInput}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowPopUpUploadVideo(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={null}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
        </div>

        
    );
}

export default MainPage;

