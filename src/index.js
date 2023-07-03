const express = require("express");

const {PORT}= require("./config/serverConfig");


const startAndSetupServer= async()=>{

    //create the express object

    const app=express();

    app.listen(PORT,()=>{

        console.log(`Server is running on ${PORT}`)
    });
}

startAndSetupServer();