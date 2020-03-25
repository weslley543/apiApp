const mongoose = require('mongoose');

const TrashTimeInSchema = new mongoose.Schema({
    neighborhood:{
        type:String,
        require:true
    },
    estimatedTime:{
        type:String,
        require:true,
    },
    city:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'City',
        require:true
    }
});

module.exports = mongoose.model('TrashTimeIn', TrashTimeInSchema);
