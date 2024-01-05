const http = require("node:http");
const express = require('express');
const app = express();
const url = require("url")
const fs = require("fs");
const router = express.Router();
const route1 = require("./project/route1/route1");

app.use(express.static("./project"));

const port = 8080;

// const page404 = fs.readFileSync('project/404.html', 'utf8', (err, data) => {
//     return err ? err : data
// });

const middlewareTest = (req, res, next) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/about.html");
    console.log("Middleware working!")
};

app.use("/route1", route1)

app.get("/contact", (req, res) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/contact-me.html")
});

app.get("/about", middlewareTest);

app.get("/", (req, res) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/index.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
