"use client";
import React, { useEffect, useState } from "react";
import styles from "./CarDetailsTopBox.module.css";
import Image from "next/image";
import { getCarByName } from "@/app/actions/carsActions";
import { ICar } from "@/app/types/CarType";
const CarDetailsTopBox = () => {
  const [car, setCar] = useState<ICar>();

  useEffect(() => {
    const getCar = async () => {
      const carQuery = { _id: "66732d6c734aec3c9f574e6d" };
      const awaited = await getCarByName(carQuery);
      setCar(awaited);
    };

    getCar();
  }, []);
  console.log(car, "kar");

  if (!car) {
    return <h2>Car not found.</h2>;
  }
  return (
    <section className={styles.detailsSection}>
      <div className={styles.mainBox}>
        <Image src={car?.imageUrl} alt="car-name" width={640} height={380} />
        <div>
          <h2>
            {car.make} {car.model}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CarDetailsTopBox;
