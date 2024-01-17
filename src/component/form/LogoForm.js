import React from "react";
import './LogoForm.css';
import { CgBee } from "react-icons/cg";

function LogoForm(props){
    return(
        <div className="logo-form-div">
            <CgBee className='logo-form-icon neon' size={props.size}/>
            <div className='logo-form-title'>
                <span>B</span>
                <span>e</span>
                <span>e</span>
                <span>U</span>
                <span>p</span>
                <span>l</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
            </div>
        </div>
    );
}

export default LogoForm;