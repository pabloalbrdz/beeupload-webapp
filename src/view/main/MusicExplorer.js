import React, { useContext, useEffect } from "react";
import $ from 'jquery';
import Player from "@madzadev/audio-player";

import { AppContext } from "../../context/AppContext";

import "@madzadev/audio-player/dist/index.css";
import "./MusicExplorer.css";

function MusicExplorer(){
    
    const context = useContext(AppContext);

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
            progressSlider: "#3e32e4",
            progressUsed: "#ffffff",
            progressLeft: "#151616",
            bufferLoaded: "#1f212b",
            volumeSlider: "#3e32e4",
            volumeUsed: "#ffffff",
            volumeLeft: "#151616",
            playlistBackground: "#18191f",
            playlistText: "#575a77",
            playlistBackgroundHoverActive: "#18191f",
            playlistTextHoverActive: "#ffffff",
        };
        return(
            <div className="main-musicexplorer-div-body d-flex flex-column text-center gap-5">
                <h2 className="mt-4">Musica</h2>
                <div className="row d-flex flex-row gap-1 m-5">
                    <Player
                    trackList={context.music}
                    showPlaylist={true}
                    autoPlayNextTrack={true}
                    customColorScheme={colors}>
                    </Player>
                </div>
            </div>
        );
    } 
    
}

export default MusicExplorer;