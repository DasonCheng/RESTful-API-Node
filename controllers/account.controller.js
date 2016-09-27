var accountModel = require('../models/account.model');
module.exports = {
    name: function (req, res, next) {
        accountModel.getName(function (err, name) {
            if (err) {
                return res.status(400).send({
                    message: 'something error'
                });
            } else {
                res.send(name)
            }
        });
    },
    name_id: function (req, res, next) {
        accountModel.getEmailByid(req.params.id, function (err, name) {
            if (err) {
                return res.status(400).send({
                    message: 'something error'
                });
            } else {
                res.send(name)
            }
        });
    }
}