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
    type:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    img:{
        type:String,
        required:false
    },
    createdAt:{
        type:Date,
        require:true,
        default:Date.now
    },
    resolvedAt:{
        type:Date,
        require:false
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:false
    }
},{
    toJSON:{
        virtuals:true,
    }
}
);

OcurranceSchema.virtual('img_url').get(function(){
    return `https://cirsope.herokuapp.com/files/${this.img}`
})

module.exports = mongoose.model('Ocurrance', OcurranceSchema);