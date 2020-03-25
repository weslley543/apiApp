const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    cityName:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        require:true,
        default:Date.now
    }
})

module.exports = mongoose.model('City', CitySchema);