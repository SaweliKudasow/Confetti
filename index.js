const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const certPath = path.join(__dirname, "..", "Proxy", "certs");

const options = {
  key: fs.readFileSync(path.join(certPath, "privkey.pem")),
  cert: fs.readFileSync(path.join(certPath, "fullchain.pem")),
};

function handler(req, res) {
  let file = req.url;

  if (file === "/") file = "/index.html";

  const filePath = path.join(__dirname, "files", file);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200);
    res.end(data);
  });
}

http.createServer(handler).listen(8080);
https.createServer(options, handler).listen(8443);