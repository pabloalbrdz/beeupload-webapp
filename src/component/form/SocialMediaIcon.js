import React from "react";
import "./SocialMediaIcon.css";

import { FaGoogle } from "react-icons/fa";

function SocialMediaIcon(){
    return(
        <button className="social-media-btn">
            <FaGoogle className="social-media-icon"/>
        </button>
    );
}

export default SocialMediaIcon;