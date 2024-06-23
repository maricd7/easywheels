   'use server'
import { ObjectId } from "mongodb";
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



export const getCarById = async (_id:ObjectId) => {
   await connectToDB();


   const carsQuery = CarModel.find({})
      if(carsQuery){
          const cars = await carsQuery.exec()
    if(cars){
       try {
        const car = cars.find(car => car._id === _id);
        if (car) {
          return car.toObject();
        }
     return { car: null }; 
   } catch (error) {
     console.error("Error fetching car:", error);
     throw error; 
   }
    }

 }
};