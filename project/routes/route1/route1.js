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
    console.log(req.body.firstName)
    res.send(req.body.firstName)
});

router.get("/:id", (req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
});

module.exports = router;