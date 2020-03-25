const City = require('../models/City');

module.exports = {
    async register(req,res){
        try{
            const ocurrance = await City.create({... req.body});
            res.status(200).json(ocurrance);
        }catch(e){
            res.status(400).json(e)
        }
    }
}