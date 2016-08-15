'use strict';
const shopModel = require("../../models/shop");
const categoryModel = require("../../models/category");
const async = require("async");

let createCategory=function(req,res){

};

let getCategory=function(req,res){
    let categoryId=req.params.id;
    let findArg;
    if(!categoryId){
        findArg={}
    }else{
        findArg={_id:categoryId}
    }

    categoryModel.find(findArg,(err,category)=>{
        if(err){
            //500
            return res.json({})
        }
        return res.json({})
    })
};

module.exports={
    createCategory,
    getCategory
}