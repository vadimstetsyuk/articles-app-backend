var express = require('express');
var User = require('../models/user');

var usersRouter = express.Router();

usersRouter
    .route('/authenticate')
    .get((req, res) => {
        console.log('GET /users');

        User.find((err, users) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            res.json(users);
        });
    })
    .post((req, res) => {
        console.log('POST /users');

        let email = req.body.email;
        let password = req.body.password;

        console.log(email + " "  + password);
        User.findOne({ email: email, password: password }, (err, user) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            if (user) {
                let token = 'mysecrettoken';
                res.json({ token: token });
            } else {
                res.json({
                    token: '',
                    message: 'User with email ' + email + ' was not found'
                });
            }
        });
    });

module.exports = usersRouter;