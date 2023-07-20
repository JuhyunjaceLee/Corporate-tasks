const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("C:/Users/user/AppData/Local/mkcert/rootCA-key.pem"),
  cert: fs.readFileSync("C:/Users/user/AppData/Local/mkcert/rootCA.pem"),
};

const express = require("express");
const app = express();

// Your express app logic goes here

const port = process.env.PORT || 3000;

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Server started on port ${port} (HTTPS)`);
});
