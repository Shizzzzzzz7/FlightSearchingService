const { CityRepository } =require("../repository/index");

class CityService{
    constructor(){
        this.cityRepository= new CityRepository();
    }

    async createCity(name){
        try {

            const result= await this.cityRepository.createCity(name);
            return result;
            
        } catch (error) {

            throw {error};
            
        }
    }

    async updateCity(id,data){
        try {

            const result= await this.cityRepository.updateCity(id,data);
            return result;
            
        } catch (error) {

            throw {error};
            
        }
    }

    async getCity(id){
        try {
            
            const result= await this.cityRepository.getCity(id);
            return result;

        } catch (error) {

            throw {error};
            
        }
    }

    async deleteCity(id){
        try {
            
            const result= await this.cityRepository.deleteCity(id);
            return result;

        } catch (error) {

            throw {error};
            
        }
    }
}

module.exports= CityService;