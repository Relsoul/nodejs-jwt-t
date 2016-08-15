'use strict';
const mongoose=require("mongoose");
const Schema=mongoose.Schema,
    ObjectId=Schema.ObjectId;
const ShopSchema=new Schema({
    name:{type:String},
    sid:{type:Number,default:0},
    music:[{type:ObjectId,ref:"Music"}],
    backgroundImg:[{
        name:String,
        url:String
    }],
    createAt:{type: Date, default: Date.now}
});

const Shop=mongoose.model("Shop",ShopSchema);
module.exports=Shop;


