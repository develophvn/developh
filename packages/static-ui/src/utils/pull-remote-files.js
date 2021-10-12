const REMOTE_RESOURCES = require('../remote-resources.json');
const fs = require("fs");
const https = require("https");

module.exports = () => {
  const {location, remoteFiles} = REMOTE_RESOURCES;

  remoteFiles.forEach((remoteFile) => {
    const fileName = remoteFile.substring(remoteFile.lastIndexOf('/')+1);
    console.log("Downloading " + fileName)
    const file = fs.createWriteStream(location + fileName);
    const request = https.get(remoteFile, function (response) {
      response.pipe(file);
      console.log(fileName + " is downloaded successfully!")
    });
  })

}