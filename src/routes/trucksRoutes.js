const express = require('express');
const truckController = require('../controllers/Truck');
const truckRoutes = express.Router();
const authmiddlaware = require('../middlewares/auth');



truckRoutes.post('/truck',authmiddlaware ,(req,res)=>{
    truckController.register(req,res);
});

truckRoutes.get('/truck',authmiddlaware ,(req,res)=>{
    truckController.index(req,res);
});

truckRoutes.get('/truck/:id',authmiddlaware ,(req,res)=>{
    truckController.getOne(req,res);
});
truckRoutes.delete('/truck/:id',authmiddlaware ,(req,res)=>{
    truckController.delete(req,res);
});

truckRoutes.put('/truck/:id',authmiddlaware ,(req,res)=>{
    truckController.update(req,res);
});


module.exports = truckRoutes;