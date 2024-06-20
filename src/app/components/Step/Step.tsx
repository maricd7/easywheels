"use client";
import React from "react";
import styles from "./Step.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";

type StepProps = {
  icon: string;
  textMain: string;
  textSub: string;
};
const Step = ({ icon, textMain, textSub }: StepProps) => {
  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepIconContainer}>
        <Icon icon={icon} width="64" height="64" style={{ color: "#222222" }} />
      </div>

      <div className={styles.stepTextContainer}>
        <span className={styles.stepTextMain}>{textMain}</span>
        <span className={styles.stepTextSub}>{textSub}</span>
      </div>
    </div>
  );
};

export default Step;
