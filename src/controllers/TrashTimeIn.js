const TrashTimeIn = require('../models/TrashTimeIn')

module.exports = {
    async register (req,res){
        try{
            const trashTime = await TrashTimeIn.create(req.body);
            res.status(200).json(trashTime)
        }catch(e){
            res.status(400).json(e);
        }
    },
    async getAll (req,res){
        try{
            const trashTime = await TrashTimeIn.find();
            res.status(200).json(trashTime);
        }catch(e){
            res.status(400).json(e);
        }
    },
    async getByCity (req,res){
        try{
            const { idCidade } = req.params;
            const trashTime = await TrashTimeIn.find({city:idCidade})
            res.status(200).json(trashTime);
        }catch(e){
            res.status(400).json(e);
        }
    },
    async updateHour (req,res){
        try{
            const {idHorario} = req.params;
            const trashTime = await TrashTimeIn.findByIdAndUpdate(idHorario, req.body);
            res.status(200).json(trashTime);
        }catch(e){
            res.status(400).json(e);
        }
    },
    async delete (req,res){
        try{
            const {idHorario} = req.params;
            const trashTime = await TrashTimeIn.findByIdAndDelete(idHorario);
            res.status(200).json(trashTime);
        }catch(e){
            res.status(400).json(e);
        }
    }
}