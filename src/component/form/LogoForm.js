import React from "react";
import './LogoForm.css';
import { CgBee } from "react-icons/cg";

function LogoForm(props){
    return(
        <div className="app-icon-div">
            <CgBee className='app-icon neon' size={props.size}/>
        </div>
    );
}

export default LogoForm;