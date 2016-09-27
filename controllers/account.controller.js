var accountModel = require('../models/account.model');
module.exports = {
    addUser: function (req, res, next) {
        var user = [111111, '111111', '111111@gmail.com', 'sdkhfuiwerhiwskbdgjswshe'];
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