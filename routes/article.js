var express = require('express');
var Article = require('../models/article');

var articlesRouter = express.Router();

articlesRouter
    .route('/articles')
    .get((req, res) => {
        console.log('GET /articles');

        Article.find((err, articles) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            res.json(articles);
        });
    });

articlesRouter
    .route('/articles/:id')
    .get((req, res) => {
        console.log('GET /articles/:id');

        let id = req.params.id;

        Article.findOne({ id: id }, (err, article) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            res.json(article);
        });
    });

module.exports = articlesRouter;