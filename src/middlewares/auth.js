const jwt = require('jsonwebtoken');
const authconfig = require('../config/auth.json');

module.exports = (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error:"Token não recebido"});
    }
    const parts = authHeader.split(' ');
    if(!parts.length === 2){
        res.json({error:"Token invalido"});
    }
    const [scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).json({erro:'Token mal formatado'});
    }
    jwt.verify(token, authconfig.secret, (err, decoded)=>{
        if(err){
            res.status(401).send({msg:'erro no token'});
        }
        req.userId=decoded.id
        return next();
    })
}