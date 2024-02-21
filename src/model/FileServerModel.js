import axios from "axios";

import fileServerSettings from "../settings/fileServerSettings";

export const FileServerModel = {

  async createUserFolder(userId) {
    const response = await axios.post(
      `${fileServerSettings.USERFOLDER_FILESERVER}/createUserFolder/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
      }
    );
  },

  getUserProfilePic(userId, setUserProfilePic){
    axios.get(`${fileServerSettings.USERPROFILE_FILESERVER}/getUserProfilePic/${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
    })
    .then((response) => setUserProfilePic(response.data))
    .catch((error) => setUserProfilePic(""));
  }

};
