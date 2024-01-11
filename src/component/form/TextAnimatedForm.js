import React from "react";
import './TextAnimatedForm.css'

function TextAnimatedForm(props){
    return(
        <div>
            <h3 className="textanimatedform-normal">{props.normalText}<span className="textanimatedform-important">{props.importantText}</span></h3>
        </div>
    );
}

export default TextAnimatedForm;