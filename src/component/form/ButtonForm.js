import React from "react";
import './ButtonForm.css';

function ButtonForm(props){
    return(
        <button id="btn-form">{props.text}</button>
    );
}

export default ButtonForm;