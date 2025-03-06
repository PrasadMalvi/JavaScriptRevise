const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} New Request Recieved\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        const userName = myUrl.query.name;
        res.end(`Hi, ${userName}`);
        break;
      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8000, () => console.log("Server Running on 8000"));
