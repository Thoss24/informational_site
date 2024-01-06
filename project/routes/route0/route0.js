const express = require("express");
const app = express();
const router = express.Router();

const middleWareTest = (req, res, next) => {
    console.log(req.originalUrl)
    next()
};

router.get('/', (req, res) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/routes/route0/index.html")
});

router.get('/about', middleWareTest, (req, res) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/routes/route0/about.html")
});

router.get('/contact', (req, res) => {
    res.sendFile("/home/thomas/repos/informational-site/informational_site/project/routes/route0/contact-me.html")
});


module.exports = router;