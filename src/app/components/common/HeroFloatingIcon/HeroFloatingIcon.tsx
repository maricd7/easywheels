"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import styles from "./HeroFloatingIcon.module.css";

type HeroFloatingIconProps = {
  icon: string;
  text: string;
};
const HeroFloatingIcon = ({ icon, text }: HeroFloatingIconProps) => {
  return (
    <div className={styles.iconContainer}>
      <Icon icon={icon} width="48" height="48" />
      <span className={styles.iconText}>{text}</span>
    </div>
  );
};

export default HeroFloatingIcon;
