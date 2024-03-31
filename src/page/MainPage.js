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
import { UserController } from "../controller/UserController";


function MainPage(){

    const [view, changeView] = useState(
        {
            "explorer": "document",
            "view": <DocumentExplorer></DocumentExplorer>
        }
    );

    const [showPopUpUploadDocument, setShowPopUpUploadDocument] = useState(false);
    function onClosePopUpLoadDocument(){
        setShowPopUpUploadDocument(false);
        setUploadDocumentState({"visible": "alert-form-hidden", "state": "", "message": ""});
        setChangeDocumentNameInput(null);
        setChangeDocumentFileInput(null);
    }
    const [showPopUpUploadMusic, setShowPopUpUploadMusic] = useState(false);
    function onClosePopUpLoadMusic(){
        setShowPopUpUploadMusic(false);
        setUploadMusicState({"visible": "alert-form-hidden", "state": "", "message": ""});
        setChangeMusicNameInput(null);
        setChangeMusicArtistInput(null);
        setChangeMusicFileInput(null);
    }
    const [showPopUpUploadImage, setShowPopUpUploadImage] = useState(false);
    function onClosePopUpUploadImage(){
        setShowPopUpUploadImage(false);
        setUploadImageState({"visible": "alert-form-hidden", "state": "", "message": ""});
        setChangeImageFileInput(null);
    }
    const [showPopUpUploadVideo, setShowPopUpUploadVideo] = useState(false);
    function onClosePopUpLoadVideo(){
        setShowPopUpUploadVideo(false);
        setUploadVideoState({"visible": "alert-form-hidden", "state": "", "message": ""});
        setChangeVideoNameInput(null);
        setChangeVideoFileInput(null);
    }

    const [changeDocumentNameInput, setChangeDocumentNameInput] = useState(null);
    const [changeDocumentFileInput, setChangeDocumentFileInput] = useState(null);
    function onChangeDocumentNameInput(e){
        setChangeDocumentNameInput(e.target.value);
    };
    function onChangeDocumentFileInput(e){
        setChangeDocumentFileInput(e.target.files[0]);
    };
    const [uploadDocumentState, setUploadDocumentState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function uploadDocument(e){
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("docfile", changeDocumentFileInput);
        let uploadedDocument = await UserController.uploadDocument(JSON.parse(sessionStorage.getItem("session")).id, changeDocumentNameInput, formdata, setUploadDocumentState);
        if (uploadedDocument){
            setTimeout(function(){
                setShowPopUpUploadDocument(false);
                setUploadDocumentState({"visible": "alert-form-hidden", "state": "", "message": ""});
                setChangeDocumentNameInput(null);
                setChangeDocumentFileInput(null);
            }, 2000);
        }
    }

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
    const [uploadMusicState, setUploadMusicState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function uploadMusic(e){
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("musicfile", changeMusicFileInput);
        let uploadedMusic = await UserController.uploadMusic(JSON.parse(sessionStorage.getItem("session")).id, changeMusicNameInput, changeMusicArtistInput, formdata, setUploadMusicState);
        if (uploadedMusic){
            setTimeout(function(){
                setShowPopUpUploadMusic(false);
                setUploadMusicState({"visible": "alert-form-hidden", "state": "", "message": ""});
                setChangeMusicNameInput(null);
                setChangeMusicArtistInput(null);
                setChangeMusicFileInput(null);
            }, 2000);
        }
    }

    const [changeImageFileInput, setChangeImageFileInput] = useState(null);
    function onChangeImageFileInput(e) {
        setChangeImageFileInput(e.target.files[0]);
    }
    const [uploadImageState, setUploadImageState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function uploadImage(e){
        e.preventDefault();
        if (changeImageFileInput == null){
            setUploadImageState({"visible": "alert-form-visible", "state": "alert-form-error", "message": "Error: Se debe subir un fichero."});
        }else{
            let formdata = new FormData();
            formdata.append("imgfile", changeImageFileInput);
            let uploadedImage = await UserController.uploadPhoto(JSON.parse(sessionStorage.getItem("session")).id, formdata, (changeImageFileInput.name).split('.')[(changeImageFileInput.name).split('.').length - 1], setUploadImageState);
            if (uploadedImage){
                setTimeout(function(){
                    setShowPopUpUploadImage(false);
                    setUploadImageState({"visible": "alert-form-hidden", "state": "", "message": ""});
                    setChangeImageFileInput(null);
                }, 2000);
            }
        }
    }

    const [changeVideoNameInput, setChangeVideoNameInput] = useState(null);
    const [changeVideoFileInput, setChangeVideoFileInput] = useState(null);
    function onChangeVideoNameInput(e){
        setChangeVideoNameInput(e.target.value);
    };
    function onChangeVideoFileInput(e){
        setChangeVideoFileInput(e.target.files[0]);
    };
    const [uploadVideoState, setUploadVideoState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function uploadVideo(e){
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("videofile", changeVideoFileInput);
        let uploadedVideo = await UserController.uploadVideo(JSON.parse(sessionStorage.getItem("session")).id, changeVideoNameInput, formdata, setUploadVideoState);
        if (uploadedVideo){
            setTimeout(function(){
                setShowPopUpUploadVideo(false);
                setUploadVideoState({"visible": "alert-form-hidden", "state": "", "message": ""});
                setChangeVideoNameInput(null);
                setChangeVideoFileInput(null);
            }, 2000);   
        }
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

            <Modal show={showPopUpUploadDocument} onHide={() => onClosePopUpLoadDocument()}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Subir Documento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={uploadDocumentState.visible} state={uploadDocumentState.state} message={uploadDocumentState.message}></AlertForm>
                    <InputModelMain type="text" placeholder="Nombre Documento" onChange={onChangeDocumentNameInput}></InputModelMain>
                    <InputModelMain type="file" placeholder="Documento" onChange={onChangeDocumentFileInput}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowPopUpUploadDocument(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={uploadDocument}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showPopUpUploadMusic} onHide={() => onClosePopUpLoadMusic()}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Subir Cancion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={uploadMusicState.visible} state={uploadMusicState.state} message={uploadMusicState.message}></AlertForm>
                    <InputModelMain type="text" placeholder="Nombre Cancion" onChange={onChangeMusicNameInput}></InputModelMain>
                    <InputModelMain type="text" placeholder="Artista" onChange={onChangeMusicArtistInput}></InputModelMain>
                    <InputModelMain type="file" placeholder="Cancion" onChange={onChangeMusicFileInput}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowPopUpUploadMusic(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={uploadMusic}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showPopUpUploadImage} onHide={() => onClosePopUpUploadImage()}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Subir Imagen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={uploadImageState.visible} state={uploadImageState.state} message={uploadImageState.message}></AlertForm>
                    <InputModelMain type="file" placeholder="Imagen" onChange={onChangeImageFileInput}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowPopUpUploadImage(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={uploadImage}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showPopUpUploadVideo} onHide={() => onClosePopUpLoadVideo()}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Subir Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={uploadVideoState.visible} state={uploadVideoState.state} message={uploadVideoState.message}></AlertForm>
                    <InputModelMain type="text" placeholder="Nombre Video" onChange={onChangeVideoNameInput}></InputModelMain>
                    <InputModelMain type="file" placeholder="Video" onChange={onChangeVideoFileInput}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowPopUpUploadVideo(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={uploadVideo}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
        </div>

        
    );
}

export default MainPage;

