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
}


module.exports= FlightRepository;