const express = require('express');
const truckController = require('../controllers/Truck');
const truckRoutes = express.Router();
const authmiddlaware = require('../middlewares/auth');

truckRoutes.use(authmiddlaware);


truckRoutes.post('/truck', (req,res)=>{
    truckController.register(req,res);
});

truckRoutes.get('/truck', (req,res)=>{
    truckController.index(req,res);
});

truckRoutes.get('/truck/:id', (req,res)=>{
    truckController.getOne(req,res);
});
truckRoutes.delete('/truck/:id', (req,res)=>{
    truckController.delete(req,res);
});

truckRoutes.put('/truck/:id', (req,res)=>{
    truckController.update(req,res);
});


module.exports = truckRoutes;