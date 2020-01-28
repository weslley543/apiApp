const express = require('express');
const User = require('../controllers/User.js')
const userRoutes = express.Router();

/* Rota de login de usuarios*/
userRoutes.post('/login', (req,res)=>{
    User.login(req,res);
});

userRoutes.post('/register', (req,res)=>{
    User.store(req,res);
})

module.exports = userRoutes;