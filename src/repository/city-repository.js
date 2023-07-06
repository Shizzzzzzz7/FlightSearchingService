const {City}= require("../models/index");

class CityRepository{

    async create(name){
        try{

            const city = await City.create({name});
            return city;

        }catch(err){
            throw {err};
        }
    }

    async delete(id){
        try{

            await City.destroy({
                where:{
                    id
                }
            });
            

        }catch(err){
            throw {err};
        }
    }
}

module.exports= CityRepository;