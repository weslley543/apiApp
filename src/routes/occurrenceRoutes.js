const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');
const Ocurrence = require('../controllers/Ocurrance')
const authmiddlaware = require('../middlewares/auth');
const ocurrenceRoutes = express.Router();


// ocurrenceRoutes.use(authmiddlaware);

const upload = multer(uploadConfig);

ocurrenceRoutes.post('/ocurrance',upload.single('img'), (req,res)=>{
    Ocurrence.register(req,res);
});

ocurrenceRoutes.get('/ocurrance', (req,res)=>{
    Ocurrence.index(req,res);
});
// ocurrenceRoutes.get('/ocurrance/:id', (req,res)=>{
//     Ocurrence.getOne(req,res);
// });

ocurrenceRoutes.delete('/ocurrance/:id', (req,res)=>{
    Ocurrence.deleteOne(req,res);
});
module.exports = ocurrenceRoutes;