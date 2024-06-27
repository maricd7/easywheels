"use client";
import React, { useEffect, useState } from "react";
import styles from "./CarDetailsTopBox.module.css";
import Image from "next/image";
import { getCarById } from "@/app/actions/carsActions";
import { ICar } from "@/app/types/CarType";
import { useSearchParams } from "next/navigation";
import { CarStatus } from "../common/CarStatus";
import { CtaButton } from "../common/CtaButton";

const CarDetailsTopBox = () => {
  const [car, setCar] = useState<ICar>();
  const params = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    const getCar = async () => {
      const awaited = await getCarById(id as any);
      setCar(awaited);
    };

    getCar();
  }, [id]);
  console.log(car, "Auto");
  if (!car) {
    return <h2>Car not found.</h2>;
  }
  return (
    <section className={styles.detailsSection}>
      <div className={styles.mainBox}>
        <Image src={car?.imageUrl} alt="car-name" width={640} height={380} />
        <div className={styles.mainInfoContainer}>
          <div>
            <h2>
              {car.make} {car.model}
            </h2>
            {!car.availability ? (
              <p>This car is already rented.</p>
            ) : (
              <p>This car is available for rent.</p>
            )}
          </div>
          <h3>Price: {car.pricePerDay}BAM per day</h3>
          <div className={styles.features}>
            <h3>Features:</h3>
            <div className={styles.carFeatures}>
              {car.features.map((feature, index) => (
                <span key={index}>{feature} </span>
              ))}
            </div>
          </div>
          <CtaButton text={`Rent Now for ${car.pricePerDay}BAM a day`} />
        </div>
      </div>
    </section>
  );
};

export default CarDetailsTopBox;
