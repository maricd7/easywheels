"use client";
import Image from "next/image";
import React from "react";
import { Heading } from "../common/Heading";
import styles from "./Hero.module.css";
import { Paragraph } from "../common/Paragraph";
import { CtaButton } from "../common/CtaButton";
import { HeroDatePicker } from "../HeroDatePicker";
import { HeroFloatingIcon } from "../common/HeroFloatingIcon";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContentContainer}>
        <div className={styles.heroText}>
          <Heading text="Get Your Dream Car Rental" />
          <Paragraph text="Discover Seamless Travel Solutions: From Economy to Luxury, Our Car Rentals Offer Comfort, Style, and Affordability" />
        </div>
        <CtaButton text="Login" />
      </div>
      {/* <HeroFloatingIcon text="90L" icon="fluent-emoji:fuel-pump" /> */}
      <HeroDatePicker />
    </section>
  );
};

export default Hero;
