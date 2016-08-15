'use strict';
const mongoose=require("mongoose");
const Schema=mongoose.Schema,
    ObjectId=Schema.ObjectId;
const BlogSchema=new Schema({
    name:{type:String},
    sid:{type:Number,default:0},
    title:{type:String},
    content:{type:String},
    img:[{type:String}],
    createAt:{type: Date, default: Date.now},
    updateAt:{
        type:Date,
        default:Date.now()
    }
});

BlogSchema.pre("save",(next)=>{
    let blog=this;
    if(blog.isNew){
        blog.meta.createAt=blog.meta.updateAt=Date.now()
    }else{
        blog.meta.updateAt=Date.now()
    }

});

const Blog=mongoose.model("Blog",BlogSchema);
module.exports=Blog;