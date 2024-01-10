import React from "react";
import './TextAnimatedForm.css';

function TextAnimatedForm(props){
    return(
        <h2 datatext={props.text}>{props.text}</h2>
    );
}

export default TextAnimatedForm;