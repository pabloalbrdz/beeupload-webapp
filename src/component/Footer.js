import React from "react";
import './Footer.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <footer className="footer w-100 mt-auto d-flex flex-row justify-content-center">
            <p>&copy; Copyright 2024</p>
            <p>|</p>
            <p>
                <FaGithub /> pabloalbrdz
            </p>
        </footer>
    );
}

export default Footer;