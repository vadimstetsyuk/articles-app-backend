var express = require('express');
var Comment = require('../models/comment');

var commentsRouter = express.Router();

commentsRouter
    .route('/comments')
    .post((req, res) => {
        console.log('POST /comments');

        // New comment
        let сomment = new Comment(req.body);

        console.log(сomment);
        if(сomment) {
            сomment.save();
            res.status(201).json(сomment);
        } else {
            res.status(501).send();
        }
    });

commentsRouter
    .route('/comments/:articleId')
    .get((req, res) => {
        console.log('GET /comments/:articleId');

        let articleId = req.params.articleId;

        Comment.find({ articleId: articleId }, (err, comments) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            res.json(comments);
        });
    });

module.exports = commentsRouter;