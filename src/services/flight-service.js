const {FlightRepository,AirlplaneRepository}=require("../repository/index");
const { compareTime }=require("../utils/compareTime-helper")
class FlightService{

    constructor(){
        this.flightRepository= new FlightRepository();
        this.airplaneRepository=new AirlplaneRepository();
    }

    async createFlight(data){
        try {
            
            if(!compareTime(data.departureTime,data.arrivalTime)){
                throw {error:"Departure Time cannot be greater than Arrival Time"};
            }

            const airplane= await this.airplaneRepository.getAirplane(data.airplaneId);
            const capacity=airplane.capacity;

            const flight= await this.flightRepository.createFlight({
                ...data, totalSeats:capacity
            });
            return flight;

        } catch (error) {
            console.log("Error in Service Layer");
            throw {error};
        }
    }
}

module.exports= FlightService;