import React, { useEffect, useState } from "react";
import { UserController } from "../../controller/UserController";

function UserSettingsExplorer(){
    const [srcProfilePic, setSrcProfilePic] = useState("");
    useEffect(() => {
        UserController.getUserProfilePic(1, setSrcProfilePic);
    }, []);
    return(
        <div>
            <h2>Ajustes de usuario</h2>
            <img src={srcProfilePic}></img>
        </div>
    );
}

export default UserSettingsExplorer;