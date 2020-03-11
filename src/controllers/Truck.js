const Truck = require('../models/Truck');


module.exports = {
    async register (req,res){
        try{
            let truck = await Truck.create(req.body);
            res.status(200).send(truck);
        }catch(err){
            res.status(400).send(err);
        }
    },
    async index (req,res){
        try{
            let trucks = await Truck.find();
            res.status(200).send(trucks);

        }catch(err){
            res.status(400).send(err);
        }
    },
    async getOne(req,res){
        try{
            let truck = await Truck.findById(req.params.id);
            res.status(200).send(truck);
        }catch(err){
            res.status(400).send(err);
        }
    },
    async delete(req,res){
        try{
            let truck = await Truck.findOneAndDelete(req.params._id);
            res.status(200).send(truck);
        }catch(err){
            res.status(400).send(err);
        }
    },
    async update(req,res){
        try{
            let truck = await Truck.findByIdAndUpdate(req.params.id,req.body);
            res.status(200).send(truck);
        }catch(err){
            res.status(400).send(200);
        }
    } 
}