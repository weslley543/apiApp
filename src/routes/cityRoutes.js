const express = require('express');
const City = require('../controllers/City')
const authmiddlaware = require('../middlewares/auth');
const cityRoutes = express.Router();

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

cityRoutes.delete('/city/:id', (req,res)=>{
    City.remove(req,res);
})

module.exports = cityRoutes;