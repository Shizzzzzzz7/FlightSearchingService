const {Flight}=require("../models/index");

class FlightRepository{

    async createFlight(data){
        try {

            const flight= await Flight.create(data);
            return flight;
            
        } catch (error) {
            console.log("Error in Repository Layer");
            throw {error}
        }
    }

    async getFlight(id){
        try {
            
            const flight= await Flight.findByPk(id);
            return flight;
            
        } catch (error) {
            console.log("Error in Repository Layer");
            throw {error}
        }
    }
}


module.exports= FlightRepository;