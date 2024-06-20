import mongoose, { Schema } from 'mongoose';
import { ICar } from '@/app/types/CarType';


const CarSchema: Schema = new Schema<ICar>({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  pricePerDay: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  features: { type: [String], default: [] },
  imageUrl: { type: String, required: true }
});

const CarModel = mongoose.models.Car || mongoose.model<ICar>('Car', CarSchema);

export { CarModel };
