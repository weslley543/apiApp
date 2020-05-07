const express = require('express');

const emailRoutes = express.Router();
const Email = require('../controllers/Email');
const authmiddlaware = require('../middlewares/auth');


emailRoutes.post('/protocolEmail',authmiddlaware ,(req,res)=>{
    Email.sendNumberProtocol(req,res);
});

module.exports = emailRoutes;

