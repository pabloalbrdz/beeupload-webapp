import React from "react";

import './TextDescriptionForm.css';

function TextDescriptionForm(props){
    return (
        <div>
            <h2 className="text-description-form-h2">{props.text}</h2>
        </div>
    );
}

export default TextDescriptionForm;