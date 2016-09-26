var express = require('express');
var router = express.Router();
var account = require('../models/account');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/name', function (req, res, next) {
    account.getName(req, res, next);
});
router.get('/email', function (req, res, next) {
    account.getEmail(req, res, next);
});

module.exports = router;