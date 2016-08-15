'use strict';
const userModel=require("../../models/user");
const mongoose=require("mongoose");
const Schema=mongoose.Schema,
    ObjectId=Schema.Types.ObjectId;
const jwt=require("jsonwebtoken");




let ensureAuthorized=function(req,res,next){
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[0];
        req.token = bearerToken;
        let user=jwt.decode(req.token);
        console.log(user.exp<= Date.now());
        if(user){
            req.user=user;
            next()
        }else{
            res.json({
                type:false,
                data:"无效的token"
            })
        }
    } else {
        res.json({
            type:false,
            data:"请在头部附加token"
        })
    }
};

let adminAuthorized=function(req,res,next){
    if(req.user.role>=10){
        next()
    }else{
        res.json({
            type:false,
            data:"权限不足"
        })
    }
};


module.exports={
    ensureAuthorized,
    adminAuthorized
};