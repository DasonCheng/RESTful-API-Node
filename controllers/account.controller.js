var jsSHA = require("jssha");
var accountModel = require('../models/account.model');
var salting = require('../config/hash');
var Achars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var Bchars = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
function generateId(n) {
    var res = "", id = "";
    for (var i = 0; i < n; i++) {
        if (i == 0) {
            id = Math.ceil(Math.random() * 8);
            res += Bchars[id];
        } else {
            id = Math.ceil(Math.random() * 9);
            res += Achars[id];
        }
    }
    return res;
}

module.exports = {
    addUser: function (req, res, next) {
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.update(req.body.pwd + salting.strong);
        var hash = shaObj.getHash("HEX");
        var user = {
            id: generateId(6),
            name: req.body.name,
            email: req.body.email,
            pwd: hash
        };
        accountModel.insertUser(user, function (err, data) {
            if (err) {
                res.status(400).send({
                    message: '注册失败'
                });
            } else {
                res.send(data)
            }
        });
    }
};