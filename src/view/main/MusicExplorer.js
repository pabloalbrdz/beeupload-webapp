import React, { useEffect } from "react";
import { UserController } from "../../controller/UserController";

function MusicExplorer(){
    async function getMusicFiles(){
        let data = await UserController.getAllUserMusic(JSON.parse(sessionStorage.getItem("session")).id);
        console.log(data);
    }
    useEffect(() => {
        getMusicFiles();
    }, []);
    return(
        <div>
            <h2>Musica</h2>
        </div>
    );
}

export default MusicExplorer;