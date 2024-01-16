import React from "react";
import './LogoForm.css';
import { CgBee } from "react-icons/cg";

function LogoForm(props){
    return(
        <div className="app-icon-div">
            <CgBee className='app-icon neon' size={props.size}/>
            <div className='app-icon-title'>
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