var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _userID:{
        type:Number,
        required:true
    },
    username: {
        type: String,
        lowercase: true,
        uppercase: true,
        required: [true, "Username cannot be blank. Must contain a "],
    },
    email:{
        type: String,
        lowercase: true,
        required:[]
    },
    roles: mongoose.model("Roles"),
    //bio: String,
    image:String,
    isAdmin: {
        type: Boolean,
        required: true
    },
    hash: String,
    salt:String
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);

//Include other modules for authentication and hashing of passwords.