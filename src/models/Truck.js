const mongoose = require('mongoose');

const TruckSchema = new mongoose.Schema({
    initialWeight: {
        type:Number,
        required:true
    },
    finalWeight:{
        type:Number,
        required:true
    },
    patioInitialKilometrage:{
        type:Number,
        required:true
    },
    setorInitialKilometrage:{
        type:Number,
        required:true
    },
    setorFinalKilometrage:{
        type:Number,
        required:true
    },
    patioFinalKilometrage:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    patioHourStartExiting:{
        type:Date,
        required:true
    },
    patioHourStartSector:{
        type:Date,
        required:true
    },
    patioHourFinalSector:{
        type:Date,
        required:true
    },
    patioHourFinalPatio:{
        type:Date,
        required:true
    },
    stocked:{
        type:Boolean,
        required:true
    },
    litersStocked:{
        type:Number,
        required:false
    }

});


module.exports = mongoose.model('Truck',TruckSchema );