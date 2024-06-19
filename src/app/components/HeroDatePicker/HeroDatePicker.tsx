import React from "react";
import styles from "./HeroDatePicker.module.css";
import { CtaButton } from "../common/CtaButton";

const HeroDatePicker = () => {
  return (
    <div className={styles.heroDatePickerContainer}>
      <label className={styles.heroDatePickerInput}>
        Pick Up Date
        <input type="date" />
      </label>
      <label className={styles.heroDatePickerInput}>
        Release Date
        <input type="date" />
      </label>
      <CtaButton text="Quick Start" />
    </div>
  );
};

export default HeroDatePicker;
