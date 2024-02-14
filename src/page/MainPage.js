import React from "react";
import "./MainPage.css";

import Sidebar from "../component/main/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";

function MainPage(){
    return(
        <div className="main-page d-flex">
            <Sidebar></Sidebar>
            <div className="main p-3">
                <div className="text-center">
                    
                </div>
            </div>
        </div>
    );
}

export default MainPage;

