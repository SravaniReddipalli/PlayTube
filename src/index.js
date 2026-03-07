import express from 'express';
import dotenv from 'dotenv';
import { DB_NAME } from './constants.js';
import connectDB from '../db/index.js';
import { app } from './app.js';

// require('dotenv').config({path:'./env'});
dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log(`App is running on port: ${process.env.PORT||3000}`);
    });
})
.catch((error)=>{
    console.log("Mongo DB connection failed!!!!",error);
})




// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

// import express from "express";
// const app=express();

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("Error: ",error);
//             throw error;
//         })

//         app.listen(process.env.MONGODB_URI,()=>{
//             console.log(`App is running on port: ${process.env.PORT}`);
//         })
//     } catch (error) {
//        console.error("Error:",error) 
//        throw error;
//     }
// })()