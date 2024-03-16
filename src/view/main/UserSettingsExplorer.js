import {React, useEffect, useState} from "react";

import "./UserSettingsExplorer.css";

import ButtonMain from "../../component/main/ButtonMain";
import { Modal } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import ButtonModelMain from "../../component/main/ButtonModelMain";
import InputModelMain from "../../component/main/InputModelMain";
import { UserController } from "../../controller/UserController";
import AlertForm from "../../component/form/AlertForm";

function UserSettingsExplorer(){
    const [showChangeUsername, setShowChangeUsername] = useState(false);
    const [showChangeUserProfilePic, setShowChangeUserProfilePic] = useState(false);
    const [showChangeEmail, setShowChangeEmail] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showDeleteDocs, setShowDeleteDocs] = useState(false);
    const [showDeletePhotos, setShowDeletePhotos] = useState(false);
    const [showDeleteMusic, setShowDeleteMusic] = useState(false);
    const [showDeleteVideo, setShowDeleteVideo] = useState(false);
    const [showDeleteFiles, setShowDeleteFiles] = useState(false);
    const [showDeleteUser, setShowDeleteUser] = useState(false);

    const [username, setUsername] = useState("null");
    const getUsername = async () => {
        let responseUsername = await UserController.getUsername(1);
        setUsername(responseUsername);
    };

    const [userImage, setUserImage] = useState(null);
    const getUserImage  = async () => {
        let responseImageSrc = UserController.getProfilePic(JSON.parse(sessionStorage.getItem("session")).id);
        setUserImage(responseImageSrc);
    };

    const [id, setId] = useState("null");
    const getId = async () => {
        let responseId = JSON.parse(sessionStorage.getItem("session")).id;
        setId(responseId);
    };

    const [changeUsernameInput1, setChangeUsernameInput1] = useState('');
    const [changeUsernameInput2, setChangeUsernameInput2] = useState('');
    const [changeUsernameState, setChangeUsernameState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    function onchangeUsernameInput1(e){
        setChangeUsernameInput1(e.target.value);
    };
    function onchangeUsernameInput2(e){
        setChangeUsernameInput2(e.target.value);
    };
    async function changeUsername(e){
        e.preventDefault();
        let changedUsername = await UserController.changeUsername(JSON.parse(sessionStorage.getItem("session")).id, changeUsernameInput1, changeUsernameInput2, setChangeUsernameState);
        if (changedUsername){
            setTimeout(function(){
                setShowChangeUsername(false);
                setChangeUsernameState({"visible": "alert-form-hidden", "state": "", "message": ""});
            }, 2000);
            getUsername();
        }
    };

    const [changeImageInput1, setChangeImageInput1] = useState(null);
    const [changeImageState, setChangeImageState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    function onchangeImageInput1(e){
        setChangeImageInput1(e.target.files[0]);
    };
    async function changeImage(e){
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("imgfile", changeImageInput1);
        let changedImg = await UserController.changeProfilePic(JSON.parse(sessionStorage.getItem("session")).id, formdata, setChangeImageState);
        if (changedImg){
            setTimeout(function(){
                setShowChangeUserProfilePic(false);
                setChangeImageState({"visible": "alert-form-hidden", "state": "", "message": ""});
            }, 2000);
            getUserImage();
        }
    };

    const [changeEmailInput1, setChangeEmailInput1] = useState('');
    const [changeEmailInput2, setChangeEmailInput2] = useState('');
    const [changeEmailState, setChangeEmailState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    function onchangeEmailInput1(e){
        setChangeEmailInput1(e.target.value);
    };
    function onchangeEmailInput2(e){
        setChangeEmailInput2(e.target.value);
    };
    async function changeEmail(e){
        e.preventDefault();
        let changedEmail = await UserController.changeEmail(JSON.parse(sessionStorage.getItem("session")).id, changeEmailInput1, changeEmailInput2, setChangeEmailState);
        if (changedEmail){
            setTimeout(function(){
                setShowChangeEmail(false);
                setChangeEmailState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
            }, 2000);  
        }
    };

    const [changePasswordInput1, setChangePasswordInput1] = useState('');
    const [changePasswordInput2, setChangePasswordInput2] = useState('');
    const [changePasswordState, setChangePasswordState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function changePassword(e){
        e.preventDefault();
        let changedPassword = await UserController.changePassword(JSON.parse(sessionStorage.getItem("session")).id, changePasswordInput1, changePasswordInput2, setChangePasswordState);
        if (changedPassword){
            setTimeout(function(){
                setShowChangePassword(false);
                setChangePasswordState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
            }, 2000);  
        }
    };
    function onchangePasswordInput1(e){
        setChangePasswordInput1(e.target.value);
    };
    function onchangePasswordInput2(e){
        setChangePasswordInput2(e.target.value);
    };
    
    const [deleteDocsState, setDeleteDocsState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function deleteDocs(e){
        e.preventDefault();
        let deletedDocs = await UserController.deleteAllUserDocs(JSON.parse(sessionStorage.getItem("session")).id, setDeleteDocsState);
        if (deletedDocs){
            setTimeout(function(){
                setShowDeleteDocs(false);
                setDeleteDocsState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
            }, 2000);  
        }
    };

    const [deletePhotosState, setDeletePhotosState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function deletePhotos(e){
        e.preventDefault();
        let deletedPhotos;
        if (deletedPhotos){
            setTimeout(function(){
                setShowDeletePhotos(false);
                setDeletePhotosState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
            }, 2000);  
        }
    };

    const [deleteMusicState, setDeleteMusicState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function deleteMusic(e){
        e.preventDefault();
        let deletedMusic;
        if (deletedMusic){
            setTimeout(function(){
                setShowDeleteMusic(false);
                setDeleteMusicState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
            }, 2000);  
        }
    };

    const [deleteVideoState, setDeleteVideoState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function deleteVideos(e){
        e.preventDefault();
        let deletedVideo;
        if (deletedVideo){
            setTimeout(function(){
                setShowDeleteVideo(false);
                setDeleteVideoState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
            }, 2000);  
        }
    };

    useEffect(() => {
      getUsername();
      getId();
      getUserImage();
    }, []);

    return(
        <div className="main-usersettings-div-body">
            <div className="main-usersettings-div-userheader">
                <img src={userImage}></img>
                <h1>{username}</h1>
            </div>
            <hr className="main-usersettings-div-body-hr"></hr>
            <div className="main-usersettings-div-userinfo">
                <h2>Informacion de Usuario</h2>
                <div className="main-usersettings-div-userinfo-info">
                    <h4>Usuario: <span>{username}</span></h4>
                    <h4>ID: <span>{id}</span></h4>
                </div>
            </div>
            <div className="main-usersettings-div-usersettings">
                <h2>Ajustes de Usuario</h2>
                <div className="main-usersettings-div-usersettings-settings">
                    <ButtonMain text="Modificar Nombre Usuario" onClick={() => setShowChangeUsername(true)}></ButtonMain>
                    <ButtonMain text="Modificar Imagen Usuario" onClick={() => setShowChangeUserProfilePic(true)}></ButtonMain>
                    <ButtonMain text="Modificar Correo Electronico" onClick={() => setShowChangeEmail(true)}></ButtonMain>
                    <ButtonMain text="Modificar Contraseña" onClick={() => setShowChangePassword(true)}></ButtonMain>
                </div>
            </div>
            <div className="main-usersettings-div-filesettings">
                <h2>Ajustes de Ficheros</h2>
                <div className="main-usersettings-div-filesettings-settings">
                    <ButtonMain text="Eliminar Documentos (todos)" onClick={() => setShowDeleteDocs(true)}></ButtonMain>
                    <ButtonMain text="Eliminar Imagenes (todos)" onClick={() => setShowDeletePhotos(true)}></ButtonMain>
                    <ButtonMain text="Eliminar Musica (todos)" onClick={() => setShowDeleteMusic(true)}></ButtonMain>
                    <ButtonMain text="Eliminar Videos (todos)" onClick={() => setShowDeleteVideo(true)}></ButtonMain>
                </div>
            </div>
            <div className="main-usersettings-div-userdelete">
                <h2>Acciones de Eliminacion</h2>
                <div className="main-usersettings-div-userdelete-settings">
                    <ButtonMain text="Eliminar Ficheros (todos)" onClick={() => setShowDeleteFiles(true)}></ButtonMain>
                    <ButtonMain text="Eliminar Usuario" onClick={() => setShowDeleteUser(true)}></ButtonMain>
                </div>
            </div>
            <Modal show={showChangeUsername} onHide={() => setShowChangeUsername(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Modificar Nombre Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={changeUsernameState.visible} state={changeUsernameState.state} message={changeUsernameState.message}></AlertForm>
                    <InputModelMain type="text" placeholder="Usuario Actual" onChange={onchangeUsernameInput1}></InputModelMain>
                    <InputModelMain type="text" placeholder="Usuario Nuevo" onChange={onchangeUsernameInput2}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowChangeUsername(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={changeUsername}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showChangeUserProfilePic} onHide={() => setShowChangeUserProfilePic(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Modificar Imagen Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={changeImageState.visible} state={changeImageState.state} message={changeImageState.message}></AlertForm>
                    <InputModelMain type="file" placeholder="Imagen Nueva" onChange={onchangeImageInput1}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowChangeUserProfilePic(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={changeImage}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showChangeEmail} onHide={() => setShowChangeEmail(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Modificar Correo Electronico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={changeEmailState.visible} state={changeEmailState.state} message={changeEmailState.message}></AlertForm>
                    <InputModelMain type="text" placeholder="Correo Electronico Actual" onChange={onchangeEmailInput1}></InputModelMain>
                    <InputModelMain type="text" placeholder="Correo Electronico Nuevo" onChange={onchangeEmailInput2}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowChangeEmail(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={changeEmail}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showChangePassword} onHide={() => setShowChangePassword(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Modificar Contraseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={changePasswordState.visible} state={changePasswordState.state} message={changePasswordState.message}></AlertForm>
                    <InputModelMain type="password" placeholder="Contraseña Actual" onChange={onchangePasswordInput1}></InputModelMain>
                    <InputModelMain type="password" placeholder="Contraseña Nueva" onChange={onchangePasswordInput2}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowChangePassword(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={changePassword}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteDocs} onHide={() => setShowDeleteDocs(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Documentos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={deleteDocsState.visible} state={deleteDocsState.state} message={deleteDocsState.message}></AlertForm>
                    <p className="modal-body-p">¿Desea eliminar todos los documentos?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowDeleteDocs(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={deleteDocs}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeletePhotos} onHide={() => setShowDeletePhotos(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Fotos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={deletePhotosState.visible} state={deletePhotosState.state} message={deletePhotosState.message}></AlertForm>
                    <p className="modal-body-p">¿Desea eliminar todas las fotos?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowDeletePhotos(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={deletePhotos}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteMusic} onHide={() => setShowDeleteMusic(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Musica</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={deleteMusicState.visible} state={deleteMusicState.state} message={deleteMusicState.message}></AlertForm>
                    <p className="modal-body-p">¿Desea eliminar todas las canciones?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowDeleteMusic(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={deleteMusic}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteVideo} onHide={() => setShowDeleteVideo(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={deleteVideoState.visible} state={deleteVideoState.state} message={deleteVideoState.message}></AlertForm>
                    <p className="modal-body-p">¿Desea eliminar todos los videos?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowDeleteVideo(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={deleteVideos}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteFiles} onHide={() => setShowDeleteFiles(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Ficheros</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="modal-body-p">¿Desea eliminar todos los ficheros?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowDeleteFiles(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar"></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteUser} onHide={() => setShowDeleteUser(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="modal-body-p">¿Desea eliminar el usuario?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowDeleteUser(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar"></ButtonModelMain>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UserSettingsExplorer;