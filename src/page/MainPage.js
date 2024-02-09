import React from "react";
import "./MainPage.css";

import Sidebar from "../component/main/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";

function MainPage({closeSession}){

    function closeSessionResponse(){
        closeSession();
    }

    return(
        <div className="main-page d-flex">
            <Sidebar closeSessionAction={closeSessionResponse}></Sidebar>
            <div className="main p-3">
                <div className="text-center">
                    <h1>Pagina</h1>
                </div>
            </div>
        </div>
    );
}

export default MainPage;

