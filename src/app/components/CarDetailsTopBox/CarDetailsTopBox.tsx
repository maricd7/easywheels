"use client";
import React, { useEffect, useState } from "react";
import styles from "./CarDetailsTopBox.module.css";
import Image from "next/image";
import { getCarById } from "@/app/actions/carsActions";
import { ICar } from "@/app/types/CarType";
import { useSearchParams } from "next/navigation";

const CarDetailsTopBox = () => {
  const [car, setCar] = useState<ICar>();
  const params = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    const getCar = async () => {
      const awaited = await getCarById(id as string);
      setCar(awaited);
    };

    getCar();
  }, []);

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
