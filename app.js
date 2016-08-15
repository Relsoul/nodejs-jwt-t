'use strict';
const path=require("path");
const config=require("./app/config");
const express=require("express");
const mongodb=require("mongodb");
const mongoose=require("mongoose");
const app=express();
const cookieParser=require("cookie-parser");
const bodyParser=require("body-parser");
const multer  = require('multer');
const jwt=require("jsonwebtoken");

const dbUrl="mongodb://localhost:27017/vr";
mongoose.connect(dbUrl);
app.use("/build",express.static(path.join(__dirname,"build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.listen(3100);



console.log("running 3100");


require("./app/controlles/restFul")(app);

