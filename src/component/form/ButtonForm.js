import React from "react";

import './ButtonForm.css';

function ButtonForm(props){
    return(
        <button className="button-form-btn" onClick={props.onClick}>{props.text}</button>
    );
}

export default ButtonForm;