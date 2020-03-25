const express = require('express');
const TrashTimeIn = require('../controllers/TrashTimeIn');
const TrashTimeInRoutes = express.Router();
const authmiddlaware = require('../middlewares/auth')


TrashTimeInRoutes.use(authmiddlaware);

TrashTimeInRoutes.post('/trashtimein', (req,res)=>{
    TrashTimeIn.register(req,res);
});

TrashTimeInRoutes.get('/trashtimein', (req,res)=>{
    TrashTimeIn.getAll(req,res);
});

TrashTimeInRoutes.get('/trashtimein/:idCidade', (req,res)=>{
    TrashTimeIn.getByCity(req,res);
});

TrashTimeInRoutes.patch('/trashtimein/:idHorario', (req,res)=>{
    TrashTimeIn.updateHour(req,res);
});

TrashTimeInRoutes.delete('/trashtimein/:idHorario', (req,res)=>{
    TrashTimeIn.delete(req,res);
});

module.exports = TrashTimeInRoutes