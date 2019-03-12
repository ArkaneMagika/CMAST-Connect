"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = new Schema({
    _postID: {
        type: Number,
        require: true,
        default: 0,
        index: true
    },
    title: {
        type: String,
        required: "Please enter a suitable title"
    },
    author: {
        type: String,
        required: "Please enter the name of the author",
        default: "Admin"
    },
    body: {
        type: String,
    },
    date_Created        : {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
    }
});
module.exports = mongoose.model('Posts', PostSchema);
//Requires pre middleware and another entity model
// PostSchema.pre('save', function(next){
//     if(this.isNew){
//         entityModel.count().then(res => {
//             this._postID = res;
//         })
//     }
//     else{next();}
// })
