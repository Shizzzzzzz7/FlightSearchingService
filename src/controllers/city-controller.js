const { CityService }= require("../services/index");

const cityService= new CityService();

//POST -> /city
const create= async(req,res)=>{
    try {

        const response=await cityService.createCity(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "City created Successfully",
            err:{}
        });
        
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create City",
            err:{error}
        });
        
    }
}

//PATCH -> /city/:id
const update= async(req,res)=>{
    try {

        const response=await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "City updated Successfully",
            err:{}
        });
        
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update City",
            err:{error}
        });
        
    }
}

//GET -> /city/:id
const get= async(req,res)=>{
    try {

        const response=await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "City fetched Successfully",
            err:{}
        });
        
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to get City",
            err:{error}
        });
        
    }
}

//DELETE -> /city/:params
const destroy= async(req,res)=>{
    try {

        const response=await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "City deleted Successfully",
            err:{}
        });
        
    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to delete City",
            err:{error}
        });
    }
}

module.exports={
    create,
    update,
    get,
    destroy
}