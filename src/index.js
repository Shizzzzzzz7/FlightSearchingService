const express = require("express");


const startAndSetupServer= async()=>{

    //create the express object

    const app=express();

    const PORT= 3000;

    app.listen(PORT,()=>{

        console.log(`Server is running on ${PORT}`)
    });
}

startAndSetupServer();