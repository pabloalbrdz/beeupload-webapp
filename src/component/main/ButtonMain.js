import React from "react";
import './ButtonMain.css';

function ButtonMain(props){
    return(
        <button className="button-main-btn" onClick={props.onClick}>{props.text}</button>
    );
}

export default ButtonMain;