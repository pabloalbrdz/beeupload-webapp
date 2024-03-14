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
            return {"status": response.status, "data": response.data};
        }catch(error){
            if (error.response){
                return {"status": error.response.status, "data": error.response.data};
            }else{
                return {"status": 400, "data": error.message};
            }
        }
    },

    async deleteAllUserDocuments(userId){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_DOCUMENT}/deleteAllUserDocuments?userid=${userId}`,
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
            return {"status": response.status, "data": response.data};
        }catch(error){
            if (error.response){
                return {"status": error.response.status, "data": error.response.data};
            }else{
                return {"status": 400, "data": error.message};
            }
        }
    },

    async deleteAllUserMusic(userId){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_MUSIC}/deleteAllUserMusic?userid=${userId}`,
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
            return {"status": response.status, "data": response.data};
        }catch(error){
            if (error.response){
                return {"status": error.response.status, "data": error.response.data};
            }else{
                return {"status": 400, "data": error.message};
            }
        }
    },


    async deleteAllUserImage(userId){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_IMAGE}/deleteAllUserImages?userid=${userId}`,
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
            return {"status": response.status, "data": response.data};
        }catch(error){
            if (error.response){
                return {"status": error.response.status, "data": error.response.data};
            }else{
                return {"status": 400, "data": error.message};
            }
        }
    },

    async deleteAllUserVideo(userId){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_VIDEO}/deleteAllUserVideos?userid=${userId}`,
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
            return {"status": response.status, "data": response.data};
        }catch(error){
            if (error.response){
                return {"status": error.response.status, "data": error.response.data};
            }else{
                return {"status": 400, "data": error.message};
            }
        }
    },


}