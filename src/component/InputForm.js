import React from "react";
import './InputForm.css'

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function InputForm(props){
    let icon;
    if (props.icon === "user"){
        icon = <FaUser className="icon"/>;
    }else if(props.icon === "email"){
        icon = <MdEmail className="icon"/>;
    }else if(props.icon === "password"){
        icon = <RiLockPasswordFill className="icon"/>;
    }
    return(
        <div className="div-form">
            <input type={props.type} required />
            <span>{props.placeholder}</span>
            <button className="btnIcon" disabled>{icon}</button>
        </div>
    );
}

export default InputForm;