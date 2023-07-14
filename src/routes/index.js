const express= require("express");

const router= express.Router();

const apiV1Route= require("./v1/index");
router.use('/v1',apiV1Route);

module.exports= router;