import React from "react";
import "./AlertForm.css";

function AlertForm(props){
    return(
        <div className={`alert-form-div ${props.visible} ${props.state}`}>
            <p>{props.message}</p>
        </div>
    );
}

export default AlertForm;