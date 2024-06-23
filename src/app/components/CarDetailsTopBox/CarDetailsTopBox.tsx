"use client";
import React, { useEffect, useState } from "react";
import styles from "./CarDetailsTopBox.module.css";
import Image from "next/image";
import { getCarByName } from "@/app/actions/carsActions";
import { ICar } from "@/app/types/CarType";
import { usePathname } from "next/navigation";

const CarDetailsTopBox = () => {
  const [car, setCar] = useState<ICar>();

  const pathname = usePathname();

  useEffect(() => {
    const getCar = async () => {
      const _id = String(pathname.replace("/cars-details/", ""));
      const carQuery = { _id: _id };
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
