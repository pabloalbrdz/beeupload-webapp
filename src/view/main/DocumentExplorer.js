import React, { useEffect } from "react";
import { UserController } from "../../controller/UserController";

function DocumentExplorer(){
    async function getDocumentFiles(){
        let data = await UserController.getAllUserDocuments(JSON.parse(sessionStorage.getItem("session")).id);
        console.log(data);
    }
    useEffect(() => {
        getDocumentFiles();
    }, []);
    return(
        <div>
            <h2>Documentos</h2>
        </div>
    );
}

export default DocumentExplorer;