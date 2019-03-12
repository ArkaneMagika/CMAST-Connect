"use strict";
const express = require('express');
const posts = express.Router();
const bodyParser = require('body-parser');

posts.use(bodyParser.urlencoded({extended:true}));
posts.use(bodyParser.json());
posts.use(function (req, res, next) {
    console.log('Time accessed: ', Date.now());
    next();
});

posts.get('/api/posts', function (req, res) {
    res.send("Insert mongoose query here");
});

posts.get('/api/posts:id', function (req, res) {

});

posts.post('/api/posts', function(req, res){
    
});

posts.put('/api/posts:id', function(req, res){
    
});

posts.delete('/api/posts:id', function(req, res){
    
});

module.exports = posts;