import React from "react";
import { ICar } from "@/app/types/CarType";
import Image from "next/image";
import styles from "./CarCard.module.css";
import { CtaButton } from "../CtaButton";
import Link from "next/link";
type CarCardProps = {
  car: ICar;
};

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Link
      href={{
        pathname: `cars-details/${car.make}`,
        query: { id: car._id } as any,
      }}
      className={styles.carCardContainer}
    >
      <Image src={car.imageUrl} width={200} height={200} alt="car" />
      <div className={styles.carCardName}>
        <h3>
          {car.make} {car.model}
        </h3>
        <div className={styles.carInfo}>
          <p>
            Year: <span>{car.year}</span>
          </p>
        </div>
      </div>
      <p className={styles.carPrice}>
        Price:{" "}
        <span className={styles.priceContainer}>
          <span className={styles.cardPriceMain}>{car.pricePerDay} BAM</span>
          <span className={styles.cardSmText}>Per Day</span>
        </span>
      </p>
      {car.availability ? (
        <div className={styles.availabilityStatus}>
          <button className={styles.rentButton}>Rent Now</button>
          <span className={styles.availableNow}>AVAILABLE NOW</span>
        </div>
      ) : (
        <div className={styles.availabilityStatus}>
          <button className={styles.rentButtonDisabled}>Rent Now</button>
          <span className={styles.booked}>Booked</span>
        </div>
      )}
      <div className={styles.carFeatures}>
        {car.features.map((feature, index) => (
          <span key={index}>{feature} </span>
        ))}
      </div>
    </Link>
  );
};

export default CarCard;
