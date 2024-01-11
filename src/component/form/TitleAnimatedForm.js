import React from "react";
import './TitleAnimatedForm.css';

function TitleAnimatedForm(props){
    return(
        <h2 id="titleAnimatedForm" datatext={props.text}>{props.text}</h2>
    );
}

export default TitleAnimatedForm;