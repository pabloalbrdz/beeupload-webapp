import {React, useEffect, useState} from "react";

import ButtonMain from "../../component/main/ButtonMain";
import ButtonModelMain from "../../component/main/ButtonModelMain";
import InputModelMain from "../../component/main/InputModelMain";
import AlertForm from "../../component/form/AlertForm";

import { Modal } from "react-bootstrap";

import { UserController } from "../../controller/UserController";

import "bootstrap/dist/css/bootstrap.min.css";
import "./UserSettingsExplorer.css";

function UserSettingsExplorer(){
    const [showChangeUsername, setShowChangeUsername] = useState(false);
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
        let responseUsername = await UserController.getUsername(JSON.parse(sessionStorage.getItem("session")).id);
        setUsername(responseUsername);
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
        let changedUsername = await UserController.changeUsername(JSON.parse(sessionStorage.getItem("session")).id, changeUsernameInput1, changeUsernameInput2, setChangeUsernameState, JSON.parse(sessionStorage.getItem("session")).token);
        if (changedUsername){
            setTimeout(function(){
                setShowChangeUsername(false);
                setChangeUsernameState({"visible": "alert-form-hidden", "state": "", "message": ""});
            }, 2000);
            getUsername();
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
        let changedEmail = await UserController.changeEmail(JSON.parse(sessionStorage.getItem("session")).id, changeEmailInput1, changeEmailInput2, setChangeEmailState, JSON.parse(sessionStorage.getItem("session")).token);
        if (changedEmail){
            setTimeout(function(){
                setShowChangeEmail(false);
                setChangeEmailState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
                setChangeEmailInput1('');
                setChangeEmailInput2('');
            }, 2000);  
        }
    };

    const [changePasswordInput1, setChangePasswordInput1] = useState('');
    const [changePasswordInput2, setChangePasswordInput2] = useState('');
    const [changePasswordState, setChangePasswordState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function changePassword(e){
        e.preventDefault();
        let changedPassword = await UserController.changePassword(JSON.parse(sessionStorage.getItem("session")).id, changePasswordInput1, changePasswordInput2, setChangePasswordState, JSON.parse(sessionStorage.getItem("session")).token);
        if (changedPassword){
            setTimeout(function(){
                setShowChangePassword(false);
                setChangePasswordState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
                setChangePasswordInput1('');
                setChangePasswordInput2('');
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
        let deletedDocs = await UserController.deleteAllUserDocs(JSON.parse(sessionStorage.getItem("session")).id, setDeleteDocsState, JSON.parse(sessionStorage.getItem("session")).token);
        if (deletedDocs){
            setTimeout(function(){
                setShowDeleteDocs(false);
                setDeleteDocsState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
            }, 2000);  
        }
    };

    
    const [deleteMusicState, setDeleteMusicState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function deleteMusic(e){
        e.preventDefault();
        let deletedMusic = await UserController.deleteAllUserMusic(JSON.parse(sessionStorage.getItem("session")).id, setDeleteMusicState, JSON.parse(sessionStorage.getItem("session")).token);
        if (deletedMusic){
            setTimeout(function(){
                setShowDeleteMusic(false);
                setDeleteMusicState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
            }, 2000);  
        }
    };

    const [deletePhotosState, setDeletePhotosState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function deletePhotos(e){
        e.preventDefault();
        let deletedPhotos = await UserController.deleteAllUserPhotos(JSON.parse(sessionStorage.getItem("session")).id, setDeletePhotosState, JSON.parse(sessionStorage.getItem("session")).token);
        if (deletedPhotos){
            setTimeout(function(){
                setShowDeletePhotos(false);
                setDeletePhotosState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
            }, 2000);  
        }
    };

    const [deleteVideoState, setDeleteVideoState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function deleteVideos(e){
        e.preventDefault();
        let deletedVideo = await UserController.deleteAllUserVideos(JSON.parse(sessionStorage.getItem("session")).id, setDeleteVideoState, JSON.parse(sessionStorage.getItem("session")).token);
        if (deletedVideo){
            setTimeout(function(){
                setShowDeleteVideo(false);
                setDeleteVideoState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
            }, 2000);  
        }
    };

    const [deleteFilesState, setDeleteFileState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function deleteFiles(e){
        e.preventDefault();
        let deletedFiles = await UserController.deleteAllUserFiles(JSON.parse(sessionStorage.getItem("session")).id, setDeleteFileState, JSON.parse(sessionStorage.getItem("session")).token);
        if (deletedFiles){
            setTimeout(function(){
                setShowDeleteFiles(false);
                setDeleteFileState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
            }, 2000);  
        }
    }

    const [deleteAccountState, setDeleteAccountState] = useState({"visible": "alert-form-hidden", "state": "", "message": ""});
    async function deleteAccount(e){
        e.preventDefault();
        let deletedUser = await UserController.deleteUser(JSON.parse(sessionStorage.getItem("session")).id, setDeleteAccountState, JSON.parse(sessionStorage.getItem("session")).token);
        if (deletedUser){
            setTimeout(function(){
                setShowDeleteUser(false);
                setDeleteAccountState({"visible": "alert-form-hidden", "state": "", "message": ""}); 
            }, 2000);  
        }
    }

    useEffect(() => {
      getUsername();
      getId();
    }, []);

    return(
        <div className="main-usersettings-div-body">
            <div className="main-usersettings-div-userheader mt-3">
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
            <Modal show={showChangeUsername} onHide={() => {setShowChangeUsername(false); setChangeUsernameState({"visible": "alert-form-hidden", "state": "", "message": ""});}}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Modificar Nombre Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={changeUsernameState.visible} state={changeUsernameState.state} message={changeUsernameState.message}></AlertForm>
                    <InputModelMain type="text" placeholder="Usuario Actual" onChange={onchangeUsernameInput1}></InputModelMain>
                    <InputModelMain type="text" placeholder="Usuario Nuevo" onChange={onchangeUsernameInput2}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => {setShowChangeUsername(false); setChangeUsernameState({"visible": "alert-form-hidden", "state": "", "message": ""});}}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={changeUsername}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showChangeEmail} onHide={() => {setShowChangeEmail(false); setChangeEmailState({"visible": "alert-form-hidden", "state": "", "message": ""});}}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Modificar Correo Electronico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={changeEmailState.visible} state={changeEmailState.state} message={changeEmailState.message}></AlertForm>
                    <InputModelMain type="text" placeholder="Correo Electronico Actual" onChange={onchangeEmailInput1}></InputModelMain>
                    <InputModelMain type="text" placeholder="Correo Electronico Nuevo" onChange={onchangeEmailInput2}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => {setShowChangeEmail(false); setChangeEmailState({"visible": "alert-form-hidden", "state": "", "message": ""});}}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={changeEmail}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showChangePassword} onHide={() => {setShowChangePassword(false); setChangePasswordState({"visible": "alert-form-hidden", "state": "", "message": ""});}}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Modificar Contraseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={changePasswordState.visible} state={changePasswordState.state} message={changePasswordState.message}></AlertForm>
                    <InputModelMain type="password" placeholder="Contraseña Actual" onChange={onchangePasswordInput1}></InputModelMain>
                    <InputModelMain type="password" placeholder="Contraseña Nueva" onChange={onchangePasswordInput2}></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => {setShowChangePassword(false); setChangePasswordState({"visible": "alert-form-hidden", "state": "", "message": ""});}}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={changePassword}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteDocs} onHide={() => {setShowDeleteDocs(false); setDeleteDocsState({"visible": "alert-form-hidden", "state": "", "message": ""});}}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Documentos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={deleteDocsState.visible} state={deleteDocsState.state} message={deleteDocsState.message}></AlertForm>
                    <p className="modal-body-p">¿Desea eliminar todos los documentos?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => {setShowDeleteDocs(false); setDeleteDocsState({"visible": "alert-form-hidden", "state": "", "message": ""});}}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={deleteDocs}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeletePhotos} onHide={() => {setShowDeletePhotos(false); setDeletePhotosState({"visible": "alert-form-hidden", "state": "", "message": ""});}}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Fotos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={deletePhotosState.visible} state={deletePhotosState.state} message={deletePhotosState.message}></AlertForm>
                    <p className="modal-body-p">¿Desea eliminar todas las fotos?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => {setShowDeletePhotos(false); setDeletePhotosState({"visible": "alert-form-hidden", "state": "", "message": ""});}}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={deletePhotos}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteMusic} onHide={() => {setShowDeleteMusic(false); setDeleteMusicState({"visible": "alert-form-hidden", "state": "", "message": ""})}}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Musica</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={deleteMusicState.visible} state={deleteMusicState.state} message={deleteMusicState.message}></AlertForm>
                    <p className="modal-body-p">¿Desea eliminar todas las canciones?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => {setShowDeleteMusic(false); setDeleteMusicState({"visible": "alert-form-hidden", "state": "", "message": ""})}}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={deleteMusic}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteVideo} onHide={() => {setShowDeleteVideo(false); setDeleteVideoState({"visible": "alert-form-hidden", "state": "", "message": ""}); }}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={deleteVideoState.visible} state={deleteVideoState.state} message={deleteVideoState.message}></AlertForm>
                    <p className="modal-body-p">¿Desea eliminar todos los videos?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => {setShowDeleteVideo(false); setDeleteVideoState({"visible": "alert-form-hidden", "state": "", "message": ""}); }}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={deleteVideos}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteFiles} onHide={() => {setShowDeleteFiles(false); setDeleteFileState({"visible": "alert-form-hidden", "state": "", "message": ""}); }}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Ficheros</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={deleteFilesState.visible} state={deleteFilesState.state} message={deleteFilesState.message}></AlertForm>
                    <p className="modal-body-p">¿Desea eliminar todos los ficheros?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => {setShowDeleteFiles(false); setDeleteFileState({"visible": "alert-form-hidden", "state": "", "message": ""}); }}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={deleteFiles}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteUser} onHide={() => {setShowDeleteUser(false); setDeleteAccountState({"visible": "alert-form-hidden", "state": "", "message": ""});}}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertForm visible={deleteAccountState.visible} state={deleteAccountState.state} message={deleteAccountState.message}></AlertForm>
                    <p className="modal-body-p">¿Desea eliminar el usuario?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => {setShowDeleteUser(false); setDeleteAccountState({"visible": "alert-form-hidden", "state": "", "message": ""});}}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar" onClick={deleteAccount}></ButtonModelMain>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default UserSettingsExplorer;