import {React, useState} from "react";

import "./UserSettingsExplorer.css";

import ButtonMain from "../../component/main/ButtonMain";
import { Modal } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import ButtonModelMain from "../../component/main/ButtonModelMain";
import InputModelMain from "../../component/main/InputModelMain";

function UserSettingsExplorer(){
    const [showChangeUsername, setShowChangeUsername] = useState(false);
    const [showChangeUserProfile, setShowChangeUserProfile] = useState(false);
    const [showChangeEmail, setShowChangeEmail] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showDeleteDocs, setShowDeleteDocs] = useState(false);
    const [showDeletePhotos, setShowDeletePhotos] = useState(false);
    const [showDeleteMusic, setShowDeleteMusic] = useState(false);
    const [showDeleteVideo, setShowDeleteVideo] = useState(false);
    const [showDeleteFiles, setShowDeleteFiles] = useState(false);
    const [showDeleteUser, setShowDeleteUser] = useState(false);
    return(
        <div className="main-usersettings-div-body">
            <div className="main-usersettings-div-userheader">
                <img src="https://campaigns.uthscsa.edu/social-media-guide/wp-content/uploads/sites/19/2017/11/320x320.png"></img>
                <h1>Usuario</h1>
            </div>
            <hr className="main-usersettings-div-body-hr"></hr>
            <div className="main-usersettings-div-userinfo">
                <h2>Informacion de Usuario</h2>
                <div className="main-usersettings-div-userinfo-info">
                    <h4>Usuario: <span>Usuario 1</span></h4>
                    <h4>ID: <span>1</span></h4>
                </div>
            </div>
            <div className="main-usersettings-div-usersettings">
                <h2>Ajustes de Usuario</h2>
                <div className="main-usersettings-div-usersettings-settings">
                    <ButtonMain text="Modificar Nombre Usuario" onClick={() => setShowChangeUsername(true)}></ButtonMain>
                    <ButtonMain text="Modificar Imagen Usuario"></ButtonMain>
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
                    <InputModelMain type="text" placeholder="Usuario Actual"></InputModelMain>
                    <InputModelMain type="text" placeholder="Usuario Nuevo"></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowChangeUsername(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar"></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showChangeEmail} onHide={() => setShowChangeEmail(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Modificar Correo Electronico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputModelMain type="text" placeholder="Correo Electronico Actual"></InputModelMain>
                    <InputModelMain type="text" placeholder="Correo Electronico Nuevo"></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowChangeEmail(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar"></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showChangePassword} onHide={() => setShowChangePassword(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Modificar Contraseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputModelMain type="password" placeholder="Contraseña Actual"></InputModelMain>
                    <InputModelMain type="password" placeholder="Contraseña Nueva"></InputModelMain>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowChangePassword(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar"></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteDocs} onHide={() => setShowDeleteDocs(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Documentos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="modal-body-p">¿Desea eliminar todos los documentos?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowDeleteDocs(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar"></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeletePhotos} onHide={() => setShowDeletePhotos(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Fotos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="modal-body-p">¿Desea eliminar todas las fotos?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowDeletePhotos(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar"></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteMusic} onHide={() => setShowDeleteMusic(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Musica</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="modal-body-p">¿Desea eliminar todas las canciones?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowDeleteMusic(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar"></ButtonModelMain>
                </Modal.Footer>
            </Modal>
            <Modal show={showDeleteVideo} onHide={() => setShowDeleteVideo(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Eliminar Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="modal-body-p">¿Desea eliminar todos los videos?</p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowDeleteVideo(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar"></ButtonModelMain>
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