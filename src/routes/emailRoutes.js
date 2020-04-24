const express = require('express');
const mailController = require('../controllers/Mail');
const emailRoutes = express.Router();

emailRoutes.post('/email', (req,res) => {
    mailController.sendEmail(req,res);
})

module.exports = emailRoutes;