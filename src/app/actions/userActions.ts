import { connectToDB } from "../lib/mongoose";
import { UserModel } from "../lib/models/user.model";
import { UserType } from "../types/UserType";

export async function createUser(user: UserType) {
    try {
      await connectToDB();
  
      const newUser = await UserModel.create(user);
  
      return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
      console.log(error);
    }
  }