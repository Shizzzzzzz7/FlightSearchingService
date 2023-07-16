const {Airplane}= require("../models/index");

class AirplaneRepository{

    async getAirplane(id){
        try {
            
            const plane=await Airplane.findByPk(id);
            return plane;

        } catch (error) {
            throw {error};
        }
    }
}

module.exports= AirplaneRepository;