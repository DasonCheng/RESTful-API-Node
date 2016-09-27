var jsSHA = require("jssha");
var accountModel = require('../models/account.model');
var salting = require('../config/hash');
module.exports = {
    addUser: function (req, res, next) {
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.update(req.body.pwd + salting.strong);
        var hash = shaObj.getHash("HEX");
        var user = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            pwd: hash
        };
        console.log(user);
        accountModel.insertUser(user, function (err, data) {
            if (err) {
                return res.status(400).send({
                    message: 'something error'
                });
            } else {
                res.send(data)
            }
        });

    },
    name: function (req, res, next) {
        accountModel.getName(function (err, data) {
            if (err) {
                return res.status(400).send({
                    message: 'something error'
                });
            } else {
                res.json(data)
            }
        });
    },
    name_id: function (req, res, next) {
        accountModel.getEmailByid(req.params.id, function (err, data) {
            if (err) {
                return res.status(400).send({
                    message: 'something error'
                });
            } else {
                res.json(data)
            }
        });
    }
}