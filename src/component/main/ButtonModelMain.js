import React from "react";
import './ButtonModelMain.css';

function ButtonModelMain(props){
    return(
        <button className="button-model-main-btn" onClick={props.onClick}>{props.text}</button>
    );
}

export default ButtonModelMain;