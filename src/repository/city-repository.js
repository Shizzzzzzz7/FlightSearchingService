const {City}= require("../models/index");

class CityRepository{

    async createCity(name){
        try{

            const city = await City.create(name);
            return city;

        }catch(err){
            throw {err};
        }
    }

    async deleteCity(id){
        try{

            await City.destroy({
                where:{
                    id
                }
            });
            
            return true;
        }catch(err){
            throw {err};
        }
    }

    async updateCity(id,data){
        try {

            const result= await City.update(data, {
                where:{
                    id:id
                }
            });

            return result;
            
        } catch (error) {

            throw {error};
            
        }
    }

    async getCity(cityId){
        try{const result= await City.findByPk(cityId);
        return result;
    }catch(error){
        throw {error};
    }
    }
}

module.exports= CityRepository;