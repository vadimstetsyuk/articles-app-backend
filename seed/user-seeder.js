var User = require('../models/user');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/articlesdb');

var users = [
    new User({
        id: 1,
        email: 'stetsyuk.vadim@gmail.com',
        password: '07121996vs'
    }),
    new User({
        id: 2,
        email: 'test@gmail.com',
        password: 'test'
    })
];

var done = 0;
for (var i = 0; i < users.length; i++) {
    users[i].save();
}

function exit() {
    mongoose.disconnect();
}