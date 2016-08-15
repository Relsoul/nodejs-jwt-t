'use strict';
const path=require("path");
const jwt=require("jsonwebtoken");
const config=require("../config.js");
const userLogin=require("./user/login.js");
const category=require( "./category/create.js");
const auth=require("./user/auth.js");


module.exports=function (app){
    app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname,"../views/index.html"))
    });

    app.post("/signup",userLogin.signup);
    app.post("/login",userLogin.login);
    app.post("/logout",userLogin.loginOut);


    //分类创建
    app.get("/api/category/:id",category.getCategory);

    app.get("/api/test",auth.ensureAuthorized,function(req,res){
        res.json({
            user:jwt.decode(req.token)
        })
    })

};