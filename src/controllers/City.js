const City = require('../models/City');

module.exports = {
    async register(req,res){
        try{
            const city = await City.create({... req.body});
            res.status(200).json(city);
        }catch(e){
            res.status(400).json(e)
        }
    },
    async getAll (req,res){
        try{
            const city = await City.find();
            res.status(200).json(city);
        }catch(e){
            res.status(400).json(e);
        }
    },
    async getOne (req,res){
        try{
            const {id} = req.params;
            const city = await City.findById(id);
            res.status(200).json(city)
        }catch(e){
            res.status(400).json(e);
        }
    },
    async update (req,res){
        try{
            const {id} = req.params;
            const city = await City.findByIdAndUpdate(id, req.body);
            res.status(200).json(city);
        }catch(e){
            res.status(400).json(e);
        }
    },
    async remove (req,res){
        try{
            const {id} = req.params;
            const city = await City.findByIdAndRemove(id);
            res.status(200).json(city);
        }catch(e){
            res.status(400).json(e);
        }
    }
}