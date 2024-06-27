import React from "react";
import styles from "./CarStatus.module.css";

const CarStatus = ({ available }: any) => {
  return (
    <>
      {available ? (
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
    </>
  );
};

export default CarStatus;
