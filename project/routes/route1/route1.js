const express = require("express");
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/routes/route1/route1-main.html")
});

router.get('/about', (req, res) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/routes/route1/route1-about.html")
});

router.get('/contact', (req, res) => {
    res.sendFile("//home/thomas/repos/informational-site/informational_site/project/routes/route1/route1-contact-me.html")
});

router.get("/new", (req, res) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/routes/route1/new.html")
});

router.post("/", (req, res) => {
    let user = users.findIndex((item) => item.firstName === req.body.firstName);
    let userExists = users[user]
    let id = users.length - 1;
    if (!userExists) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/route1/${id}`)
    } else {
        console.log("Error")
        res.sendFile("/home/thomas/repos/informational-site/informational_site/project/routes/route1/new.html");
    }
});

let users = [ {firstName: "Hannah"} ];

router.get("/:id", (req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
    console.log(req.body)
});

module.exports = router;