const express= require("express");

const router= express.Router();

const {apiV1CityRoute,apiV1FlightRoute,apiV1AirportRoute}= require("./v1/index");

router.use('/v1',apiV1CityRoute);
router.use('/v1',apiV1FlightRoute);
router.use('/v1',apiV1AirportRoute);

module.exports= router;