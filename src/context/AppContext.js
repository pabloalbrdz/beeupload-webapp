import { createContext, useState, useEffect } from "react";

import FilePreview from "../component/viewfiles/FilePreview";

import { UserController } from "../controller/UserController";

import fileserverSettings from "../settings/fileserverSettings";

export const AppContext = createContext();

export function AppContextProvider(props){

    const [getDocuments, setGetDocuments] = useState([]);

    async function getDocumentFiles(){
        if (sessionStorage.getItem("session") != undefined){
            let data = await UserController.getAllUserDocuments(JSON.parse(sessionStorage.getItem("session")).id);
            let arrayDocument = new Array();
            for (let document of data){
                arrayDocument.push(<FilePreview type="document" id={document.id} src={`${fileserverSettings.USER_FOLDER_ROUTE}/${document.path}`} title={document.name}></FilePreview>)
            }
            setGetDocuments(arrayDocument);     
        }   
    }

    const [getMusic, setGetMusic] = useState([]);

    async function getMusicFiles(){
        if (sessionStorage.getItem("session") != undefined){
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
            setGetMusic(arrayMusic);
        }
    }

    const [getPhotos, setGetPhotos] = useState([]);

    async function getPhotoFiles(){
        if (sessionStorage.getItem("session") != undefined){
            let data = await UserController.getAllUserPhotos(JSON.parse(sessionStorage.getItem("session")).id);
            let arrayImg = new Array();
            for (let image of data){
                arrayImg.push(
                    {
                        original: `${fileserverSettings.USER_FOLDER_ROUTE}/${image.path}`,
                        thumbnail: `${fileserverSettings.USER_FOLDER_ROUTE}/${image.path}`
                    }
                );
            }
            setGetPhotos(arrayImg);
        }
    }

    const [getVideos, setGetVideos] = useState([]);

    async function getVideoFiles(){
        if (sessionStorage.getItem("session") != undefined){
            let data = await UserController.getAllUserVideos(JSON.parse(sessionStorage.getItem("session")).id);
            let arrayVideo = new Array();
            for (let video of data){
                arrayVideo.push(<FilePreview type="video" id={video.id} src={`${fileserverSettings.USER_FOLDER_ROUTE}/${video.path}`} title={video.name}></FilePreview>)
            }
            setGetVideos(arrayVideo);
        }
    }

    useEffect(() => {
        getDocumentFiles();
        getMusicFiles();
        getPhotoFiles();
        getVideoFiles();
    }, [])

    return(
        <AppContext.Provider value={{documents: getDocuments, getDocument: getDocumentFiles, music: getMusic, getMusic: getMusicFiles, photos: getPhotos, getPhotos: getPhotoFiles, videos: getVideos, getVideos: getVideoFiles}}>
            {props.children}
        </AppContext.Provider>
    );

}