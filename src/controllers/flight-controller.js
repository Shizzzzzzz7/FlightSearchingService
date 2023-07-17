const {FlightService}=require("../services/index");

const flightService= new FlightService();

const create= async(req,res)=>{
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

const get= async(req,res)=>{
    try {

        const flight= await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data:flight,
            success:true,
            message:"Fetched flight",
            error:{}
        });
            
     } catch (error) {
        console.log("Error in Controller Layer");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to fetch flight",
            error: error
        });
    }
}

module.exports={
    create,
    get
}