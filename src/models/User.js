const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        require: true
    },
    recoveryToken: {
        type: String,
        require: false
    },
    expiresIn: {
        type: Date,
        require: false
    },
    gender: {
        type: String,
        require: false
    },
    city: {
        type: String,
        require: false
    },
    avatar: {
        type: String,
        require: false
    },
}, {
    toJSON: {
        virtuals: true,
    }
});

UserSchema.virtual('img_url').get(function () {
    //return `https://cirsope.herokuapp.com/files/${this.img}`
    return `http://localhost:8080/files/${this.avatar}`
})
module.exports = mongoose.model('User', UserSchema);