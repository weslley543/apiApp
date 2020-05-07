const express = require('express');
const TrashTimeIn = require('../controllers/TrashTimeIn');
const TrashTimeInRoutes = express.Router();
const authmiddlaware = require('../middlewares/auth')



TrashTimeInRoutes.post('/trashtimein',authmiddlaware ,(req,res)=>{
    TrashTimeIn.register(req,res);
});

TrashTimeInRoutes.get('/trashtimein',authmiddlaware ,(req,res)=>{
    TrashTimeIn.getAll(req,res);
});

TrashTimeInRoutes.get('/trashtimein/:idCidade',authmiddlaware ,(req,res)=>{
    TrashTimeIn.getByCity(req,res);
});

TrashTimeInRoutes.patch('/trashtimein/:idHorario',authmiddlaware ,(req,res)=>{
    TrashTimeIn.updateHour(req,res);
});

TrashTimeInRoutes.delete('/trashtimein/:idHorario',authmiddlaware ,(req,res)=>{
    TrashTimeIn.delete(req,res);
});

module.exports = TrashTimeInRoutes