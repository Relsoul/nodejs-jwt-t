'use strict';
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const pskey=10;
const Schema=mongoose.Schema,
    ObjectId=Schema.Types.ObjectId;

const UserSchema=new mongoose.Schema({
    name:{
        unique:true,
        type:String,
        required:true,
        min:2,
        max:16
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:10
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    updateAt:{
        type:Date,
        default:Date.now()
    }
});

UserSchema.pre("save",function(next){
    let user=this;
    if(user.isNew){
        user.createAt=user.updateAt=Date.now()
    }else{
        user.updateAt=Date.now()
    }
    bcrypt.genSalt(pskey,function(err,salt){
        if(err){
            return next(err)
        }
        bcrypt.hash(user.password,salt,function(err,hash){
            if(err){
                return next(err)
            }
            user.password=hash;
            next()
        })
    })
});

UserSchema.methods={
    //实例方法
    getPass:function(_password,cb){
        bcrypt.compare(_password,this.password,function(err,isMatch){
            if(err){
                return cb(err)
            }
            console.log("pw",isMatch);
            cb(null,isMatch)
        })
    }
};

const User=mongoose.model("User",UserSchema);

module.exports=User;