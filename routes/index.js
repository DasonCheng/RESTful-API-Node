var express = require('express');
var router = express.Router();
var account = require('../models/account');

router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});
router.get('/heroes', function (req, res, next) {
  res.send([
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr  IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
  ]);
});

router.get('/name', function (req, res, next) {
  account.getName(req, res, next);
});

router.post('/name', function (req, res, next) {
  account.postName(req, res, next);
});

router.get('/email', function (req, res, next) {
  account.getEmail(req, res, next);
});

module.exports = router;
