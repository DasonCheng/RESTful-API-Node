var express = require('express');
var router = express.Router();
var accountController = require('../controllers/account.controller');

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/name', function (req, res, next) {
    accountController.name(req, res, next);
});
router.get('/name/:id', function (req, res, next) {
    accountController.name_id(req, res, next);
});
router.post('/account/signup',function (req, res, next) {
    accountController.addUser(req, res, next);
});

module.exports = router;
