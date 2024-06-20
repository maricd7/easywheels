import { CarModel } from "../lib/models/car.model";
import { connectToDB } from "../lib/mongoose"

export const getCars = async () => {
 connectToDB();

 const carsQuery = CarModel.find({})
 if(carsQuery){
    const cars = await carsQuery.exec()
    return {cars}
 }
 return { cars: [] };
}
