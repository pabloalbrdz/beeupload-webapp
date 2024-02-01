import React from "react";
import './InputForm.css'

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function InputForm(props){

    let icon;
    if (props.icon === "user"){
        icon = <FaUser className="input-form-icon"/>;
    }else if(props.icon === "email"){
        icon = <MdEmail className="input-form-icon"/>;
    }else if(props.icon === "password"){
        icon = <RiLockPasswordFill className="input-form-icon"/>;
    }
    
    return(
        <div className="input-form-div">
            <input type={props.type} onChange={props.onChange} required />
            <span>{props.placeholder}</span>
            <button className="input-form-btn" disabled>{icon}</button>
        </div>
    );
}

export default InputForm;