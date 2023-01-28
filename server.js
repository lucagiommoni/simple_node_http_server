const http = require("http");
const url = require("url");
const fs = require("fs");
const root = process.argv[2];

http
  .createServer(function (request, response) {
    let requestUrl = url.parse(request.url);
    try {
      response.writeHead(200);
      response.end(fs.readFileSync(root + requestUrl.pathname));
    } catch (e) {
       response.writeHead(404);
       response.end(fs.readFileSync(__dirname + "/404.html"));
    }
  })
  .listen(8080);
