"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EventsSchema = new Schema({
    _eventID: {
        type: Number,
        required: true,
        index: true
    },
    name: {
        type: String,
        required: [""]
    },
    author: {
        type: String,
        required: ""
    },
    location: {
        type: String,
        required: []
    },
    description: String,
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: Date
}, { timestamps: true });
module.exports = mongoose.model("Events", EventsSchema);
