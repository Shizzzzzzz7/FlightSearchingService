const {FlightRepository,AirlplaneRepository}=require("../repository/index");

class FlightService{

    constructor(){
        this.flightRepository= new FlightRepository();
        this.airplaneRepository=new AirlplaneRepository();
    }

    async createFlight(data){
        try {
            
            const airplane= await this.airplaneRepository.getAirplane(data.airplaneId);
            const capacity=airplane.capacity;

            const flight= await this.flightRepository.createFlight({...data, totalSeats:capacity});
            return flight;

        } catch (error) {
            throw {error};
        }
    }
}

module.exports= FlightService;