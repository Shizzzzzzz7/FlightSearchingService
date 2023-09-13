const express= require("express");
const {FlightController}= require("../../controllers/index");
const {FlightMiddleware}= require("../../middlewares/index");

const router= express.Router();

router.post('/flights', FlightMiddleware.validateCreateFlight ,FlightController.create);
router.get('/flights/:id',FlightController.get);
router.get('/flights',FlightController.getAll);
router.patch('/flights/:id', FlightController.updateFlight);

module.exports= router;