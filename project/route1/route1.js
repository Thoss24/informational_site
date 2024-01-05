const express = require("express");
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/route1/route1-main.html")
});

router.get('/about', (req, res) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/route1/route1-about.html")
});

router.get('/contact-me', (req, res) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/route1/route1-contact-me.html")
});

module.exports = router;