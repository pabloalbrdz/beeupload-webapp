import {React, useState} from "react";

import "./UserSettingsExplorer.css";

import ButtonMain from "../../component/main/ButtonMain";
import { Modal } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import ButtonModelMain from "../../component/main/ButtonModelMain";

function UserSettingsExplorer(){
    const [showChangeUsername, setShowChangeUsername] = useState(false);
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
                    <ButtonMain text="Modificar Correo Electronico"></ButtonMain>
                    <ButtonMain text="Modificar Contraseña"></ButtonMain>
                </div>
            </div>
            <div className="main-usersettings-div-filesettings">
                <h2>Ajustes de Ficheros</h2>
                <div className="main-usersettings-div-filesettings-settings">
                    <ButtonMain text="Eliminar Documentos (todos)"></ButtonMain>
                    <ButtonMain text="Eliminar Imagenes (todos)"></ButtonMain>
                    <ButtonMain text="Eliminar Musica (todos)"></ButtonMain>
                    <ButtonMain text="Eliminar Videos (todos)"></ButtonMain>
                </div>
            </div>
            <div className="main-usersettings-div-userdelete">
                <h2>Acciones de Eliminacion</h2>
                <div className="main-usersettings-div-userdelete-settings">
                    <ButtonMain text="Eliminar Ficheros (todos)"></ButtonMain>
                    <ButtonMain text="Eliminar Usuario"></ButtonMain>
                </div>
            </div>
            <Modal show={showChangeUsername} onHide={() => setShowChangeUsername(false)}>
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title>Modificar Nombre Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Usuario Actual</label>
                    <input type="text"></input>
                    <br></br>
                    <label>Usuario Nuevo</label>
                    <input type="text"></input>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <ButtonModelMain text="Salir" onClick={() => setShowChangeUsername(false)}></ButtonModelMain>
                    <ButtonModelMain text="Aceptar"></ButtonModelMain>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UserSettingsExplorer;