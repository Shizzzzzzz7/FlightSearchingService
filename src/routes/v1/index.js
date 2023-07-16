const express= require("express");
const {CityController}= require("../../controllers/index");

const router= express.Router();

router.post('/city', CityController.create);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city',CityController.getAll);
router.delete('/city/:id', CityController.destroy);

module.exports= router;