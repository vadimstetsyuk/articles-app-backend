var Article = require('../models/article');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/articlesdb');

var articles = [
    new Article({
        id: 1,
        title: 'Article 1',
        date: new Date(2017, 07, 25),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 2,
        title: 'Article 2',
        date: new Date(2017, 03, 21),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 3,
        title: 'Article 3',
        date: new Date(2017, 07, 28),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 4,
        title: 'Article 4',
        date: new Date(2017, 07, 15),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 5,
        title: 'Article 5',
        date: new Date(2017, 06, 25),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
        new Article({
        id: 6,
        title: 'Article 1',
        date: new Date(2017, 03, 12),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 7,
        title: 'Article 2',
        date: new Date(2017, 08, 10),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 8,
        title: 'Article 3',
        date: new Date(2017, 02, 21),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 9,
        title: 'Article 4',
        date: new Date(2017, 04, 1),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 10,
        title: 'Article 5',
        date: new Date(2017, 05, 25),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
        new Article({
        id: 11,
        title: 'Article 1',
        date: new Date(2017, 07, 19),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 12,
        title: 'Article 2',
        date: new Date(2017, 07, 13),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 13,
        title: 'Article 3',
        date: new Date(2017, 07, 15),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 14,
        title: 'Article 4',
        date: new Date(2017, 07, 24),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 15,
        title: 'Article 5',
        date: new Date(2017, 07, 31),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
        new Article({
        id: 16,
        title: 'Article 1',
        date: new Date(2017, 07, 4),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 17,
        title: 'Article 2',
        date: new Date(2017, 07, 8),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    }),
    new Article({
        id: 18,
        title: 'Article 3',
        date: new Date(2017, 07, 9),
        description: 'Article 3sdfsdfsddssdfdssdsdsdf'
    })
];

var done = 0;
for (var i = 0; i < articles.length; i++) {
    articles[i].save();
}

function exit() {
    mongoose.disconnect();
}