import React from "react";

import './ButtonMain.css';

function ButtonMain(props){
    return(
        <button className="button-main-btn align-self-center" onClick={props.onClick}>{props.text}</button>
    );
}

export default ButtonMain;