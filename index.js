const http = require("node:http");
const express = require('express');
const app = express();
const route0 = require("./project/routes/route0/route0");
const route1 = require("./project/routes/route1/route1");

app.use(express.static("project/public"));
app.use(express.urlencoded({ extended: true }))

const port = 8080;

app.use("/", route0);

app.use("/route1", route1);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

const notFoundHandler = (req, res, next) => {
    res.status(404).sendFile("/home/thomas/repos/informational-site/informational_site/project/routes/route0/404.html")
};

app.use(notFoundHandler);