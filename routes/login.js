var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('Auth/login', {title:"Login Bahikhata"});
})

module.exports = router;