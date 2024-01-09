import React from "react";
import './InputForm.css'

function InputForm(props){
    return(
        <div className="div-form">
            <input type={props.type} required></input>
            <span>{props.placeholder}</span>
        </div>
    );
}

export default InputForm;