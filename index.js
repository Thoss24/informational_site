const http = require("node:http");
const url = require("url")
const fs = require("fs");

const page404 = fs.readFileSync('project/404.html', 'utf8', (err, data) => {
    console.log(data)
    if (err) {
        //console.log(err)
    } else {
        return data
    }
});

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    let filename = ""

    if (q.pathname === "/") {
        filename = "project/index.html"
    } else {
        filename = "project/" + q.pathname + ".html";
    };

    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, {"Content-Type": 'text/html'})
            res.write(page404)
            return res.end()
        } else {
            res.writeHead(200, {"Content-Type": 'text/html'})
            res.write(data)
            return res.end()
        }
    })
}).listen(8080)