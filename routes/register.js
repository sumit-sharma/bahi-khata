var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('Auth/register', { title: "Register Bahikhata" });
})

module.exports = router;