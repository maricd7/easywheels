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



export const getCarById = async (_id: string) => {
   await connectToDB();
   try {
     const car = await CarModel.findById(_id).exec();
     if (car) {
       return car.toObject();
     }
     return { car: null }; 
   } catch (error) {
     console.error("Error fetching car:", error);
     throw error; 
   }
};