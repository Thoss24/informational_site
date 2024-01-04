const http = require("node:http");
const express = require('express');
const app = express();
const url = require("url")
const fs = require("fs");
const router = express.Router();

// const page404 = fs.readFileSync('project/404.html', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         return data
//     }
// });

// http.createServer((req, res) => {
//     const q = url.parse(req.url, true);
//     let filename = ""

//     if (q.pathname === "/") {
//         filename = "project/index.html"
//     } else {
//         filename = "project/" + q.pathname + ".html";
//     };

//     fs.readFile(filename, 'utf8', (err, data) => {
//         if (err) {
//             res.writeHead(404, {"Content-Type": 'text/html'})
//             res.write(page404)
//             return res.end()
//         } else {
//             res.writeHead(200, {"Content-Type": 'text/html'})
//             res.write(data)
//             return res.end()
//         }
//     })
// }).listen(8080)

const port = 8080;

// const page404 = fs.readFileSync('project/404.html', 'utf8', (err, data) => {
//     return err ? err : data
// });

// app.get(q, (req, res) => {
//     const q = parse(res.url, true);
// })


app.get("/home", (req, res) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/index.html")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
