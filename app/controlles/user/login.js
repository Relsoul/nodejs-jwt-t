'use strict';
const userModel=require("../../models/user");
const mongoose=require("mongoose");
const Schema=mongoose.Schema,
    ObjectId=Schema.Types.ObjectId;
const config=require("../../config");
const jwt=require("jsonwebtoken");

let signup = (req, res)=> {
    let userName = req.body.name,
        userPW = req.body.pw,
        userEmail = req.body.email;
    console.log(13,userName)
    userModel.findOne({name: userName}, (err, user)=> {
        if (err) {
            return res.json({
                type: false,
                data: "注册失败"
            })
        }
        if (user) {
            return res.json({
                type: false,
                data: "用户已存在"
            })
        }
        console.log(29);

        //保存用户
        console.log(userName,userPW,userEmail);
        let newUser = new userModel({
            name: userName,
            password: userPW,
            email: userEmail,
        });
        newUser.save((err, _user)=> {
            if (err) {
                console.log(36,err);
                return res.json({
                    type: false,
                    data: "注册失败"
                })
            }
            res.json({
                type: true,
                data: userName,
            })
        })
    })
};



let login=function(req,res){
    let name=req.body.loginName,
        password=req.body.passWord;
    userModel.findOne({name:name},(err,user)=>{
        if(!user){
            //500 错误
            return res.json({
                type:false,
                data:"用户不存在"
            })
        }
        if(err){
            return console.log(err)
        }
        user.getPass(password,function(err,isMatch){
            if(err){console.log(err)}
            if(isMatch){
                let token = jwt.sign({name:user.name,_id:user._id,role:user.role,updateAt:user.updateAt,createAt:user.createAt}, config.tokenJWT, {expiresIn: 60 * 60 * 5});
                res.json({
                    type:true,
                    data:"登录成功正在跳转",
                    user:user.name,
                    token:token
                });
            }else{
                //500 错误
                res.json({
                    type:false,
                    data:"密码不正确,请重新输入"
                })
            }
        })
    })
};

let loginOut=function(req,res){

    res.json({
        isLogout:true
    })
};


module.exports={
    signup,
    login,
    loginOut
}