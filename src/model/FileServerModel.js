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

    async uploadDocument(userId, docId, docUpload, token){
        try{
            const response = await axios.post(
                `${fileserverSettings.USER_DOCUMENT}/uploadUserDocument?userid=${userId}&docid=${docId}`,
                docUpload,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*',
                        'Auth': token
                    },
                }
            );
            return {"status": response.status, "data": response.data};
        } catch(error) {
            if (error.response) {
                if (error.response.data.errors){
                    return {"status": error.response.status, "data": "Error: Se debe subir un fichero."};
                }else{
                    return {"status": error.response.status, "data": error.response.data};
                }
            } else {
                return {"status": 400, "data": error.message};
            }
        }
    },

    async uploadMusic(userId, musicId, musicUpload, token){
        try{
            const response = await axios.post(
                `${fileserverSettings.USER_MUSIC}/uploadUserMusic?userid=${userId}&musicid=${musicId}`,
                musicUpload,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*',
                        'Auth': token
                    },
                }
            );
            return {"status": response.status, "data": response.data};
        } catch(error) {
            if (error.response) {
                if (error.response.data.errors){
                    return {"status": error.response.status, "data": "Error: Se debe subir un fichero."};
                }else{
                    return {"status": error.response.status, "data": error.response.data};
                }
            } else {
                return {"status": 400, "data": error.message};
            }
        }
    },

    async uploadImage(userId, imgId, imgUpload, token){
        try{
          const response = await axios.post(
            `${fileserverSettings.USER_IMAGE}/uploadUserImage?userid=${userId}&imgid=${imgId}`,
            imgUpload,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                'Auth': token
              },
            }
          );
          return {"status": response.status, "data": response.data};
        }catch(error){
          if (error.response){
            if (error.response.data.errors){
                return {"status": error.response.status, "data": "Error: Se debe subir un fichero."};
            }else{
                return {"status": error.response.status, "data": error.response.data};
            }
          }else{
            return {"status": 400, "data": error.message};
          }
        }
    },

    async uploadVideo(userId, videoId, videoUpload, token){
        try{
            const response = await axios.post(
                `${fileserverSettings.USER_VIDEO}/uploadUserVideo?userid=${userId}&videoid=${videoId}`,
                videoUpload,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*',
                        'Auth': token
                    },
                }
            );
            return {"status": response.status, "data": response.data};
        } catch(error) {
            if (error.response) {
                if (error.response.data.errors){
                    return {"status": error.response.status, "data": "Error: Se debe subir un fichero."};
                }else{
                    return {"status": error.response.status, "data": error.response.data};
                }
            } else {
                return {"status": 400, "data": error.message};
            }
        }
    },

    async deleteUserDocument(userId, docId, token){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_DOCUMENT}/deleteUserDocument?userid=${userId}&docid=${docId}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Auth': token
                  },
                  data: { userid: userId }
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
  
    async deleteUserMusic(userId, musicId, token){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_MUSIC}/deleteUserMusic?userid=${userId}&musicid=${musicId}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Auth': token
                  },
                  data: { userid: userId }
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
  
    async deleteUserImage(userId, imgId, token){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_IMAGE}/deleteUserImage?userid=${userId}&imgid=${imgId}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Auth': token
                  },
                  data: { userid: userId }
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
  
    async deleteUserVideo(userId, videoId, token){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_VIDEO}/deleteUserVideo?userid=${userId}&videoid=${videoId}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Auth': token
                  },
                  data: { userid: userId }
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

    async deleteAllUserDocuments(userId, token){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_DOCUMENT}/deleteAllUserDocuments?userid=${userId}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Auth': token
                  },
                  data: { userid: userId }
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

    async deleteAllUserMusic(userId, token){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_MUSIC}/deleteAllUserMusic?userid=${userId}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Auth': token
                  },
                  data: { userid: userId }
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

    async deleteAllUserImages(userId, token){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_IMAGE}/deleteAllUserImages?userid=${userId}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Auth': token
                  },
                  data: { userid: userId }
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

    async deleteAllUserVideos(userId, token){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_VIDEO}/deleteAllUserVideos?userid=${userId}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Auth': token
                  },
                  data: { userid: userId }
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

    
    async deleteAllUserFiles(userId, token){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_FOLDER}/deleteUserFiles?userid=${userId}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Auth': token
                  },
                  data: { userid: userId }
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

    async deleteUserFolder(userId, token){
        try{
            const response = await axios.delete(
                `${fileserverSettings.USER_FOLDER}/deleteUserFolder?userid=${userId}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Auth': token
                  },
                  data: { userid: userId }
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