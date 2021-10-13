const REMOTE_RESOURCES = require('../remote-resources.json');
const fs = require("fs");
const https = require("https");

module.exports = async function downloadRemoteFiles() {
  const {location, remoteFiles} = REMOTE_RESOURCES;
  console.log("Downloading remote files to " + location);
  if (!fs.existsSync(location)) {
    console.log(`Directory ${location} does not exist, creating...`);
    fs.mkdirSync(location, {recursive: true});
  }

  return await Promise.all(remoteFiles.map(async (remoteFileUrl) => {
    const fileName = remoteFileUrl.substring(remoteFileUrl.lastIndexOf('/') + 1);
    const file = await fs.createWriteStream(location + fileName);
    console.log(`Downloading ${fileName} from ${remoteFileUrl}`)
    await new Promise((resolve, reject) => {
      https.get(remoteFileUrl, response => {
        response.pipe(file);
        console.log(fileName + " is downloaded successfully!")
        resolve();
      }).on('error', err => { // Handle errors
        console.error(err.message)
        console.error(`Cannot download ${fileName} from ${remoteFileUrl}`)
      });
    })
  }));

}