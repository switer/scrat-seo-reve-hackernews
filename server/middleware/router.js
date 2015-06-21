'use strict';

var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
    res.redirect('/inbox');
});

router.get('/api', function (req, res) {
    res.json({title: 123});
});
router.get('/p/index', function(req, res, next){
    var postService = require('../service/post');
    res.locals.headerTitle = 'HackerNews'
    res.locals.title = 'Home';
    postService(function (posts) {
        res.locals.posts = posts
        next()
    })
});

router.get('/p/comments', function(req, res, next){
    var commentService = require('../service/comment')
    var postid;
    res.locals.headerTitle = 'HackerNews'
    res.locals.title = 'Comments';
    commentService(function (comments) {
        res.locals.comments = comments
        next()
    })
});

module.exports = function (options) {
    router.options = options || {};
    return router;
};