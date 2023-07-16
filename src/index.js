const express = require("express");
const bodyParser = require("body-parser");

const {PORT}= require("./config/serverConfig");

const apiRoute= require("./routes/index");

const { Airport,City }= require("./models/index");


const startAndSetupServer= async()=>{

    //create the express object

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', apiRoute);

    app.listen(PORT,async()=>{

        console.log(`Server is running on ${PORT}`);

        // const result=await Airport.findAll(
        //     {include:[{
        //         model:City
        //     }]}
        // );

        // const city=await City.findOne({
        //     where:{
        //         id:2
        //     }
        // });

        // const airport= await city.addAirport({
        //     name:"Kazi Nazrul Islam Airport"
        // });

        // console.log(airport);
    });
}

startAndSetupServer();