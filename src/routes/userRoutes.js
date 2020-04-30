const express = require('express');
const User = require('../controllers/User.js')
const userRoutes = express.Router();

/* Rota de login de usuarios*/
userRoutes.post('/login', async (req,res)=>{
    User.login(req,res);
});

userRoutes.post('/register', async (req,res)=>{
    User.store(req,res);
})

userRoutes.post('/recoveryPassword', async (req,res)=>{
    User.recoveryPassword(req,res);
})

userRoutes.patch('/resetPassword', async (req,res) =>{
    User.resetPassword(req,res);
})

module.exports = userRoutes;