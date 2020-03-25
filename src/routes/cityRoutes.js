const express = require('express');
const City = require('../controllers/City');
const cityRoutes = express.Router;
const authmiddlaware = require('../middlewares/auth');

cityRoutes.use(authmiddlaware);

cityRoutes.post('/city', (req,res)=>{
    City.register(req,res);
});

cityRoutes.get('/city', (req,res)=>{
    City.getAll(req,res);
});

cityRoutes.get('/city/:id', (req,res)=>{
    City.getOne(req,res);
})

cityRoutes.patch('/city/:id', (req,res)=>{
    City.update(req,res);
})

cityRoutes.delete('city/:id', (req,res)=>{
    City.delete(req,res);
})
