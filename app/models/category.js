'use strict';
const mongoose=require("mongoose");
const Schema=mongoose.Schema,
    ObjectId=Schema.ObjectId;
const CategorySchema=new Schema({
    name:{type:String,unique:true},
    sid:{type:Number,default:0},
    shops:[{type:ObjectId,ref:"Shop"}],
    createAt:{type: Date, default: Date.now}
});

const Category=mongoose.model("Category",CategorySchema);
module.exports=Category;