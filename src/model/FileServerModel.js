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

};
