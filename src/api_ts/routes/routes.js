"use strict";
var express = require('express');
var router = express.Router;
router.use(function (req, res, next) {
    console.log('Time accessed: ', Date.now());
    next();
});
router.get('/', function (req, res) {
    res.send("Welcome");
});
router.get('/events', function (req, res) {
    res.send("Insert mongoose query here");
});
router.get('/posts', function (req, res) {
    res.send("Insert mongoose query here");
});
router.get('/events-id', function (req, res) {
    res.send();
});
router.get('/posts-id', function (req, res) {
    res.send();
});
module.exports = router;
