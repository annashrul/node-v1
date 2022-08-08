"use strict";
const Auth = require("../models/auth.model");
const Helper =  require("../../helper/general.helper");

exports.login = function (req, res) {
    let field = new Auth(req.body);

    Auth.login(field.email,(err,result)=>{
        if(result.length < 1){
            res.status(400).send({ error: true, message: "user not found" });
        }

        const token = Helper.generateToken(result[0].id);
        Object.assign(result[0],{token:token});
        res.json({
            error:false,
            message:"success",
            data:result[0]
        })
    });
};
