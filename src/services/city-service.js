const { CityRepository } =require("../repository/index");

class CityService{
    constructor(){
        this.cityRepository= new CityRepository();
    }

    async createCity(names){
        try {

            const result= await this.cityRepository.createCity(names);
            return result;
            
        } catch (error) {
            console.log("Error in Service Layer");
            throw {error};
            
        }
    }

    async updateCity(id,data){
        try {

            const result= await this.cityRepository.updateCity(id,data);
            return result;
            
        } catch (error) {
            console.log("Error in Service Layer");
            throw {error};
            
        }
    }

    async getCity(id){
        try {
            
            const result= await this.cityRepository.getCity(id);
            return result;

        } catch (error) {
            console.log("Error in Service Layer");
            throw {error};
            
        }
    }

    async deleteCity(id){
        try {
            
            const result= await this.cityRepository.deleteCity(id);
            return result;

        } catch (error) {
            console.log("Error in Service Layer");
            throw {error};
            
        }
    }

    async getAllCity(filter){
        try {

            const cities= await this.cityRepository.getAllCity(filter);
            return cities;
            
        } catch (error) {
            console.log("Error in Service Layer");
            throw {error};
            
        }
    }
}

module.exports= CityService;