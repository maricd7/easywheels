import mongoose, { Schema } from 'mongoose';
import { ICar } from '@/app/types/CarType';

const CarSchema: Schema = new Schema<ICar>({
  _id:{ type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  pricePerDay: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  features: { type: [String], default: [] },
  imageUrl: { type: String, required: true }
});

const CarModel = (mongoose.models && mongoose.models.Car) || mongoose.model<ICar>('Car', CarSchema);

export { CarModel };