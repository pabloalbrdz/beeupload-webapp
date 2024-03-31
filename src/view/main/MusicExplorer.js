import React, { useEffect, useState } from "react";
import { UserController } from "../../controller/UserController";
import "./MusicExplorer.css";
import fileserverSettings from "../../settings/fileserverSettings";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

function MusicExplorer(){
    const [getAllMusic, setGetAllMusic] = useState([]);
    async function getMusicFiles(){
        let data = await UserController.getAllUserMusic(JSON.parse(sessionStorage.getItem("session")).id);
        let arrayMusic = new Array();
        for (let music of data){
            arrayMusic.push(
                {
                    url: `${fileserverSettings.USER_FOLDER_ROUTE}/${music.path}`,
                    title: `${music.name} - ${music.artist}`,
                    tags: []
                }
            );
        }
        setGetAllMusic(arrayMusic);
    }
    useEffect(() => {
        getMusicFiles();
    }, []);
    if (getAllMusic.length == 0){
        return(
            <div className="main-musicexplorer-div-body d-flex flex-column text-center gap-5">
                <h2 className="mt-4">Musica</h2>
                <div className="row d-flex flex-row gap-1 m-5">
                </div>
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
                      trackList={getAllMusic}
                      includeSearch={true}
                      showPlaylist={true}
                      sortTracks={true}
                      autoPlayNextTrack={true}
                      customColorScheme={colors}>
                    </Player>
                </div>
            </div>
        );
    }
}

export default MusicExplorer;