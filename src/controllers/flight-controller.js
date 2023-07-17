const {FlightService}=require("../services/index");

const flightService= new FlightService();

const createFlight= async(req,res)=>{
    try {
        
        const flight=await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:"Created new flight",
            error:{}
        });
    } catch (error) {
        console.log("Error in Controller Layer");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to create new flight",
            error: error
        });
        
    }
}

module.exports={
    createFlight
}