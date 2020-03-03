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
        ref:'User',
        require:true
    },
    img:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        require:true,
        default:Date.now
    },
    resolvedAt:{
        type:Date,
        require:false
    }
},{
    toJSON:{
        virtuals:true,
    }
}
);

OcurranceSchema.virtual('img_url').get(function(){
    return `http://localhost:3333/files/${this.img}`
})

module.exports = mongoose.model('Ocurrance', OcurranceSchema);