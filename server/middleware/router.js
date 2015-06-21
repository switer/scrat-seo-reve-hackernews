'use strict';

var express = require('express')
var router = express.Router()


router.get('/api', function (req, res) {
    res.json({title: 123});
});

router.get('/p/index', function(req, res, next){
    var postService = require('../service/post');
    res.locals.headerTitle = 'HackerNews'
    res.locals.title = 'Home';
    postService({
        loadmore: !!req.query._fetch_more
    }, function (posts) {
        res.locals.posts = posts
        next()
    })
});

router.get('/p/detail', function(req, res, next){
    var detailService = require('../service/detail')
    detailService({
        loadmore: !!req.query._pagelets,
        postid: req.query.id
    }, function (detail) {
        res.locals.title = res.locals.headerTitle = detail.title
        res.locals.detail = detail
        next()
    })
});

module.exports = function (options) {
    router.options = options || {};
    return router;
};