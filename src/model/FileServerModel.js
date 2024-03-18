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

    async uploadDocument(userId, docId, docUpload){
        try{
            const response = await axios.post(
                `${fileserverSettings.USER_DOCUMENT}/uploadUserDocument?userid=${userId}&docid=${docId}`,
                docUpload,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*'
                    },
                }
            );
            return {"status": response.status, "data": response.data};
        } catch(error) {
            if (error.response) {
                return {"status": error.response.status, "data": error.response.data};
            } else {
                return {"status": 400, "data": error.message};
            }
        }
    },

    async uploadMusic(userId, musicId, musicUpload){
        try{
            const response = await axios.post(
                `${fileserverSettings.USER_MUSIC}/uploadUserMusic?userid=${userId}&musicid=${musicId}`,
                musicUpload,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*'
                    },
                }
            );
            return {"status": response.status, "data": response.data};
        } catch(error) {
            if (error.response) {
                return {"status": error.response.status, "data": error.response.data};
            } else {
                return {"status": 400, "data": error.message};
            }
        }
    },

    async uploadImage(userId, imgId, imgUpload){
        try{
          const response = await axios.post(
            `${fileserverSettings.USER_IMAGE}/uploadUserImage?userid=${userId}&imgid=${imgId}`,
            imgUpload,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*'
              },
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

    async uploadVideo(userId, videoId, videoUpload){
        try{
            const response = await axios.post(
                `${fileserverSettings.USER_VIDEO}/uploadUserVideo?userid=${userId}&videoid=${videoId}`,
                videoUpload,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*'
                    },
                }
            );
            return {"status": response.status, "data": response.data};
        } catch(error) {
            if (error.response) {
                return {"status": error.response.status, "data": error.response.data};
            } else {
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


    async deleteAllUserImages(userId){
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

    async deleteAllUserVideos(userId){
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

    
    async deleteAllUserFiles(userId){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_FOLDER}/deleteUserFiles?userid=${userId}`,
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

    async deleteUserFolder(userId){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_FOLDER}/deleteUserFolder?userid=${userId}`,
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