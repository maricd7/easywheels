import React from "react";
import styles from "./CtaButton.module.css";

type CtaButtonProps = {
  text: string;
};

const CtaButton = ({ text }: CtaButtonProps) => {
  return <button className={styles.ctaButton}>{text}</button>;
};

export default CtaButton;
