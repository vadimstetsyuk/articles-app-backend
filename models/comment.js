var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    articleId: {
        type: Number,
        required: true
    },
    senderName: {
        type: String,
        required: true
    },
    senderEmail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { collection: 'comments' });

module.exports = mongoose.model('Comment', CommentSchema);