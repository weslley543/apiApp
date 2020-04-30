const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now,
        require:true
    },
    recoveryToken:{
        type:String,
        require:false
    },
    expiresIn:{
        type:Date,
        require:false
    }
});

module.exports = mongoose.model('User', UserSchema);