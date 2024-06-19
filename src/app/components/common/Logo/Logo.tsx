"use client";
import Link from "next/link";
import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link className={styles.logo} href="/">
      EasyWheels
    </Link>
  );
};

export default Logo;
