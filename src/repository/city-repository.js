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

            // const result= await City.update(data, {
            //     where:{
            //         id:id
            //     }
            // });

            const result= await City.findByPk(id);

            result.name=data.name;
            await result.save();
            return result;
            
        } catch (error) {

            throw {error};
            
        }
    }

    async getCity(id){
        try{const result= await City.findByPk(id);
        return result;
    }catch(error){
        throw {error};
    }
    }
}

module.exports= CityRepository;