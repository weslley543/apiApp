const mongoose = require('mongoose');

const TruckSchema = new mongoose.Schema({
    initialWeight: {
        type:Number,
        require:true
    },
    finalWeight:{
        type:Number,
        require:true
    },
    patioInitialKilometrage:{
        type:Number,
        require:true
    },
    setorInitialKilometrage:{
        type:Number,
        require:true
    },
    setorInitialKilometrage:{
        type:Number,
        require:true
    },
    patioFinalKilometrage:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        require:true,
        default:Date.now
    },
    patioHourStartExiting:{
        type:Date,
        require:true
    },
    patioHourStartSector:{
        type:Date,
        require:true
    },
    patioHourFinalSector:{
        type:Date,
        require:true
    },
    patioHourFinalPatio:{
        type:Date,
        require:true
    },
    stocked:{
        type:Boolean,
        require:false
    },
    litersStocked:{
        type:Number,
        require:false
    },
    vehiclePlate:{
        type:String,
        require:false
    }

});


module.exports = mongoose.model('Truck',TruckSchema );