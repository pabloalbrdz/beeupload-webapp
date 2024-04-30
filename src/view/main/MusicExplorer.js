import React, { useContext, useEffect, useState } from "react";
import $ from 'jquery';

import Player from "@madzadev/audio-player";
import AlertForm from "../../component/form/AlertForm";
import ButtonMain from "../../component/main/ButtonMain";
import ButtonModelMain from "../../component/main/ButtonModelMain";
import { Modal } from "react-bootstrap";

import { AppContext } from "../../context/AppContext";


import "@madzadev/audio-player/dist/index.css";
import "./MusicExplorer.css";

function MusicExplorer(){
    
    const context = useContext(AppContext);

    const [showMusicListModal, setShowMusicListModal] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("session") != undefined){
            context.getMusic();
        }
    }, []);

    if (context.music.length == 0){
        return(
            <div className="main-musicexplorer-div-body d-flex flex-column text-center gap-5">
                <h2 className="mt-4">Musica</h2>
                <div className="row d-flex flex-row gap-1 m-5" />
            </div>
        );
    }else{
        const colors = {
            tagsBackground: "#3e32e4",
            tagsText: "#ffffff",
            tagsBackgroundHoverActive: "#6e65f1",
            tagsTextHoverActive: "#ffffff",
            searchBackground: "#18191f",
            searchText: "#ffffff",
            searchPlaceHolder: "#575a77",
            playerBackground: "#18191f",
            titleColor: "#ffffff",
            timeColor: "#ffffff",
            progressSlider: "#fff86A",
            progressUsed: "#ffffff",
            progressLeft: "#151616",
            bufferLoaded: "#1f212b",
            volumeSlider: "#fff86A",
            volumeUsed: "#ffffff",
            volumeLeft: "#151616",
            playlistBackground: "#18191f",
            playlistText: "#ffffff",
            playlistBackgroundHoverActive: "#18191f",
            playlistTextHoverActive: "#fff86A",
        };
        return(
            <>
                <div className="main-musicexplorer-div-body d-flex flex-column text-center">
                    <h2 className="mt-4">Musica</h2>
                    <ButtonMain text="Gestionar Musica" onClick={() => setShowMusicListModal(true)}></ButtonMain>
                    <div className="main-musicexplorer-div-player row d-flex flex-row m-5">
                        <Player
                        trackList={context.music}
                        showPlaylist={true}
                        autoPlayNextTrack={true}
                        customColorScheme={colors}>
                        </Player>
                    </div>
                </div>
                <Modal className="filemusic-preview-div-modal justify-content-center align-items-center" show={showMusicListModal} onHide={() => setShowMusicListModal(false)} dialogClassName="filemusic-preview-div-modal-dialog">
                    <Modal.Body className="filemusic-preview-div-modal-body">
                        <div className="d-flex flex-column gap-1">
                            {context.musicList}
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        );
    } 
    
}

export default MusicExplorer;