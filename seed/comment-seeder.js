var Comment = require('../models/comment');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/articlesdb');

var comments = [
    new Comment({
        articleId: 1,
        senderName: 'Vadim',
        senderEmail: 'test1@gmail.com',
        date: new Date(2017, 07, 8),
        description: 'Comment 1'        
    }),
    new Comment({
        articleId: 1,
        senderName: 'Kolya',
        senderEmail: 'test2@gmail.com',
        date: new Date(2017, 07, 8),
        description: 'Comment 2'        
    }),
    new Comment({
        articleId: 1,
        senderName: 'Nastya',
        senderEmail: 'test3@gmail.com',
        date: new Date(2017, 07, 8),
        description: 'Comment 3'        
    }),
    new Comment({
        articleId: 1,
        senderName: 'Petro',
        senderEmail: 'test4@gmail.com',
        date: new Date(2017, 07, 8),
        description: 'Comment 4'        
    })
];

var done = 0;
for (var i = 0; i < comments.length; i++) {
    comments[i].save();
}

function exit() {
    mongoose.disconnect();
}