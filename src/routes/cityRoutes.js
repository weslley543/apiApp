const express = require('express');
const City = require('../controllers/City')
const authmiddlaware = require('../middlewares/auth');
const cityRoutes = express.Router();


cityRoutes.post('/city',authmiddlaware ,(req,res)=>{
    City.register(req,res);
});

cityRoutes.get('/city',authmiddlaware, (req,res)=>{
    City.getAll(req,res);
});

cityRoutes.get('/city/:id',authmiddlaware, (req,res)=>{
    City.getOne(req,res);
})

cityRoutes.patch('/city/:id',authmiddlaware ,(req,res)=>{
    City.update(req,res);
})

cityRoutes.delete('/city/:id',authmiddlaware ,(req,res)=>{
    City.remove(req,res);
})

module.exports = cityRoutes;