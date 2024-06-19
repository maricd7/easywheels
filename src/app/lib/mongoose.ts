import mongoose from "mongoose";

let isConnected = false 

export const connectToDB  = async () =>{

    mongoose.set('strictQuery',true)

    if(!process.env.MONGO_URI){
        return console.log('MongoDb url not found')
    }
    if(isConnected){
        return console.log('Already Connected')
    }

    try{
        await mongoose.connect(process.env.MONGO_URI)
        isConnected = true
        console.log('Connected to MongoDb')
    }catch{
        console.log('Failed : Connected to MongoDb ')

    }
}