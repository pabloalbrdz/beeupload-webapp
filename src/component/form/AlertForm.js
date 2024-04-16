import React from "react";

import "./AlertForm.css";

function AlertForm(props){
    return(
        <div className={`alert-form-div ${props.visible} ${props.state}`}>
            {props.message}
        </div>
    );
}

export default AlertForm;