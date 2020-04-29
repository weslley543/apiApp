const express = require('express');

const emailRoutes = express.Router();
const Email = require('../controllers/Email');
const authmiddlaware = require('../middlewares/auth');

emailRoutes.use(authmiddlaware);

emailRoutes.post('/protocolEmail', (req,res)=>{
    Email.sendNumberProtocol(req,res);
});

module.exports = emailRoutes;

