const express = require('express');
const Ocurrence = require('../controllers/Ocurrance')
const ocurrenceRoutes = express.Router();
const authmiddlaware = require('../middlewares/auth');


ocurrenceRoutes.use(authmiddlaware);

ocurrenceRoutes.post('/register', (req,res)=>{
    
});

ocurrenceRoutes.get('/ocurrances', (req,res)=>{

});

ocurrenceRoutes.put('/ocurrance/:idOcurrance', (req,res)=>{

});

ocurrenceRoutes.delete('/ocurrance/:idOcurrance', (req,res)=>{

});

module.exports = ocurrenceRoutes;