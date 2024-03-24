import React, { useEffect, useState } from "react";
import { UserController } from "../../controller/UserController";
import "./DocumentExplorer.css";
import FilePreview from "../../component/viewfiles/FilePreview";
import fileserverSettings from "../../settings/fileserverSettings";

function DocumentExplorer(){
    const [getAllDocuments, setGetAllDocuments] = useState([]);
    async function getDocumentFiles(){
        let data = await UserController.getAllUserDocuments(JSON.parse(sessionStorage.getItem("session")).id);
        let arrayDocument = new Array();
        for (let document of data){
            arrayDocument.push(<FilePreview type="document" src={`${fileserverSettings.USER_FOLDER_ROUTE}/${document.path}`} title={document.name}></FilePreview>)
        }
        setGetAllDocuments(arrayDocument);
    }
    useEffect(() => {
        getDocumentFiles();
    }, []);
    return(
        <div className="main-documentexplorer-div-body d-flex flex-column text-center gap-5">
            <h2 className="mt-4">Documentos</h2>
            <div className="row d-flex flex-row gap-5 m-5">
                {getAllDocuments}
            </div>
        </div>
    );
}

export default DocumentExplorer;