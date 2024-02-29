import React from "react";
import './InputModelMain.css'

function InputModelMain(props){
    return(
        <div className="input-model-main-div">
            <input type={props.type} onChange={props.onChange} required />
            <span>{props.placeholder}</span>
        </div>
    );
}

export default InputModelMain;