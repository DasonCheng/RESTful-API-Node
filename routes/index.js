var express = require('express');
var router = express.Router();
var accountController = require('../controllers/account.controller');

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.post('/account/signup', function (req, res, next) {
    accountController.addUser(req, res, next);
});

module.exports = router;
