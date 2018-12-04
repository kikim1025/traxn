const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [
            /^[a-z0-9_-]+$/i,
            'Username can only contain letters, numbers, _, and -'
        ]
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Invalid email'
        ]
    },
    password: {
        type: String,
        required: true,
        trim: true,
        match: [
            /(?=.*[a-z])(?=.*[0-9]).*/i,
            'Password must contain at least one letter and one number'
        ]
    },
    name: {
        first: {
            type: String,
            trim: true,
            match: [
                /^[a-z'-]+$/i,
                'Name can only include letters, \', and -'
            ]
        },
        last: {
            type: String,
            trim: true,
            match: [
                /^[a-z'-]+$/i,
                'Name can only include letters, \', and -'
            ]
        }
    }
})
userSchema.plugin(uniqueValidator);
userSchema.pre(`save`, function(next) {
    var user = this;
    //if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10)
    .then(function(hashed) {
        user.password = hashed;
        next();        
    })
    .catch(function(err) {
        res.json({status: "error", message: err});
    });
});

module.exports = mongoose.model('User', userSchema);
