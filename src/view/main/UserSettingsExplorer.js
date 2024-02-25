import {React, useState} from "react";

import "./UserSettingsExplorer.css";

import "bootstrap/dist/css/bootstrap.min.css";

function UserSettingsExplorer(){
    return(
        <div className="main-usersettings-div-body">
            <div className="main-usersettings-div-userheader">
                <img src="https://campaigns.uthscsa.edu/social-media-guide/wp-content/uploads/sites/19/2017/11/320x320.png"></img>
                <h1>Usuario</h1>
            </div>
            <hr></hr>
            <div className="main-usersettings-div-userinfo">
                <h2>Informacion de Usuario</h2>
                <div className="main-usersettings-div-userinfo-info d-flex flex-sm-column flex-md-row">
                    <h4>Usuario: <span className="main-usersettings-div-userinfo-info-span">Usuario 1</span></h4>
                    <h4>ID: <span className="main-usersettings-div-userinfo-info-span">1</span></h4>
                </div>
            </div>
            <div className="main-usersettings-div-usersettings">
                <h2>Ajustes de Usuario</h2>
                <div className="main-usersettings-div-usersettings-settings d-flex flex-sm-column flex-md-row">
                    <button>Modificar Nombre Usuario</button>
                    <button>Modificar Imagen Usuario</button>
                    <button>Modificar Correo Electronico</button>
                    <button>Modificar Contraseña</button>
                </div>
            </div>
            <div className="main-usersettings-div-filesettings">
                <h2>Ajustes de Ficheros</h2>
                <div className="main-usersettings-div-filesettings-settings d-flex flex-sm-column flex-md-row">
                    <button>Eliminar Documentos (todos)</button>
                    <button>Eliminar Imagenes (todos)</button>
                    <button>Eliminar Musica (todos)</button>
                    <button>Eliminar Videos (todos)</button>
                </div>
            </div>
            <div className="main-usersettings-div-userdelete">
                <h2>Acciones de Eliminacion</h2>
                <div className="main-usersettings-div-userdelete-settings d-flex flex-sm-column flex-md-row">
                    <button>Eliminar Ficheros (todos)</button>
                    <button>Eliminar Usuario</button>
                </div>
            </div>
        </div>
    );
}

export default UserSettingsExplorer;