const User = require('../models/User.js');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');
module.exports = {
    async login (req,res){
        const {email, password} = req.body;
        let hash = crypto.createHash("SHA512").update(password).digest("hex");
        console.log('login');
       try{
        let user = await User.findOne({email}).select('+password');
        if(!user){
            res.status(400).json({msg:'Usuario não cadastrado '});
        }

        if(hash!=user.password){
            res.status(400).json({msg:'Senha incorreta !!'});
        }
        user.password = undefined;
        
        const token = jwt.sign({id:user.id}, authConfig.secret,{expiresIn:3600})
        
        res.status(200).send({user, token}); 
       }
       catch(err){
           res.status(401).json({msg:'err'});
       }

    },
    async store(req, res){
        const {email, password, name} = req.body
        let hash = crypto.createHash("SHA512").update(password).digest("hex");
        
        try{

            let user = await User.findOne({email});
        
        
            if(!user){
                user = await User.create({name,email,password:hash});
            }
            user.password = undefined;
            const token = jwt.sign({id:user.id}, authConfig.secret,{expiresIn:86400})

            res.json({user, token});
        }catch(err){
            res.send(err);
        }
    }
}