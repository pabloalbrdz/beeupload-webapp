import React, { useEffect } from "react";
import { UserController } from "../../controller/UserController";
import "./DocumentExplorer.css";

function DocumentExplorer(){
    async function getDocumentFiles(){
        let data = await UserController.getAllUserDocuments(JSON.parse(sessionStorage.getItem("session")).id);
        console.log(data);
    }
    useEffect(() => {
        getDocumentFiles();
    }, []);
    return(
        <div className="main-documentexplorer-div-body d-flex flex-column text-center gap-5">
            <h2 className="mt-4">Documentos</h2>
            <div className="row d-flex flex-row gap-5 m-5">
                
            </div>
        </div>
    );
}

export default DocumentExplorer;