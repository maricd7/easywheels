   'use server'
import { CarModel } from "../lib/models/car.model";
import { connectToDB } from "../lib/mongoose"

export const getCars = async () => {
 connectToDB();

 const carsQuery = CarModel.find({})
 if(carsQuery){
    const cars = await carsQuery.exec()
    return cars
 }
 return { cars: [] };
}
export const getCarByName = async (carQuery:any) => {
   await connectToDB();
   const car = await CarModel.findOne(carQuery).exec();

   if (car) {
     return car.toObject();
   }
   return { car: [] };
 };