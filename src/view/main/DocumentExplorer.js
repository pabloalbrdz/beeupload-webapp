import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context/AppContext";

import "./DocumentExplorer.css";

function DocumentExplorer(){

    const context = useContext(AppContext);

    useEffect(() => {
        if (sessionStorage.getItem("session") != undefined){
            context.getDocument();
        }
    }, []);

    return(
        <div className="main-documentexplorer-div-body d-flex flex-column text-center gap-5">
            <h2 className="mt-4">Documentos</h2>
            <div className="row d-flex flex-row gap-1 m-5">
                {context.documents}
            </div>
        </div>
    ); 
      
}

export default DocumentExplorer;