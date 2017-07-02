var express = require('express');
var mongoose = require('mongoose');
var bodyBarser = require('body-parser');
var usersRouter = require('./routes/user');
var articlesRouter = require('./routes/article');
var commentsRouter = require('./routes/comment');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

/* Development mode */
var HOSTNAME = 'localhost';
var PORT = '27017';
var DATABASE = 'articlesdb';

mongoose.connect('mongodb://' + HOSTNAME + ':' + PORT + '/' + DATABASE, function (error) {
    if (error) console.error(error);
    else {
        console.log('mongo connected');
        
        app.listen(process.env.PORT || 3000, () => {
        console.log('Listening on port ' + 3000);
        });
    }
});

app.use(bodyBarser.json());
app.use(bodyBarser.urlencoded({
    extended: true
}));

app.use('/api', usersRouter, articlesRouter, commentsRouter);