"use client";
import React, { useEffect, useState } from "react";
import styles from "./PopularCars.module.css";
import { Heading, Paragraph } from "../common";
import CarCard from "../common/CarCard/CarCard";
import { ICar } from "@/app/types/CarType";

const PopularCars = ({ results }: any) => {
  const [cars, setCars] = useState<ICar[]>();
  useEffect(() => {
    setCars(results.slice(0, 4));
  }, [results]);

  return (
    <section className={styles.popularCarsSection}>
      <div className={styles.popularCarsSectionMainText}>
        <Heading text="Popular Car Rentals" />
        <Paragraph text="Select from our popular cars collection." />
      </div>
      <div className={styles.popularCarsList}>
        {cars && cars.map((car, index) => <CarCard car={car} key={index} />)}
      </div>
    </section>
  );
};

export default PopularCars;
