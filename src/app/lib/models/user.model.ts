import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true,
    },
  email:{ type: String, required: true },
  name:{ type: String, required: true },
  rented:{type:[]}

});

const UserModel = (mongoose.models && mongoose.models.User) || mongoose.model('User', UserSchema);

export { UserModel };