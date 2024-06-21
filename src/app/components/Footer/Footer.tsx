import React from "react";
import styles from "./Footer.module.css";
import { Logo } from "../common/Logo";

const Footer = () => {
  return (
    <footer className={styles.footerComponent}>
      &copy; {new Date().getFullYear()}
      <Logo />
    </footer>
  );
};

export default Footer;
