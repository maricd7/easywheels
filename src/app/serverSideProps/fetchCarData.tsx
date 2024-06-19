import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb";

type Car = {
  _id: string;
  make: string;
  model: string;
  year: number;
  daily_rate: number;
  availability: boolean;
  location_id: string;
};

export const getServerSideProps: GetServerSideProps<{
  cars: Car[];
}> = async () => {
  const client = await clientPromise;
  const db = client.db("yourDatabaseName");

  const cars = await db.collection("cars").find({}).toArray();

  const carsData: Car[] = cars.map((car) => ({
    _id: car._id.toString(),
    make: car.make,
    model: car.model,
    year: car.year,
    daily_rate: car.daily_rate,
    availability: car.availability,
    location_id: car.location_id.toString(),
  }));

  return { props: { cars: carsData } };
};
