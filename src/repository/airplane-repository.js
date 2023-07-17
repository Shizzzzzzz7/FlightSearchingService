const {Airplane}= require("../models/index");

class AirplaneRepository{

    async getAirplane(id){
        try {
            
            const plane=await Airplane.findByPk(id);
            return plane;

        } catch (error) {
            console.log("Error in Repository Layer");
            throw {error};
        }
    }
}

module.exports= AirplaneRepository;