import React from "react";
import "./Sidebar.css";

import { CgBee } from "react-icons/cg";
import { FaFileAlt, FaMusic, FaImage, FaVideo, FaSearch, FaRegArrowAltCircleUp, FaUserCircle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { RiLogoutCircleRFill } from "react-icons/ri";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function Sidebar({documentExplorer, musicExplorer, photoExplorer, videoExplorer, closeSessionAction}){
    return(
        <aside className="sidebar-main-aside accordion d-flex flex-column justify-content-between" id="sidebar-main">
            <div className="sidebar-main-div-logo">
                <a>
                    <CgBee size={46}/>
                </a>
            </div>
            <div className="d-flex">
                <ul className="sidebar-main-nav-main list-unstyled">
                    <li className="sidebar-main-nav-item accordion-item">
                        <a className="sidebar-main-nav-link accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseDoc" aria-expanded="false" aria-controls="collapseDoc">
                            <FaFileAlt size={34}/>
                        </a>
                        <ul id="collapseDoc" className="sidebar-main-nav-dropdown list-unstyled accordion-collapse collapse" data-bs-parent="#sidebar-main">
                            <li className="sidebar-main-nav-item" onClick={documentExplorer}>
                                <a className="sidebar-main-nav-link">
                                    <FaSearch size={21}/>
                                </a>
                            </li>
                            <li className="sidebar-main-nav-item">
                                <a className="sidebar-main-nav-link">
                                    <FaRegArrowAltCircleUp size={21}/>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-main-nav-item accordion-item">
                        <a className="sidebar-main-nav-link accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseMusic" aria-expanded="false" aria-controls="collapseMusic">
                            <FaMusic size={34}/>
                        </a>
                        <ul id="collapseMusic" className="sidebar-main-nav-dropdown list-unstyled accordion-collapse collapse" data-bs-parent="#sidebar-main">
                            <li className="sidebar-main-nav-item" onClick={musicExplorer}>
                                <a className="sidebar-main-nav-link">
                                    <FaSearch size={21}/>
                                </a>
                            </li>
                            <li className="sidebar-main-nav-item">
                                <a className="sidebar-main-nav-link">
                                    <FaRegArrowAltCircleUp size={21}/>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-main-nav-item accordion-item">
                        <a className="sidebar-main-nav-link accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsePhoto" aria-expanded="false" aria-controls="collapsePhoto">
                            <FaImage size={34}/>
                        </a>
                        <ul id="collapsePhoto" className="sidebar-main-nav-dropdown list-unstyled accordion-collapse collapse" data-bs-parent="#sidebar-main">
                            <li className="sidebar-main-nav-item" onClick={photoExplorer}>
                                <a className="sidebar-main-nav-link">
                                    <FaSearch size={21}/>
                                </a>
                            </li>
                            <li className="sidebar-main-nav-item">
                                <a className="sidebar-main-nav-link">
                                    <FaRegArrowAltCircleUp size={21}/>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-main-nav-item accordion-item">
                        <a className="sidebar-main-nav-link accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseVideo" aria-expanded="false" aria-controls="collapseVideo">
                            <FaVideo size={34}/>
                        </a>
                        <ul id="collapseVideo" className="sidebar-main-nav-dropdown list-unstyled accordion-collapse collapse" data-bs-parent="#sidebar-main">
                            <li className="sidebar-main-nav-item" onClick={videoExplorer}>
                                <a className="sidebar-main-nav-link">
                                    <FaSearch size={21}/>
                                </a>
                            </li>
                            <li className="sidebar-main-nav-item">
                                <a className="sidebar-main-nav-link">
                                    <FaRegArrowAltCircleUp size={21}/>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="sidebar-main-nav-item accordion-item">
                <a className="sidebar-main-nav-link accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseProfile" aria-expanded="false" aria-controls="collapseProfile">
                    <FaUserCircle size={34}/>
                </a>
                <ul id="collapseProfile" className="sidebar-main-nav-dropdown list-unstyled accordion-collapse collapse" data-bs-parent="#sidebar-main">
                    <li className="sidebar-main-nav-item">
                        <a className="sidebar-main-nav-link">
                            <IoIosSettings size={28}/>
                        </a>
                    </li>
                    <li className="sidebar-main-nav-item">
                        <a className="sidebar-main-nav-link" onClick={closeSessionAction}>
                            <RiLogoutCircleRFill size={28}/>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;