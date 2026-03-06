import express from 'express';
import dotenv from 'dotenv';
import { DB_NAME } from './constants.js';
import connectDB from '../db/index.js';

// require('dotenv').config({path:'./env'});
dotenv.config({
    path:'./env'
})
connectDB()




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