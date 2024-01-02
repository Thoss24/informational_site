const http = require("node:http");
const url = require("url")
const fs = require("fs");

http.createServer((req, res) => {
   const q = url.parse(req.url, true);
   
   let filename = ""
   if (q.pathname === "/") {
    filename = "." + "/project/index.html";
   } else {
    filename = "." + "/project" + q.pathname + ".html"
    console.log(q.pathname)
   }

   fs.readFile(filename, (err, data) => {
    if (err) {
        res.writeHead(404, { "Content-Type": "text/html"});
        res.write(page404);
        return res.end();
    } else {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write(data);
        return res.end();
    }
   })
}).listen(8080)