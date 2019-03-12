"use strict";
const express = require('express');
const events = express.Router();
const bodyParser = require('body-parser');

events.use(bodyParser.urlencoded({extended:true}));
events.use(bodyParser.json());
events.use(function (req, res, next) {
    console.log('Time accessed: ', Date.now());
    next();
});


events.get('/api/events', function (req, res) {
    res.send("Insert mongoose query here");
});

events.get('/api/events:id', function (req, res) {

});

events.post('/api/events', function(req, res){
    
});

events.put('/api/events:id', function(req, res){
    
});

events.delete('/api/events:id', function(req, res){
    
});

module.exports = events;