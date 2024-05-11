import { createContext, useState, useEffect } from "react";

import FilePreview from "../component/viewfiles/FilePreview";

import { UserController } from "../controller/UserController";

import fileserverSettings from "../settings/fileserverSettings";

export const AppContext = createContext();

export function AppContextProvider(props){

    const [getDocuments, setGetDocuments] = useState([]);

    async function getDocumentFiles(){
        if (sessionStorage.getItem("session") != undefined){
            let data = await UserController.getAllUserDocuments(JSON.parse(sessionStorage.getItem("session")).id, JSON.parse(sessionStorage.getItem("session")).token);
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
            let data = await UserController.getAllUserMusic(JSON.parse(sessionStorage.getItem("session")).id, JSON.parse(sessionStorage.getItem("session")).token);
            let arrayMusic = new Array();
            for (let music of data){
                arrayMusic.push(
                    {
                        id: music.id,
                        url: `${fileserverSettings.USER_FOLDER_ROUTE}/${music.path}`,
                        title: `${music.name} - ${music.artist}`,
                        tags: []
                    }
                );
            }
            setGetMusic(arrayMusic);
            await getMusicFilesList();
        }
    }

    const [getMusicList, setGetMusicList] = useState([]);

    async function getMusicFilesList(){
        if (sessionStorage.getItem("session") != undefined){
            let data = await UserController.getAllUserMusic(JSON.parse(sessionStorage.getItem("session")).id, JSON.parse(sessionStorage.getItem("session")).token);
            let arrayMusic = new Array();
            for (let music of data){
                arrayMusic.push(<FilePreview type="music" id={music.id} src={`${fileserverSettings.USER_FOLDER_ROUTE}/${music.path}`} title={`${music.name} - ${music.artist}`}></FilePreview>);
            }
            setGetMusicList(arrayMusic);
        }
    }

    const [getPhotos, setGetPhotos] = useState([]);

    async function getPhotoFiles(){
        if (sessionStorage.getItem("session") != undefined){
            let data = await UserController.getAllUserPhotos(JSON.parse(sessionStorage.getItem("session")).id, JSON.parse(sessionStorage.getItem("session")).token);
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
            await getPhotoFilesList();
        }
    }

    const [getPhotosList, setGetPhotosList] = useState([]);

    async function getPhotoFilesList(){
        let data = await UserController.getAllUserPhotos(JSON.parse(sessionStorage.getItem("session")).id, JSON.parse(sessionStorage.getItem("session")).token);
        let arrayImg = new Array();
        for (let image of data){
            arrayImg.push(<FilePreview type="photo" id={image.id} src={`${fileserverSettings.USER_FOLDER_ROUTE}/${image.path}`}></FilePreview>);
        }
        setGetPhotosList(arrayImg);
    }

    const [getVideos, setGetVideos] = useState([]);

    async function getVideoFiles(){
        if (sessionStorage.getItem("session") != undefined){
            let data = await UserController.getAllUserVideos(JSON.parse(sessionStorage.getItem("session")).id, JSON.parse(sessionStorage.getItem("session")).token);
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
        <AppContext.Provider value={{documents: getDocuments, getDocument: getDocumentFiles, music: getMusic, getMusic: getMusicFiles, musicList: getMusicList, photos: getPhotos, getPhotos: getPhotoFiles, photoList: getPhotosList,  videos: getVideos, getVideos: getVideoFiles}}>
            {props.children}
        </AppContext.Provider>
    );

}