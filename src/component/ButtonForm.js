import React from "react";
import './ButtonForm.css';

function ButtonForm(props){
    return(
        <button>{props.text}</button>
    );
}

export default ButtonForm;