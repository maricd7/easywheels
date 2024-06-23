export interface ICar {
    _id:string;
    make: string;
    model: string;
    year: number;
    pricePerDay: number;
    availability: boolean;
    features: string[];
    imageUrl: string;
  }