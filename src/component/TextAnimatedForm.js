import React from "react";
import './TextAnimatedForm.css';

function TextAnimatedForm(props){
    return(
        <p datatext={props.text}>{props.text}</p>
    );
}

export default TextAnimatedForm;