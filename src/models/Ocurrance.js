const mongoose = require('mongoose');

const OcurranceSchema = new mongoose.Schema({
    lat:{
        type:Number,
        require:true
    },
    lng:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        require:true
    },
    createdAt:{
        type:Date,
        require:true,
        default:Date.now
    },
    resolvedAt:{
        type:Date,
        require:true
    }
});