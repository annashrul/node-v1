const jwt = require('jsonwebtoken');
const User = require("../src/models/user.model");
require('dotenv').config();

module.exports = async (req, res, next) => {
    try {
        let author=req.headers.authorization;
        if(author === undefined) res.status(403).send({error:true,message:"invalid token"});
        const token = author.split(' ')[1];
        const incToken= token.includes('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
        if(!incToken) res.status(403).send({error:true,message:"invalid token"});

        const decodedToken = await jwt.verify(token, "secret_key");
        const userId = decodedToken.userId;

        User.findById("id",userId,(err,result)=>{
            if(result.length===0) res.status(400).send({error:true,message:"invalid token"});
            next();
        })
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};