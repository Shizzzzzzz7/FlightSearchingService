const express= require("express");
const {AirportController}= require("../../controllers/index");

const router= express.Router();

router.post('/airport', AirportController.create);
router.patch('/airport/:id', AirportController.update);
router.get('/airport/:id', AirportController.get);
router.get('/airport',AirportController.getAll);
router.delete('/airport/:id', AirportController.destroy);

module.exports= router;