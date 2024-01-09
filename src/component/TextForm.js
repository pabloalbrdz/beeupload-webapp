import React from "react";
import './TextForm.css';

function TextForm(props){
    return(
        <h2 datatext={props.text}>{props.text}</h2>
    );
}

export default TextForm;