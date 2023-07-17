const express= require("express");
const {FlightController}= require("../../controllers/index");

const router= express.Router();

router.post('/flights',FlightController.create);
router.get('/flights/:id',FlightController.get);

module.exports= router;