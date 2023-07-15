const express = require("express");
const bodyParser = require("body-parser");

const {PORT}= require("./config/serverConfig");

const apiRoute= require("./routes/index");

const { Airport }= require("./models/index");


const startAndSetupServer= async()=>{

    //create the express object

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', apiRoute);

    app.listen(PORT,async()=>{

        console.log(`Server is running on ${PORT}`);

        const result=await Airport.findAll();

        console.log(result);
    });
}

startAndSetupServer();