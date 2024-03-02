import axios from "axios";

import fileserverSettings from "../settings/fileserverSettings";

export const FileServerModel = {

    async createUserFolder(userId){
        try{
            const response = await axios.post(
                `${fileserverSettings.USER_FOLDER}/createUserFolder?userid=${userId}`,
                {
                    userid: `${userId}`
                },
                {
                    headers: {
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin' : '*'
                    }
                }
            );
            return response.status;
        }catch(error){
            if (error.response){
                return {"status": error.response.status, "data": error.response.data};
            }else{
                return {"status": 400, "data": error.message};
            }
        }
    },


}